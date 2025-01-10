import jwt from "jsonwebtoken"

//doctor authentication middleware
const authDoctor=async(req,res,next)=>{
    try {
        const {dtoken}=req.headers
        if(!dtoken)
        {
            return res.json({success:false,message:"Not Authorized,Login again"})
        }
        const token_decode=jwt.verify(dtoken,process.env.JWT_SECRET)
        req.body.docId=token_decode.id

        // if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)
        // {
        //     return res.json({success:false,message:"Not Authorized,Login again"})
        // }
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authDoctor