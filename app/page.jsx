"use client";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const [items, setItems] = useState([
  ]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [total, setTotal] = useState(0);
  // Add item to DB
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      // setItems([...items, newItem]);
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem({ name: "", price: "" });
    }
  };
  // Read item from DB
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      // Read total from itemsArr
      const calTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        setTotal(totalPrice);
      };
      calTotal();
      return () => unsubscribe();
    });
  }, []);
  // Delete item from DB
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl p-4 text-center">Coin Control</h1>
        <div className="bg-slate-800 p-4 rounded-lg">
          <form className="flex flex-col md:flex flex-col-3 items-center text-black">
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className=" mt-8 md:col-span-3 p-3 border w-60 h-8 rounded"
              type="text"
              placeholder="Enter Item"
            />
            <input
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              value={newItem.price}
              className="mt-8 md:col-span-2 p-3 border mx-3 w-40 h-8 rounded num"
              type="number"
              placeholder="Enter $"
            />
            <button
              onClick={addItem}
              className="text-white mt-8 bg-green-600 hover:bg-green-800 p-3 text-xl rounded-full w-16 h-16"
              type="submit"
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li
                key={id}
                className="mt-8 my-4w-full flex justify-between bg-slate-950 rounded items-center"
              >
                <div className="p-4 w-full justify-between flex">
                  <span className="capitalize">{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="ml-8 mr-4 flex justify-center  p-2  rounded-full w-8 h-8 bg-red-800 hover:bg-red-900 "
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {items.length < 1 ? (
            ""
          ) : (
            <div className="flex justify-between p-3">
              <span>Total</span>
              <span>${total}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
