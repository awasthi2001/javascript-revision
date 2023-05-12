import { Router } from "express";
import {
  handleall,
  handlecreate,
  handledelete,
  handlemyarticle,
  handleupdate,
} from "../Controllers/article.controllers.js";
export const ArticleRouter = Router();

ArticleRouter.get("/all", handleall);

ArticleRouter.get("/myarticles", handlemyarticle);

ArticleRouter.post("/create", handlecreate);

ArticleRouter.patch("/:articleId", handleupdate);

ArticleRouter.delete("/:articleId", handledelete);

//there is one userid which is in the article body and there is userid which is in  the req.body which we will recive from jwt token
//if both are equal then only user can update or delete the article
