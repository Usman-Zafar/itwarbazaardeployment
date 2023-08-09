const auth = require("../middlewares/auth");
const sellerControllers = require("../controllers/sellerControllers");
//const { saveimage } = require("../middlewares/saveimage");

const { Router } = require("express");
const router = Router();

router.post("/signup", /*saveimage.single("file"),*/ sellerControllers.Signup);

router.post("/signin", sellerControllers.Signin);

router.post("/product", auth, sellerControllers.createProduct);

router.put("/product/:id", auth, sellerControllers.editProduct);

router.delete("/product/:id", auth, sellerControllers.deleteProduct);

router.get("/myOrders", auth, sellerControllers.viewOrders);

router.get("/myProducts", auth, sellerControllers.viewProduct);

router.get("/order/:id", auth, sellerControllers.editOrderStatus);

module.exports = router;
