const mongoose = require('mongoose')
const connectString = process.env.DATABASE
mongoose.connect(connectString).then(()=>{
   console.log("Momgodb Atlas successfully connected with pfserver"); 
}).catch((err)=>{
    console.log(`Mongodb connection failed !!! Error : ${err}`);
})