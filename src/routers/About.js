const express=require('express');
const About = require('../model/About');
const router = new express.Router();
router.post('/About', async (req,res)=>
{
   const about = new About(req.body);

try
{
  await about.save();
  res.status(201).send(about);
}catch(e)
{
console.log(e);
res.status(400).send(e);
}

})
router.get('/About',async(rq,res)=>{

    try{
      const about=await About.find({});
      res.status(201).send(about);
    }catch(e)
    {
     res.status(400).send(e);
    }
  
  
  })

  module.exports=router;