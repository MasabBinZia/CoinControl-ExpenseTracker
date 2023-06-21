# CoinControl Expense Tracker

CoinControl is a web application that helps you track your expenses and manage your finances. It is built using Next.js, Tailwind CSS, and Firebase.

## Features
- Expense tracking: Add, edit, and delete expenses with real-time updates.


## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/coincontrol.git
```

2. Navigate to the project directory:

```
cd coincontrol
```

3. Install the dependencies:

```
npm install
```

4. Set up Firebase project:

   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   - Enable Firebase Authentication and Firestore in your Firebase project.
   - Copy the Firebase configuration object (containing API keys and credentials) for the web app.

5. Create a `.env.local` file in the project root directory and add the following:

```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, and other placeholders with the respective values from your Firebase project configuration.

6. Start the development server:

```
npm run dev
```

7. Open your browser and visit `http://localhost:3000` to access CoinControl.



## Contributing

Contributions are welcome! If you'd like to contribute to CoinControl, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request, detailing the changes you made.

Please ensure that your code follows the project's coding style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The [Next.js](https://nextjs.org/) framework
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

## Contact

If you have any questions or suggestions, feel free to reach out to the project maintainers:

- MasabBinZia - masabmbz5@gmail.com

We hope you find CoinControl helpful in managing your expenses!
