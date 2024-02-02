import mongoose from "mongoose";


const novelSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title of the novel is required"]
    },
    author:{
        type:String,
        required:[true, "The author of the novel is required"]
    }
},{timestamps:true})


const novelModel=mongoose.models.novel || mongoose.model("novel",novelSchema); 
export default novelModel;
