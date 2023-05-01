import mongoose from "mongoose";

let userSchema = mongoose.Schema(
    {
        Name : {required:true,type:String},
        Email :{required:true,type:String},
        Password :{required:true,type:String},
        Age :{required:true,type:Number}
    },{
        timeStamps : false
      }
)


export let UserModel = mongoose.model('user',userSchema)


// {
//     "Name" : "Akshansh",
//     "Email" : "Akshansh@gmail.com",
//     "Password" : "1234",
//     "Age" : 24
//   }