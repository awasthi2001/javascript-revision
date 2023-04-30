import jwt from 'jsonwebtoken'
export function Authenticate(req,res,next){
    try {
        let  token=   req.headers.authorization
        jwt.verify(token,process.env.SecretKey,(err,decode)=>{
            if(decode){
                req.body.user_id = decode.user_id;
                next();
            }else{
                res.status(400).send({
                    message : 'please login first'
                })
            }
        })
    } catch (error) {
        res.status(400).send({
            message : 'bad request'
        })
    }
}
