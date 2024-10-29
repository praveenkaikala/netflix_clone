import AxiosPrivate from "./AxiosPrivate"

export const AuthUser=async()=>{
try
{
const {token}=localStorage.getItem("user")
const response=await AxiosPrivate.get("/api/auth/user")
return true;
}
catch(err)
{
    console.log(err)
    return false;
}
}