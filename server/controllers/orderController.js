import Order from "../models/Order.js";

// Place Order
export const placeOrder = async (
  req,
  res
) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// User Orders
export const getMyOrders = async (
  req,
  res
) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).populate("products.product");

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Admin - All Orders
export const getAllOrders = async (
  req,
  res
) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product");

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};