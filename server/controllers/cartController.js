import Cart from "../models/Cart.js";

// Get Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("items.product");

    res.json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Item
export const addToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;

    let cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    const index = cart.items.findIndex(
      (item) =>
        item.product.toString() === product
    );

    if (index > -1) {
      cart.items[index].quantity += quantity;
    } else {
      cart.items.push({
        product,
        quantity,
      });
    }

    await cart.save();

    res.json({
      success: true,
      message: "Item added to cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Item
export const removeFromCart = async (
  req,
  res
) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    });

    cart.items = cart.items.filter(
      (item) =>
        item.product.toString() !==
        req.params.productId
    );

    await cart.save();

    res.json({
      success: true,
      message: "Item removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};