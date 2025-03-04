const User=require("../models/userModel")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")

const Register=async (req,res)=>{
    try{
    const {username,email,password}=req.body
    if(!username || !email || !password)
        {
            return res.status(401).json({
                message:"invalid data",
                success:"false"
            })
        }
    const data = await User.findOne({email})
    if(data)
        {
            return res.status(401).json({
                message:"email already exists",
                success:"false" 
        })
    }
    const hashedPassword=await bcryptjs.hash(password,10)
    await User.create({username,email,password:hashedPassword})
    return res.status(201).json({
        message:"user registered successfully",
        success:"true" 
})

    }
catch(err)
{
    console.log(err)
}
}

const Login=async(req,res)=>{
    try {
        console.log('login calling')
        const {email,password}=req.body
        if(!email || !password)
            {
                return res.status(401).json({
                    message:"invalid data",
                    success:"false"
                })
            }
        const user=await User.findOne({email})
        if(!user)
            {
                return res.status(401).json({
                    message:"user does not exist",
                    success:"false"
                })
            }
        const ismatch=await bcryptjs.compare(password,user.password)
        if(!ismatch)
            {
                return res.status(401).json({
                    message:"invalid email or password",
                    success:"false"
                })
            }
            const tokenPayload = { userId: user._id, email: user.email };
            const tokenSecret = 'dgsrghsfhhsdhdhdfghsfh';
            const tokenOptions = { expiresIn: '2d' };
    
            const token = jwt.sign(tokenPayload, tokenSecret, tokenOptions);


             return res.status(200).cookie('netflix-jwt',token,{httpOnly:true,maxAge:20000, sameSite: 'none', // Allows cross-site cookies
                secure: false}).json({
            message:`welcome back ${user.username}`,
            user:{
                username:user.username,
                email:user.email
            },
            success:"true"
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({"message":"internet server error"})
    }
}

const Logout = async (req,res) => {
    try {
		res.clearCookie("jwt-netflix");
		res.status(200).json({ success: true, message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}


module.exports={Register,Login,Logout}