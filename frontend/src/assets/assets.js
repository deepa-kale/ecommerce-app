// Importing all assets
import bin_icon from "./bin_icon.png";
import cart_icon from "./cart_icon.png";
import cross_icon from "./cross_icon.png";
import hero_img from "./hero_img.png";
import logo from "./logo.png";
import menu_icon from "./menu_icon.png";
import profile_icon from "./profile_icon.png";
import search_icon from "./search_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import check from "./check.png";
import exchange_icon from "./exchange_icon.png";
import quality_icon from "./quality_icon.png";
import support_img from "./support_img.png";
import star_empty from "./star_empty.png";
import star_filled from "./star_filled.png";
import stripe from "./stripe.png";
import visa from "./visa.png";
import about from "./about.png";
import contact from "./contact.png";



// Men's Bottoms
import mens_bottoms1 from "./mens_bottoms1.png";
import mens_bottoms2 from "./mens_bottoms2.png";
import mens_bottoms3 from "./mens_bottoms3.png";
import mens_bottoms4 from "./mens_bottoms4.png";
import mens_bottoms5 from "./mens_bottoms5.png";
import mens_bottoms6 from "./mens_bottoms6.png";
import mens_bottoms7 from "./mens_bottoms7.png";
import mens_bottoms8 from "./mens_bottoms8.png";
import mens_bottoms9 from "./mens_bottoms9.png";
import mens_bottoms10 from "./mens_bottoms10.png";

// Women's One Pieces
import womens_one_piece1 from "./womens_one_piece1.png";
import womens_one_piece2 from "./womens_one_piece2.png";
import womens_one_piece3 from "./womens_one_piece3.png";
import womens_one_piece4 from "./womens_one_piece4.png";
import womens_one_piece5 from "./womens_one_piece5.png";
import womens_one_piece6 from "./womens_one_piece6.png";
import womens_one_piece7 from "./womens_one_piece7.png";
import womens_one_piece8 from "./womens_one_piece8.png";
import womens_one_piece9 from "./womens_one_piece9.png";
import womens_one_piece10 from "./womens_one_piece10.png";

// Exporting assets
export const assets = {
  bin_icon,
  cart_icon,
  cross_icon,
  hero_img,
  logo,
  menu_icon,
  profile_icon,
  search_icon,
  dropdown_icon,
  check,
  exchange_icon,
  quality_icon,
  support_img,
  star_empty,
  star_filled,
  stripe,
  visa,
  about,
  contact,
};

// Products array (10 Men's + 10 Women's)
export const products = [
  // Men's Products (10)
  {
    id: 1,
    name: "Women's Classic One-Piece in Blue",
    description: "Trendy high-waisted design.",
    price: 29.99,
    images: [womens_one_piece1],
    category: "Womens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 2,
    name: "Women's High-Waisted Swimsuit",
    description: "Elegant and timeless swimsuit.",
    price: 39.99,
    images: [womens_one_piece2],
    category: "Womens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 3,
    name: "Women's One-Piece in Blue and White",
    description: "Perfect for lounging and beach activities.",
    price: 39.99,
    images: [womens_one_piece3],
    category: "Womens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 4,
    name: "Women's Floral One-Piece",
    description: "Beautiful floral pattern for summer.",
    price: 44.99,
    images: [womens_one_piece4],
    category: "Womens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 5,
    name: "Women's Ruffled One-Piece in Red",
    description: "A stylish and unique design.",
    price: 39.99,
    images: [womens_one_piece5],
    category: "Womens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 6,
    name: "Men's Casual Swim Shorts",
    description: "Relaxed fit for comfort.",
    price: 28.99,
    images: [mens_bottoms6],
    category: "Mens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 7,
    name: "Men's Striped Board Shorts",
    description: "Trendy striped design with quick-dry fabric.",
    price: 31.99,
    images: [mens_bottoms7],
    category: "Mens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 8,
    name: "Men's Tropical Print Swim Trunks",
    description: "Fun tropical print perfect for vacations.",
    price: 36.99,
    images: [mens_bottoms8],
    category: "Mens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 9,
    name: "Men's Lightweight Swim Shorts",
    description: "Super light and breathable for summer.",
    price: 27.99,
    images: [mens_bottoms9],
    category: "Mens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 10,
    name: "Men's Performance Swim Shorts",
    description: "Great for active swimmers and beachgoers.",
    price: 44.99,
    images: [mens_bottoms10],
    category: "Mens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },

  // Women's Products (10)
  {
    id: 11,
    name: "Men's Quick-Dry Swim Shorts",
    description: "Fast-drying and durable swim shorts.",
    price: 29.99,
    images: [mens_bottoms1],
    category: "Mens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 12,
    name: "Men's Swim Shorts",
    description: "Ideal for swimming workouts.",
    price: 24.99,
    images: [mens_bottoms2],
    category: "Mens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 13,
    name: "Men's Board Shorts",
    description: "Comfortable and stylish swim trunks.",
    price: 29.99,
    images: [mens_bottoms3],
    category: "Mens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 14,
    name: "Men's Classic Swim Shorts",
    description: " Timeless design for a great beach day.",
    price: 26.99,
    images: [mens_bottoms4],
    category: "Mens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 15,
    name: "Men's Casual Swim Trunks",
    description: "Designed for comfort in the water and out.",
    price: 32.99,
    images: [mens_bottoms5],
    category: "Mens",
    subCategory: "Design",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 16,
    name: "Women's Deep V-Neck Swimsuit",
    description: "Bold and elegant swimsuit.",
    price: 54.99,
    images: [womens_one_piece6],
    category: "Womens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 17,
    name: "Women's Elegant One-Piece",
    description: "Perfect for stylish poolside lounging.",
    price: 50.99,
    images: [womens_one_piece7],
    category: "Womens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 18,
    name: "Women's Retro Swimsuit",
    description: "Vintage-inspired design for a chic look.",
    price: 47.99,
    images: [womens_one_piece8],
    category: "Womens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 19,
    name: "Women's Vintage Swimsuit",
    description: "Vintage-inspired dark design for a chic look.",
    price: 26.99,
    images: [womens_one_piece9],
    category: "Womens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 20,
    name: "Women's Ribbed Swimsuit",
    description: "Multi Striped design for a professional look.",
    price: 24.99,
    images: [womens_one_piece10],
    category: "Womens",
    subCategory: "Solid Color",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  }
];
