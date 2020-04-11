const mongoose=require('mongoose')
const aboutschema=mongoose.Schema({
           
    Priority:{type:Number,required:false,trim:true},
    Tag:{type:String,required:true,trim:true,unique:true},
    description:{type:String,required:true,trim:true}
    }
)
const About = mongoose.model('About',aboutschema);
module.exports=About;