const mongoose=require('mongoose')
const Experienceschema=mongoose.Schema({
           
    Priority:{type:Number,required:false,trim:true},
    CompanyName:{type:String,required:true,trim:true,unique:true},
    profile:{type:String,required:true,trim:true},
    ActiveYear:{type:String,required:true,trim:true,unique:true},
    duration:{type:String,required:true,trim:true},
    Domain:{type:String,required:true,trim:true,unique:true},
    TechStack:{type:String,required:true,trim:true},
    Projects:{type:String,required:true,trim:true}

    }
)
const Experience = mongoose.model('Experience',Experienceschema);
module.exports=Experience;