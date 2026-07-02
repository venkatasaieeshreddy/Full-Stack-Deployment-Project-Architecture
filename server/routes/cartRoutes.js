import express from "express";

import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Get Logged-in User Cart
router.get("/", protect, getCart);

// Add Product to Cart
router.post("/", protect, addToCart);

// Remove Product from Cart
router.delete(
  "/:productId",
  protect,
  removeFromCart
);

export default router;