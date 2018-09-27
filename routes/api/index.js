const router = require("express").Router();
const newsRoutes = require("./news");

// article routes
router.use("/news", newsRoutes);

module.exports = router;