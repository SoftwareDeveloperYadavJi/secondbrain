import express from 'express';
import Content from '../models/content.modle';
import authMiddleware from '../middleware/authmiddleware';

const Contentrouter = express.Router();


Contentrouter.post('/newbrain',authMiddleware,async (req,res)=>{
   // @ts-ignore
  const user = req.username;
  const {title,description,content,link, tag} = req.body;
  if(!title || !description || !content || !link){
    res.json({message:'Please Fill All Fields'});
  }
  console.log(user);
  try {
    const newContent = new Content({
      title,
      description,
      content,
      author: user._id,
      tags: tag,
      link,
    });
    await newContent.save();
    res.json({message:'Brain Created Successfully'});
  } catch (error) {
    console.log(error);
    res.json({message:'Error Occured While Creating Brain'});
  }
});



export default Contentrouter;
