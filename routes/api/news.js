const router = require("express").Router();
const newsController = require("./../../controllers//newsController");

// Matches with "/api/articles"
router.route("/")
  .get(newsController.findAll)
  .post(newsController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(newsController.findById)
  .put(newsController.update)
  .delete(newsController.remove);

module.exports = router;