const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    work:{
        type:String,
        
    },
    active:{
        type:Boolean,
        default:true
    }
});

module.exports=mongoose.model("Employe",employeeSchema);