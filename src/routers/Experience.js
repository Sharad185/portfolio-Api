const express=require('express');
const Experience = require('../model/Experience');
const router = new express.Router();
router.post('/Experience', async (req,res)=>
{
   const experience = new Experience(req.body);

try
{
  await experience.save();
  res.status(201).send(experience);
}catch(e)
{
console.log(e);
res.status(400).send(e);
}

})
router.get('/Experience',async(rq,res)=>{

    try{
      const experience=await Experience.find({});
      res.status(201).send(experience);
    }catch(e)
    {
     res.status(400).send(e);
    }
  
  
  })

  module.exports=router;