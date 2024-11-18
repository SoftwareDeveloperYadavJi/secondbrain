import express from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import authMiddleware from '../middleware/authmiddleware';


const jwtSecret = 'secret';

const Userrouter = express.Router();

Userrouter.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username});
        console.log(user);
        if(!user){
            res.json({message:'Invalid Credentials'});
        }else{
          
            const isPasswordMatch = await bcrypt.compare(password,user.password);
            
            if(isPasswordMatch){
                console.log(user.username);
                const token = jwt.sign(user.username,jwtSecret);
                res.json({message:'Login Successful',token});
            }else{
                console.log('reching');
                res.json({message:'Invalid Credentials'});
            }
        }

    }catch(err){
        res.json({message:'Invalid Credentials'});
    }
    
});


Userrouter.post('/register',async (req,res)=>{
    const {username,name,email,password} = req.body;
    try{
        const user = await User.findOne({username});
        if(user){
            res.json({message:'Username Already Exists'});
        }else{
            const hashedPassword = await bcrypt.hash(password,10);
            const user = await User.create({username,name,email,password:hashedPassword});
            res.json({message:'User Registered Successfully'});
        }
    }catch(err){
        res.json({message:'Error Occured While Registering User'});
    }
});


Userrouter.post('/changepassword', authMiddleware, async(req, res)=>{
    const {oldPassword,newPassword, } = req.body;
    // @ts-ignore
    const {username} = req.username;
    try{
        const user = await User.findOne({username});
        if(!user){
            res.json({message:'User Not Found'});
        }else{
            const isPasswordMatch = await bcrypt.compare(oldPassword,user.password);
            if(isPasswordMatch){
                const hashedPassword = await bcrypt.hash(newPassword,10);
                user.password = hashedPassword;
                await user.save();
                res.json({message:'Password Changed Successfully'});
            }else{
                res.json({message:'Invalid Old Password'});
            }
        }
        
    } catch(err){
        res.json({message:'Error Occured While Changing Password'});
    }
})


Userrouter.post('/braintoggle',authMiddleware,async (req,res)=>{
    // @ts-ignore
    const {username} = req.username;
    try{
        const user = await User.findOne({username});
        if(!user){
            res.json({message:'User Not Found'});
        }else{
            // @ts-ignore
            user.brainShareIng = !user.brainShareIng;
            await user.save();
            // @ts-ignore
            if(user.brainShareIng){
                res.json({message:'Brain Shared Successfully'});
            }else{
                res.json({message:'Brain Not Shared'});
            }
           
        }
    } catch(err){
        res.json({message:'Error Occured While Sharing Brain'});
    }
})

export default Userrouter;


