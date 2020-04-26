const express=require('express');
const app =express();
var bodyParser = require('body-parser');

var cors = require('cors');
const routes=require('./routers/index')
require('./db/mongoose')
const port=process.env.PORT||4000;
app.use(express.json());
app.use(cors());
const protectRouteWithApiKey = (req, res, next) => {
    const auth = req.headers['x-apikey']
    if (auth && auth === 'Sharad123') return next()
    return next(new Error('403 | Authorization is missing or value is wrong'))
}
app.use('/api', protectRouteWithApiKey,routes.menu);
app.use(routes.menu)
app.use(routes.skill);
app.use(routes.About);
app.use(routes.Experience);
app.use(routes.Resume);
app.use(routes.user)
app.listen(port,()=>
{
    console.log("Server is runing on port"+port)
});