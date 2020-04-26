const express=require('express');
const Menu = require('../model/menu');
const router = new express.Router();
router.post('/menu', async (req,res)=>
{
   const menu = new Menu(req.body);

try
{
  await menu.save();
  res.status(201).send(menu);
}catch(e)
{
console.log(e);
res.status(400).send(e);
}

})
router.get('menu',async(rq,res)=>{

    try{
      const menu=await Menu.find({});
      res.status(201).send(menu);
    }catch(e)
    {
     res.status(400).send(e);
    }
  
  
  })

  module.exports=router;