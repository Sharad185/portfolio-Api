const mongoose=require('mongoose')
const menuschema=mongoose.Schema({
           
    Priority:{type:Number,required:false,trim:true},
    catName:{type:String,required:true,trim:true,unique:true},
    catID:{type:Number,required:true,trim:true}
    }
)
const Menu = mongoose.model('Menu',menuschema);
module.exports=Menu;