const mongoose=require("mongoose")

const userModel=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    
},
{timestamps:true})

 const User=mongoose.model('users',userModel)

 module.exports=User