import { Router } from "express";
import {
  handleLogin,
  handleRegister,
} from "../Controllers/user.controllers.js";

export const UserRouter = Router();

UserRouter.post("/register", handleRegister);

UserRouter.post("/login", handleLogin);
