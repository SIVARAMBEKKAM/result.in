import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./userRoute.js";
import cors from "cors";
import resultRoutes from "./resultroute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT =8009;


mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT} `);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
app.use("/api", resultRoutes);


app.listen(PORT);