const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;

const app = express();

const userRoutes = require("./routes/UserRoutes");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  });

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
