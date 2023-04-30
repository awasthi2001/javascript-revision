import mongoose from "mongoose";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

let pass = process.env.password
let user = process.env.Mongouser
export function connection(){
    return new Promise((resolve, reject) =>{
        mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.qpyefrp.mongodb.net/test`).then(()=>{
            resolve('connected')
        }).catch(()=>{
            reject('error connecting')
        }) 
    })

}