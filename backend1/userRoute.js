import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
  getUserByClass,promoteClass,
} from './userController.js';

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.get("/users/class1/:class1", getUserByClass); // class filter route

route.put("/update/user/:id", update);
route.delete("/delete/user/:id", deleteUser);
route.post("/promote/class1/:class1", promoteClass);

export default route;
