import express from "express";
import cors from "cors";
import Logger from "./middleware/Logger";
import {
  AuthRoute,
  BookingRoute,
  UserRoute,
  RoomRoute,
  CloudeRoute,
} from "./routes/";

import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

mongoose
  .connect(
    "mongodb+srv://bijay69:bj89682466@cluster0.f4s7u.mongodb.net/city-hostel?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/book", BookingRoute);
app.use("/room", RoomRoute);
app.use("/cloudinary", CloudeRoute);

app.use(express.static("public"));
app.use("/pics", express.static("pics"));

app.use(Logger);

app.listen(3333, () => {
  console.log("Server has started");
});
