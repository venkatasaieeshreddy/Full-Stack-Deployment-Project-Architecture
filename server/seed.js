import dotenv from "dotenv";
import connectDB from "./config/db.js";

import User from "./models/User.js";
import Product from "./models/Product.js";
import Cart from "./models/Cart.js";
import Order from "./models/Order.js";

import users from "./data/users.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Delete existing data
    await Order.deleteMany();
    await Cart.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(users);

    // Get Admin ID
    const adminUser = createdUsers[0]._id;

    // Add admin reference to every product
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    // Insert products
    await Product.insertMany(sampleProducts);

    console.log("✅ Sample Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error Importing Data");
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Cart.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("🗑️ Data Destroyed Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}