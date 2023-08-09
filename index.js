const express = require('express');
const app = express();
const PORT = 8000;
const userRouter = require('./routers/user')
const {connectMongoDb}  = require('./connection')

app.use(express.urlencoded({extended:false}))
~
connectMongoDb("mongodb://127.0.0.1:27017/firstdb")
.then(()=> console.log("Mongoose Connected"))
.catch((err)=> console.log("Mongoose err",err))

app.use('/user',userRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port port:${PORT}`);
});

