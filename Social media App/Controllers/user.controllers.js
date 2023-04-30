import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../Models/user.model.js';

export async function handleLogin(req, res) {
    try {
        let {Name,Email,Age,Password,_id} = req.body;
        let User= req.body;

        let user = await UserModel.findOne({Email:Email});
       if(user){
           let check = bcrypt.compareSync(Password,user.Password);
           if(check){
            let token = jwt.sign(({user_id:User._id}),process.env.SecretKey)
              res.status(200).send({
                token : token,
                message : 'logged in successfully'
              })
           }else{
            res.status(200).send({
                message : 'password mismatch'
              })
           }
       }else{
        res.status(200).send({
            message : 'wrong credentials'
          })
       }
    } catch (error) {
        res.status(500).send({
            message : error
        })
    }
}


export async function handleRegister(req, res) {
    try {
        let {Name,Email,Age,Password} = req.body;
        let User= req.body;
        let user = await UserModel.findOne({Email:Email});
       if(user){
          res.status(400).send({message :  'User Already Registered'})
       }else{
           delete User.Password;
           bcrypt.hash(Password,4,async(err,pass)=>{
            if(err){
                console.log(err)
            }else{
                req.body.Password = pass;
                await UserModel.create(req.body)
                res.status(201).send({
                    message : 'registered successfully'
                })
            }
           })
       }
    } catch (error) {
        res.status(500).send({
            message : error
        })
    }
}