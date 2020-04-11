const express=require('express');
const app =express();
var cors = require('cors');

require('./db/mongoose')
const menuRouter=require('./routers/menu')
const skillRouter=require('./routers/skill')
const aboutRouter=require('./routers/About')
const experienceRouter=require('./routers/Experience')
const port=process.env.PORT||4000;
app.use(express.json());
app.use(cors());

app.use(menuRouter);
app.use(skillRouter);
app.use(aboutRouter);
app.use(experienceRouter);
app.listen(port,()=>
{
    console.log("Server is runing on port"+port)
});