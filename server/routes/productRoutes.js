import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin Routes
router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  createProduct
);

router.put(
  "/:id",
  protect,
  admin,
  upload.single("image"),
  updateProduct
);

router.delete(
  "/:id",
  protect,
  admin,
  deleteProduct
);

export default router;