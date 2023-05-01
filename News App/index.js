import express from 'express';
import { UserRouter } from './Routes/user.routes.js';
import { connection } from './config/config.js';

const app = express();
app.use(express.json())

app.use('/user',UserRouter)


app.listen(8080,async()=>{
   let res = await connection();
   console.log(res);
   console.log('running on port 8080');
})


