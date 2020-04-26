const express=require('express');
const User=require('../model/user');

const router = new express.Router();

router.post('/users', async (req,res)=>
{
   const user = new User(req.body);
try{
  await user.save();
  const token=user.generateAuthToken();
  console.log(token);
  res.status(201).send(user);
}catch(e)
{
res.status(400).send(e);
}
})


router.post('/users/login',async(req,res)=>{

  try 
  {
    console.log(req.body.email,req.body.password)
    const user = await User.findbyCredentials(req.body.email,req.body.password);
    const token= await user.generateAuthToken();
    console.log(token);
    
      res.status(200).send({user,token});
    
   
    
  } catch (error) 
  {
    res.status(400).send({"err":"Wrong password or Username"});
  }

})



module.exports=router;