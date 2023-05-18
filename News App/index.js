import express from 'express';
import { UserRouter } from './Routes/user.routes.js';
import { connection } from './config/config.js';
import { Authenticate } from './Middlewares/authenticator.js';
import { ArticleRouter } from './Routes/article.routes.js';

const app = express();
app.use(express.json())
app.get('/',(req,res)=>{
   res.send("Welcome to the News App")
})
app.use('/user',UserRouter)
app.use('/article',ArticleRouter) 
app.get('*',(req,res)=>{
   res.send("<h1 style='text-align : center; color : blue;'>Not Found</h1>")
})
app.listen(8080,async()=>{
   let res = await connection();
   console.log(res);
   console.log('running on port 8080');
})


