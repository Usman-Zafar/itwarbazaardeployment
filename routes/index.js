const { Router } = require("express");
const router = Router();

//const purchaserRoutes = require("../routes/purchaserRoutes");
//const sellerRoutes = require("../routes/sellerRoutes");
//const adminRoutes = require("../routes/adminRoutes");
//const publicRoutes = require("../routes/publicRoutes");
const userRoutes = require("./user.js");

//router.use(publicRoutes);
router.use("/user", userRoutes);
//router.use("/admin", adminRoutes);
//router.use("/seller", sellerRoutes);
//router.use("/purchaser", purchaserRoutes);

module.exports = router;
