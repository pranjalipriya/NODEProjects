const mongoose=require('mongoose')
const connectionString='mongodb+srv://pranjalipriya:Rashi03@nodeexpressprojects.xjjzlcl.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB=(url)=>{
return mongoose
.connect(connectionString, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useUnifiedTopology: true,
})
}
module.exports = connectDB

//  .then(()=>console.log('CONNECTED TO THE DB...'))
//  .catch((err) => console.log(err))