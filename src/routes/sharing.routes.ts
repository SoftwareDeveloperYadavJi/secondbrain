import express from 'express';
import User from '../models/user.model';
import content from '../models/content.modle';

const sharingPointrouter = express.Router();

sharingPointrouter.get('/:username',async (req,res)=>{
    // @ts-ignore
    const {username} = req.params;
    try{
        const user = await User.findOne({username});
        if(!user){
            res.json({message:'User Not Found'});
        }
        // @ts-ignore
        if(user.brainShareIng){
            // @ts-ignore
            const brain = await content.find({author:user._id});
            res.json({message:'Brain Found',brain});
        }else{
            res.json({message:'Brain is not shared'});
        }
       
    }catch(err){
        res.json({message:'Error Occured While Getting Brain Status'});
    }
});


export default sharingPointrouter;