# Product Management App

A clean, modern, and fully functional **Object-Oriented Programming (OOP)** based product management web application.

### 🌐 [Visit Demo](https://sara-jafari-developer.github.io/Product-Manager-App-OOP/)

## ✨ Features

- ➕ Add new products with title, price, image, and background color
- 🖼️ Support for image upload (converted to Base64)
- 🎨 8 elegant gradient background themes
- 🗑️ Delete products with confirmation using SweetAlert2
- 💾 Data persistence with `localStorage`
- 📱 Fully responsive design
- ✅ Real-time form validation
- 🏠 Default sample products on first load

## 🛠️ Technologies & Architecture

- **HTML5** + **CSS3** (Tailwind CSS)
- **Vanilla JavaScript (ES6+)**
- **Object-Oriented Programming (OOP)** architecture
- **SweetAlert2** for modern alerts
- **FileReader API** for image handling

### OOP Principles Applied:

- **Encapsulation**: Private fields (`#products`, `#ProductValidationClass`)
- **Abstraction**: Clean public API (`create()`, `loadProducts()`, `deleteProduct()`)
- **Single Responsibility**: Separate `Product` and `ProductValidation` classes
- **Modularity**: Well-structured class-based architecture
- **Constructor Injection**: `Product` class receives DOM elements

## 📁 Project Structure
```bash
├── index.html
├── src/
│   ├── css/
│   │   ├── input.css
│   │   └── output.css
│   └── js/
│       ├── app.js
│       └── classes/
│           ├── Product.js
│           └── ProductValidation.js
└── README.md
```

## 🚀 How to Run

1. Download or clone the project

   ```bash
   git clone https://github.com/sara-jafari-developer/Product-Manager-App-OOP.git

   cd Product-Manager-App-OOP

   ```
2. Open `index.html` in any modern browser
3. No build tools or servers required

## 📋 Usage

- Click **"Add Product"** (top right)
- Fill the form and click **Create**
- Click **Delete** on any product card to remove it

## 🔧 Validation Rules

- **Title**: 2–100 characters (supports English + Persian)
- **Price**: Positive numbers only
- **Image**: Required + format validation
- **Background Color**: Must be selected from available options

## 🎨 Design

- Modern glassmorphism modal
- Beautiful product cards with 3D-like effects
- Responsive Tailwind grid
- Smooth interactions and hover effects


## 🤝 Contributing

Contributions are welcome! Feel free to improve the OOP structure, add new features, or enhance the UI.

## 👨‍💻 Author

### Sara Jafari

- Front-end Developer

- GitHub: @sara-jafari-developer

**Built with clean OOP principles in Vanilla JavaScript**  
Made with ❤️

## 📄 License

This project is open-source under the **MIT License**.

---
