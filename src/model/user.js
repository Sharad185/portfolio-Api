const mongoose=require('mongoose');
const bycrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const validator=require('validator')
const userSchema= new mongoose.Schema({
 
    name : {type : String ,required:true} ,email : {type : String ,required:true,trim:true,
        validate(value)
    {
        if(!validator.isEmail(value))
        {
            throw new Error("Enter correct mail")
        }
    }},
    password :{type:String,required:true,trim:true,minlength :7,
     validate(value){
    if(value.toLowerCase().includes('password'))
    {
    throw new Error("Password does not contain Password ")
    }
}},

    age : { type : Number ,
    validate(value)
{
    if(value<0)
    {
        throw new Error("Number should be positive")
    }
} },
  
  tokens : [
      {
          token:
          {
             type:String,
             required:true
          }
      }
  ],
},{timestamps:true});

userSchema.methods.generateAuthToken=async function(){

   const user =this;
   const token = jwt.sign({_id:user._id.toString()},'ilovemycountry');
   user.tokens=user.tokens.concat({token});
   await user.save();
   return token;
}


userSchema.statics.findbyCredentials = async (email,password)=>{

const User = await user.findOne({email})

if(!User)
{
    throw new Error("There is no user");
}
  const isMatch = await bycrypt.compare(password,User.password);

  if(!isMatch)
  {
      throw new Error("Unable to login");
  }
     return User;
}



userSchema.pre('save',async function(next){
    const user = this;

// to check that password is already hashed or not

     if(user.isModified('password'))
     {
      user.password=await bycrypt.hash(user.password,8);
     }
   next();
})

// Delete the tasks when the user delete the accounts

userSchema.pre('remove',async function(next){
   const user =this;
   await Task.deleteMany({owner:user._id});

   next();

})

userSchema.methods.toJSON=  function(){

    const user=this;
    // toObject is used to covert data into raw object
    const userObject =  user.toObject();

    delete userObject.password;
    delete userObject.tokens;
    delete userObject.createdAt;
    delete userObject.updatedAt;
    delete userObject.age;
    delete userSchema._id;

    return userObject;

}
const user=mongoose.model('user',userSchema);

module.exports=user;