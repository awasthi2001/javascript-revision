import { Router } from "express";
import { ArticleModel } from "../Models/article.model.js";
import { UserModel } from "../Models/user.model.js";
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

ArticleRouter.get("/myarticles", async(req, res) => {
  try {
      //console.log(req.body)
      let {user_id} =  req.body;
      let articles = await ArticleModel.find({user_id :user_id })
      let {Name}  = await UserModel.findOne({_id:user_id})
      res.send({
        Author_Name : Name,
        articles : articles
      })
  } catch (error) {
    res.status(500).send({
        message : error
    })
  }
});

ArticleRouter.post("/create", async(req, res) => {
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
