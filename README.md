# 🛒 Swishvi Instamart — Groceries in a Swish!

A front-end web application that simulates an online grocery and instant delivery store, inspired by platforms like Swiggy Instamart. Built as an Internet Web Programming (IWP) project using core web technologies — HTML, CSS, and JavaScript.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Sections Overview](#pages--sections-overview)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## 📖 About the Project

**Swishvi Instamart** is a multi-page static website that replicates the look and feel of a modern online grocery delivery platform. Users can browse products across multiple categories, explore featured brands, register/login, and simulate adding items to a cart.

This project was developed as part of an **Internet Web Programming (IWP)** course to demonstrate proficiency in HTML structure, CSS styling & animations, JavaScript DOM manipulation, form validation, and localStorage-based state management.

---

## ✨ Features

- **Landing Page** with animated shopping trolley banner and "Big Bang Sale" promotion
- **Smart Search Bar** with rotating placeholder suggestions (e.g., "Search for Apples", "Search for Milk") and keyword-based navigation
- **9 Main Product Categories** — each with a dedicated sub-category listing page
- **Brand Spotlight Section** — featuring Ekam, Borosil, Ariel, Vim, Kent, and Maybelline
- **Specialty Stores** — Summer Store, Gifting Store, Wedding Store, Local Store, Shark Tank India Picks, Puja Store, Gourmet Store, and Health & Fitness Store
- **Add to Cart** functionality using `localStorage` — requires user registration before adding items
- **Registration Page** with client-side form validation (name, email, Indian phone number, password matching)
- **User Profile Page** to view registered user information
- **Order Placement Page** to review and confirm cart items
- **Responsive layout** across category and product pages
- **Consistent Design Language** with a pink/purple color theme across all pages

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure and multi-page navigation |
| **CSS3** | Styling, animations (keyframes), layout (float-based) |
| **JavaScript (Vanilla)** | DOM manipulation, search logic, form validation, localStorage |
| **localStorage API** | Cart management and user session persistence |

> No external libraries or frameworks were used — this is a pure HTML/CSS/JS project.

---

## 📁 Project Structure

```
swishvi-instamart/
│
├── HTML.html                        # Main landing/home page
├── mainCSS.css                      # Global stylesheet for the home page
├── mainJAVA.js                      # Global JavaScript (search, placeholder animation)
├── add_to_cart.js                   # Cart logic using localStorage
├── items_table.css                  # CSS for product listing tables
│
├── registration_page_swiggy.html    # User registration page with validation
├── my_profile.html                  # User profile page
├── order_form.html                  # Order form
├── order_place_page.html            # Order confirmation/placement page
│
├── ── Category Pages ──
├── Breakfast&more.html              # Breakfast category (redirector)
├── Dairy_bread&more.html            # Dairy & Bread category
├── Snacks&InstantFood.html          # Snacks & Instant Food
├── Home&KitchenItems.html           # Home & Kitchen
├── ColdDrinks&Juice.html            # Cold Drinks & Juices
├── Fruits&Veggies.html              # Fruits & Vegetables
├── SweetCorner.html                 # Sweet Corner
├── Beauty&PresonalCare.html         # Beauty & Personal Care
├── Electronics&Appliances.html      # Electronics & Appliances
│
├── ── Sub-Category Product Pages ──
├── breakfast_oats.html / breakfast_flakes.html / ...
├── Dairy_milk.html / Dairy_cheese.html / Dairy_lassi.html / ...
├── Snacks_chips.html / Snacks_noodles.html / Snacks_Frozen.html / ...
├── kitchen_cooker.html / kitchen_flask.html / kitchen_tiffin.html / ...
├── ColdDrinks_softDrinks.html / ColdDrinks_energy.html / ...
├── Fruits&Veggies_Fruits.html / Fruits&Veggies_vegetable.html / ...
├── SweetCorner_cone.html / SweetCorner_cup.html / SweetCorner_stick.html
├── Beauty_Bath.html / Beauty_Hair.html / Beauty_skin.html / makeup.html / ...
├── Electronic_blender.html / Electronic_kettle.html / Electronic_mixer.html
│
├── ── Grocery Sub-Pages ──
├── Atta_Dal_Rice.html / Oil&Ghee.html / Garam_Masala.html
├── Bakery&Cakes.html / Biscuits&Cakes.html / DryFruit&SeedsMix.html
├── Chocolates&Sweets.html / Coffee&Tea.html / Sauces&Spreads.html
├── Health&Welness.html / Perfumes.html / Detergents.html
│
├── ── Brand Pages ──
├── ekam_brand.html / borosil_brand.html / ariel_brand.html
├── vim_brand.html / kent_brand.html / maybelline_brand.html
│
├── ── Specialty Store Pages ──
├── Summer_Store.html / Gifting_Store.html / Local_Store.html
├── Shark_Tank.html / Puja_Store.html / Gourmet_Store.html
├── Health_Fitness.html
│
└── ── Assets (Images) ──
    ├── profile.jpg / profile_background.jpg
    ├── swiggy_logo.png / trolley__final.png / search_button.png
    ├── discount_logo-Photoroom.png / fireworks_2-Photoroom.png
    ├── [category].png               # Category icon thumbnails
    └── [category](1-8).png          # Product images per category
```

---

## 🗂️ Pages & Sections Overview

### Home Page (`HTML.html`)
- **Header/Title Bar** — Brand name, Register link, Profile button, Search bar
- **Sale Animation** — Animated trolley with "Big Bang Sale" text
- **Best Deals** — 9 clickable category tiles
- **Most Loved Brands** — 6 featured brand logos
- **Grocery & Kitchen** — 8 sub-category tiles
- **Snacks & Drinks** — 8 sub-category tiles
- **Beauty & Hygiene** — 7 sub-category tiles
- **Shop by Store** — 8 specialty store tiles
- **Footer** — Categories, delivery cities, company info, legal links

### Product Pages
Each product page follows a consistent table-based layout with:
- Product image
- Product name & description
- Price
- "Add to Cart" button (requires registration)

### Registration Page (`registration_page_swiggy.html`)
- Fields: Name, Email, Phone Number, Username, Password, Confirm Password
- Validation: Email regex, Indian phone number pattern (`[6-9]XXXXXXXXX`), password length ≥ 8, password match
- On success: stores user data in `localStorage` and redirects to home

---

## ▶️ How to Run

Since this is a static website with no server-side dependencies, you can run it directly in your browser.

**Option 1 — Open directly:**
1. Download or clone the repository
2. Open `HTML.html` in any modern web browser (Chrome, Firefox, Edge)

**Option 2 — Use VS Code Live Server:**
1. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
3. Right-click `HTML.html` → **"Open with Live Server"**

---

## 🚀 Future Improvements

- [ ] Make the website fully responsive for mobile screens
- [ ] Add a backend (Node.js / Firebase) for persistent user accounts and real cart management
- [ ] Implement a working search that filters across all products
- [ ] Add product quantity controls directly on product pages
- [ ] Integrate a payment gateway simulation
- [ ] Add product ratings and reviews section
- [ ] Improve accessibility (ARIA labels, keyboard navigation)

---

## 📄 License

This project was created for educational purposes. All product images used are for demonstration only.
