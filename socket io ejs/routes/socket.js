import { Router } from "express";
function a(io){
    const route=Router()
route.get('/page',(req,res)=>{
    const val=req.query.count;
    if(!val){
        res.json({
            m:"value is not provided"
        })
    }
    else{
        res.json({
            M:val
        })
    }
    io.emit("one",val)
})
return route
}
export default a