const express=require("express")
const app=express()
const dotenv=require('dotenv')
const {connectDatabase} =require("./utils/Database")
const userRoutes=require("./routes/userRouter")
const cors=require("cors")

dotenv.config({
    path:".env"
})
const corsOptions={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/v1/user',userRoutes)



app.listen(process.env.PORT,()=>{
console.log(`server running on port ${process.env.PORT}`)
})
connectDatabase()