const router = require("express").Router();
const controller = require("./controller");

router
  .route("/:id")
  .get(controller.get)
  .post(controller.post)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
