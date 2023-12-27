const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error(error);
  });
const userRoute = require("./Routes/userRoutes");
const articleRoute=require('./Routes/articleroutes')
app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/article",articleRoute)
app.listen(process.env.PORT, () => {
  console.log(`server us running on http://localhost${process.env.PORT}`);
});
