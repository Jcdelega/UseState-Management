# 🛒 Shopping List App

A simple and interactive shopping list web application built with **Vite**, **React**, and **Bootstrap**. Users can add and remove items from their list dynamically.

---

## 📦 Features

- Add items to your shopping list
- Delete individual items from the list
- Styled with Bootstrap for clean, responsive UI
- State is managed using React hooks

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shopping-list-app.git
cd shopping-list-app 
````

### 2. Install Dependencies
Make sure you have Node.js (v16+) installed. Then install all the required packages:

```bash
npm install
````

### 3. Run the Development Server

```bash
npm run dev
````
After running the command, open your browser and go to:
```bash
http://localhost:5173/
````

## 🧱 Project Structure
```bash
shopping-list-app/
├── public/
├── src/
│   ├── components/
│   │   └── List.jsx         # Component to display and manage the shopping list
│   ├── App.jsx              # Main React component
│   ├── main.jsx             # Entry point for the Vite + React app
│   └── index.css            # Custom styles (includes Bootstrap)
├── package.json
├── vite.config.js
└── README.md
````

## 🎨 Styling

This project uses Bootstrap and custom CSS:

- Bootstrap is installed via NPM and imported into the project.
- Dark mode styling and buttons are enhanced for clarity and usability.

Make sure your CSS or index.css includes:.

```bash
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
````

## 💡 How It Works

### 🖊️ Adding Items

1. Type an item name in the input field.

2. Click "Add to the shopping list".

3. The item appears in the list with a "Delete from this list" button.

### ❌ Deleting Items
Click on "Delete from this list" next to any item to remove it instantly from the shopping list.

### ⚙️ State Management
React's useState hook is used to:

- Store the current list of items.

- Update the list when new items are added or deleted.

## 🛠 Dependencies
 - React

- Vite

- Bootstrap

- Bootstrap Icons

## ✅ Future Improvements
- Persist list using local storage or database.

- Add input validation and duplicate checks.

- Responsive layout improvements.
## 👤 Author
**Jcdelega**