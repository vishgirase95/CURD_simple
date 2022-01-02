const express=require("express");
const routers=express.Router();
const EmpData=require("../modules/module.app.js");

routers.get("/",async(req,res)=>{
 
    try {
        const EMP=await EmpData.find();
        res.send(EMP);
        console.log("get request");
        
    } catch (error) {
console.log("get error",error)
    }
})
routers.post("/",async(req,res)=>{
    const employee=new EmpData({
        name:req.body.name,
        work:req.body.work,
        active:req.body.active
    });
    try {
        const savedEMP= await employee.save();
        res.send(savedEMP);
    console.log("post request");

    } catch (error) {
        console.log("Error in post",error);
        res.send("Error in post",error);
    }

})
routers.get("/:id",async(req,res)=>{
try {
    const EmpByID=await EmpData.findById(req.params.id);
    res.send(EmpByID);
    console.log("succesfully found id");
    
} catch (error) {
    console.log(error);
    res.send(error);
}
})

routers.delete("/:id",async(req,res)=>{
    try {
        const EmpByID=await EmpData.findByIdAndDelete(req.params.id);
        res.remove(EmpByID);
        console.log("succesfully deleted id");
        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    })

routers.patch("/:id",async(req,res)=>{
  try {
      const EditEmp=await EmpData.findByIdAndUpdate(req.params.id,{
        active:req.body.active,
        name:req.body.name,
    
        work:req.body.work}
      )  
    const a1=await EditEmp.save();
      res.json(a1);
      console.log(EditEmp)
  } catch (error) {
      
  }  
})
module.exports=routers