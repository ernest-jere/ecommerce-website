markdown# 🛒 Modern eCommerce Website

A high-performance, responsive eCommerce storefront application built with **React**, **Vite**, and standard styling workflows. The application features full client-side routing, an interactive checkout workflow, and robust global state management for the user shopping cart and session authentication.

## 🚀 Live Demo
Experience the fully deployed production application live in your browser:
👉 **[View Live Storefront](https://ecommerce-website-an3dq0cqb-ernest-jere1.vercel.app)**

---

## ✨ Key Features

*   **Dynamic Product Feed:** Fetches and maps local product inventories smoothly with individual product detail pages.
*   **Interactive Shopping Cart:** Real-time adding, removing, and quantity adjustments handled by a global React context hook.
*   **Secure Client-Side Routing:** Zero-refresh page-to-page transitions navigating between Home, Auth, Product Details, and Checkout screens.
*   **Context API State Management:** Separate global providers manage active authentication states and shopping cart tracking concurrently across the layout tree.
*   **Vercel Production Optimized:** Pre-configured for automated continuous deployment (CI/CD) pipelines directly from GitHub updates.

---

## 🛠️ Architecture & Tech Stack

*   **Core Engine:** React 18+ (JavaScript UI Library)
*   **Build System & Bundler:** Vite & Rolldown
*   **Navigation Matrix:** React Router DOM (v6)
*   **Server Architecture & Hosting:** Vercel Edge Framework

---

## 📂 Project Structure Directory

A brief look into how the core source files are organized:

```text
src/
├── components/       # Reusable layout building blocks (e.g., NavBar)
├── context/          # Central global states (AuthContext, CartContext)
├── data/             # Static product configurations & databases
├── pages/            # Page-view views (Home, Auth, Checkout, ProductDetails)
├── App.css           # Global core layout styling rules
├── App.jsx           # Base router container initialization file
└── main.jsx          # DOM rendering entry point anchor
```

---

## 💻 Local Installation & Setup Guide

Follow these steps to download the codebase and launch a local development server on your machine:

### 1. Clone the Project Repository
```bash
git clone https://github.com
```

### 2. Move Into the Working Directory
```bash
cd ecommerce-website
```

### 3. Install Package Dependencies
```bash
npm install
```

### 4. Fire Up the Local Development Server
```bash
npm run dev
```

### 5. Access the Local Environment
Open your browser and navigate directly to:
👉 **`http://localhost:5173`**

---

## 🚢 Continuous Deployment (GitHub + Vercel Workflow)

This codebase is configured with a unified deployment pipeline. Every time you push changes to the main source control branch, your updates go live automatically:

```bash
git add .
git commit -m "feat: detailed summary of your fresh adjustments"
git push origin main
```
*Vercel instantly catches this webhook push, isolates a clean cloud build environment, and syncs your modifications directly to production.*