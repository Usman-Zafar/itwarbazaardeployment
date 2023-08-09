const Product = require("../modals/productSchema");
const Order = require("../modals/orderSchema");

const purchaserControllers = {};

// Controller for Purchaser to View All Products
purchaserControllers.viewProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Controller to send Products in Cart
// purchaserControllers.addProductToCart = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     // Assuming you have a way to associate the cart with the purchaser, for example, using req.userId
//     const purchaserId = req.userId;
//     const cartItem = { product: productId, purchaser: purchaserId };
//     await Cart.create(cartItem);
//     res.send(`Product with ID ${productId} has been added to the cart.`);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add product to cart" });
//   }
// };

// Controller to view Products available in Cart
// purchaserControllers.viewCartProducts = async (req, res) => {
//   try {
//     // Assuming you have a way to associate cart items with the purchaser, for example, using req.userId
//     const purchaserId = req.userId;
//     const cartItems = await Cart.find({ purchaser: purchaserId }).populate(
//       "product"
//     );
//     res.json(cartItems);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch cart items" });
//   }
// };

// Controller for Purchaser to Checkout
// purchaserControllers.checkout = async (req, res) => {
//   try {
//     // Assuming you have a way to associate cart items with the purchaser, for example, using req.userId
//     const purchaserId = req.userId;
//     const cartItems = await Cart.find({ purchaser: purchaserId });

//     // Assuming you have a way to calculate the total amount and other details for the order
//     const order = {
//       purchaser: purchaserId,
//       products: cartItems.map((item) => item.product),
//       totalAmount: 100, // Replace with the actual calculated total amount
//       createdAt: new Date(),
//     };

//     await Order.create(order);

//     // Assuming you have a way to handle payment processing (e.g., using Stripe API)
//     // Implement the payment processing logic here...

//     // Clear the cart after successful checkout
//     await Cart.deleteMany({ purchaser: purchaserId });

//     res.send("Checkout via Stripe");
//   } catch (error) {
//     res.status(500).json({ message: "Failed to complete checkout" });
//   }
// };

// Controller to View Order List
purchaserControllers.viewOrders = async (req, res) => {
  try {
    // Assuming you have a way to associate orders with the purchaser, for example, using req.userId
    const purchaserId = req.userId;
    const orders = await Order.find({ purchaser: purchaserId }).populate(
      "products"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

module.exports = purchaserControllers;
