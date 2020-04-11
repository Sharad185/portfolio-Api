const express=require('express');
const Skill = require('../model/skill');
const router = new express.Router();
router.post('/skill', async (req,res)=>
{
   const skill = new Skill(req.body);

try
{
  await skill.save();
  res.status(201).send(skill);
}catch(e)
{
console.log(e);
res.status(400).send(e);
}

})
router.get('/skill',async(rq,res)=>{

    try{
      const skill=await Skill.find({});
      res.status(201).send(skill);
    }catch(e)
    {
     res.status(400).send(e);
    }
  
  
  })
  module.exports=router;