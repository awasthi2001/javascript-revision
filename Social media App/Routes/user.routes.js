import { Router } from "express";
import { UserModel } from "../Models/user.model.js";
import { handleLogin, handleRegister } from "../Controllers/user.controllers.js";


export const UserRouter = Router();

UserRouter.post('/register',handleRegister)


UserRouter.post('/login',handleLogin)