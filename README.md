# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Author- Deepa Kale 

## 🛍️ SwimWear E-Commerce Platform Frontend and Backend, With Admin Panel
A frontend e-commerce web application for a swimwear line for men and women, built using React, Node,js, Tailwind CSS,and Stripe integration, supporting product browsing, cart management, order placement, and secure checkout.
Users can browse products, add items to the cart, and place orders. The project focuses on building a responsive and interactive user interface with full backend support for authentication, order processing, and an admin panel for managing products and orders.

### Setup Instructions
Extract the zipped file uploaded. Open your VS code application and navigate to the project folder.
Install dependencies: node js, npm install, MongoDB (local or Atlas) and a Stripe Account (for test keys, incase user wants to test the payment option Stripe.)
The .env file must be updated with your own details like API keys, database URL, and Stripe secret key.
Navigate in the project frontend by using command: cd frontend
Navigate in the project backend by using command: cd backend
Navigate in the project admin by using command: cd admin
Navigate in the project admin by using command: cd admin
In frontend, backend and admin, Use command: npm run dev 
Open local host and view the e-commerce web application (SwimWear) and the admin panel (SwimWear Admin Panel.)

### Testing Instructions for frontend
View Homepage, Collections, About, Contact.
Test the search bar. Test the filters and the sort function in the Collections page.
Add products to the cart from the Home page or Collections Page.
Navigate to the cart page to view items.
Test increasing or decreasing quantities in cart page.
Test removing items from the cart in the cart page.
Test navigation to the checkout page.
Test Login page for Logins/Create Account and sign ups. 
Test payment method:Cash on Delivery and Stripe (Use 4242 4242 4242 4242 with any valid future date and CVC.)
After placing an order, navigate to the Orders page to verify order history and track status.

### Testing Instructions for Admin Panel
Use predefined admin credentials from env. Credentials should be set up in the backend and admin database.
View all orders placed by users.
Update the order status (like from Order Placed to Shipped or Packing).
The updated status should reflect in the user’s Orders page.

### Implemented Features
Home page with products displayed. 
Collections Page with functioning filter components. 
Add to Cart functionality. Cart total calculation with shipping fee.
The design adapts for mobile and desktop. Can be checked by clicking on inspect in the web-page. 
Checkout page that has multiple steps including: Payment methods (Stripe, Cash on Delivery) and Address collection and order placement.
Order tracking and order history.
Responsive UI using Tailwind CSS. 
User authentication and token-based session management (New User can create an account, Existing user can Login) 


### Third-Party Libraries Used
React Router Dom for navigation. React Toastify used to add notifications and pop-ups. 
Tailwind CSS for styling. 
Vite for fast development implementation. Recommended by our Professor.
Stripe – Payment gateway for card payments
MongoDB Atlas - database for storing application data securely and efficiently.
Axios - the HTTP client to handle all API requests between the frontend and backend.
