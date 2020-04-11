const mongoose=require('mongoose')
const skillschema=mongoose.Schema({
           
    Priority:{type:Number,required:false,trim:true},
    SkillName:{type:String,required:true,trim:true,unique:true},
    value:{type:String,required:true,trim:true}
    }
)
const Skill = mongoose.model('Skill',skillschema);
module.exports=Skill;