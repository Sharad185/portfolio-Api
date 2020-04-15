const express=require('express');
const multer=require('multer');
const getstream = require('get-stream');
const Resume=require('../model/Resume')

const router = new express.Router();
const uplaod = multer({
    //save file in database so remove dest
   // dest:'avatars',

    

    fileFilter(req,file,cb)
    {
      if(!file.originalname.endsWith('pdf'))
      {
        return cb(new Error('Upload the pdf file'))
      }
  
      cb(undefined,true);
    }
  });
router.post('/Resume',uplaod.single('avatar'),async (req,res)=>{
    // buffer variable is to create to store the resize image according to requirement.
    const resume=new Resume();
     resume.avatar=req.file.buffer
     console.log(req);
      await resume.save();
      res.send({sucess:'sucess'});
    },(error,req,res,next)=>{
    
      //It is used for print message otherwise it will give long html message
    
      res.status(404).send({error:error.message});
    })


    router.get('/Resume/:id',async (req,res)=>{

      try {
        
        const resume = await Resume.findById(req.params.id);
    
        
        res.setHeader('Content-Type', 'application/pdf');
        res.status(201).send(resume.avatar);
} catch (error) 
      {
        res.status(404).send();
      }
    
      
    })

  module.exports=router;