const {
  addToLikedMovies,
  getLikedMovies,
  removeLikedMovie,
} = require("../controllers/UserController");

const router = require("express").Router();
router.post("/add", addToLikedMovies);

router.get("/liked/:email", getLikedMovies);

router.put("/remove", removeLikedMovie);

module.exports = router;
