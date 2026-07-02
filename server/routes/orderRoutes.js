import express from "express";

import {
  placeOrder,
  getMyOrders,
  getAllOrders,
} from "../controllers/orderController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

// User Routes
router.post("/", protect, placeOrder);

router.get("/myorders", protect, getMyOrders);

// Admin Route
router.get(
  "/",
  protect,
  admin,
  getAllOrders
);

export default router;