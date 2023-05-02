import { Router } from "express";
import { ArticleModel } from "../Models/article.model.js";

export const ArticleRouter = Router();

ArticleRouter.get("/all", async(req, res) => {
  try {
    let articles = await ArticleModel.find().sort({createdAt:-1})
    if(articles.length>0){
        res.send(articles)
    }else{
        res.status(404).send('Not Found')
    }
  } catch (error) {
    res.status(500).send({
        message : error
    })
  }
});

ArticleRouter.get("/myarticles", (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
        message : error
    })
  }
});

ArticleRouter.post("/", async(req, res) => {
  try {
    if(req.body){
        await ArticleModel.create(req.body)
        res.send({
            message : "Article created Successfully"
        })
    }
  } catch (error) {
    res.status(500).send({
        message : error
    })
  }
});

ArticleRouter.patch("/:articleId", (req, res) => {
  try {
  } catch (error) {}
});

ArticleRouter.delete("/:articleId", (req, res) => {
  try {
  } catch (error) {}
});
