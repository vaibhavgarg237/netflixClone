const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const port = 5000;

//FOR DEPLOYMENT ONLY
require("dotenv").config();
const port = process.env.PORT || 5000;
const MONGODB_URI_final =
  process.env.MONGODB_URI || "mongodb://localhost:27017/netflix";

const app = express();

//Deployment testing
app.get("/", (req, res) => {
  console.log(process.env);
  res.send("Testing my server");
});

const userRoutes = require("./routes/UserRoutes");

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI_final, {
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
