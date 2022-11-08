const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    // return res.json({ msg: "Movie added successfully" });
    console.log("addToLikedMovies init");
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    console.log("addToLikedMovies user found");
    if (user) {
      console.log("addToLikedMovies user found");
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else {
        return res.json({
          msg: "Movie already added to the liked list",
          result: 1,
        });
      }
    } else {
      await User.create({ email, likedMovies: [data] });
    }
    console.log("addToLikedMovies end");
    return res.json({ msg: "Movie added successfully", result: 1 });
  } catch (error) {
    return res.json({ msg: "Error adding movies", error });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      res.json({ msg: "success", movies: user.likedMovies });
    } else {
      res.json({ msg: "User with given email not found" });
    }
  } catch (error) {
    res.json({ msg: "Error fetching liked movies", error });
  }
};
