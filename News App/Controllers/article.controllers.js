import { ArticleModel } from "../Models/article.model.js";
import { UserModel } from "../Models/user.model.js";

export const handleall = async (req, res) => {
  try {
    let articles = await ArticleModel.find().sort({ createdAt: -1 });
    if (articles.length > 0) {
      res.send(articles);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

export const handlemyarticle = async (req, res) => {
  try {
    //console.log(req.body)
    let { user_id } = req.body;
    let articles = await ArticleModel.find({ user_id: user_id });
    let { Name } = await UserModel.findOne({ _id: user_id });
    res.send({
      Author_Name: Name,
      articles: articles,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

export const handlecreate = async (req, res) => {
  try {
    if (req.body) {
      await ArticleModel.create(req.body);
      res.send({
        message: "Article created Successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

export const handledelete = async (req, res) => {
  try {
    let { articleId } = req.params;
    let { user_id } = req.body;

    let article = await ArticleModel.findById({ _id: articleId });
    if (article.user_id === user_id) {
      await ArticleModel.findByIdAndDelete(articleId, req.body);
      res.status(200).send({
        message: "Article deleted successfully",
      });
    } else {
      res.status(401).send({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

export let handleupdate = async (req, res) => {
  try {
    let { articleId } = req.params;
    let { user_id } = req.body;

    let article = await ArticleModel.findById({ _id: articleId });
    if (article.user_id === user_id) {
      await ArticleModel.findByIdAndUpdate(articleId, req.body);
      res.status(200).send({
        message: "Article updated successfully",
      });
    } else {
      res.status(401).send({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};
