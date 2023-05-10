import mongoose from "mongoose";


const articleSchema = mongoose.Schema(
    {
      user_id : {type:String,required:true},
      category : {type:String,required:true},
      Article : {type:String,required:true}
    },
    {
      timestamps : true ,
       versionKey : false
    }
)


export let ArticleModel  = mongoose.model('article',articleSchema)