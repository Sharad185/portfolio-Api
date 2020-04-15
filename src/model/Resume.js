const mongoose=require('mongoose')
const Resumeschema=mongoose.Schema({
    avatar :
    {
        type:Buffer
    }
    }
)
const Resume = mongoose.model('resume',Resumeschema);
module.exports=Resume;