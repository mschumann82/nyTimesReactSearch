const router = require("express").Router();
const newsRoutes = require("./news");

// article routes
router.use("/articles", newsRoutes);

module.exports = router;