import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const jwtSecret = 'secret';

// @ts-ignore
const authMiddleware = async (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        res.json({message:'No Token Found'});
    }else{
        try{
            console.log(token);
            const decodedToken = jwt.verify(token,jwtSecret);
            // @ts-ignore
            const user = await User.findOne(decodedToken.username);
            if(!user){
                res.json({message:'Invalid Token'});
            }else{
                req.username = user;
                
                next();
            }
        }catch(err){
            console.log(err);
            res.json({message:'Invalid Token'});
        }
    }
}

export default authMiddleware;