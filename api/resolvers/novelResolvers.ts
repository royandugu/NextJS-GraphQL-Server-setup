import { Novel } from "../types/types";

import novelModel from "../models/novel";
import connectDB from "../connector/connector";

export const hello=async ()=>{
    try{
        await connectDB();
        return 'World';
    }
    catch(err){
        return 'Error';
    }
}

export const publishNovel=async (body:Novel)=>{
    try{
        await connectDB();
        const publishedNovel=await novelModel.create(body);
        return publishedNovel;
    }
    catch(err){
        throw err;
    }
}

export const viewNovels=async ()=>{
    try{
        await connectDB();
        const allNovels=await novelModel.find({});
        return allNovels;
    }   
    catch(err){
        throw err;
    }
}

export const viewIndvNovels=async (id:string)=>{
    try{
        await connectDB();
        const indvNovel=await novelModel.findOne({_id:id});
        return indvNovel;
    }
    catch(err){
        throw err;
    }
}

export const updateNovel=async (id:string,body:Novel)=>{
    try{
        await connectDB();
        const updatedNovel=await novelModel.findOneAndUpdate({_id:id},body,{new:true, runValidators:true});
        return updatedNovel;
    }   
    catch(err){
        throw err;
    }
}

export const deleteNovel=async (id:string)=>{
    try{
        await connectDB();
        const deletedNovel=await novelModel.findOneAndDelete({_id:id});
    }   
    catch(err){
        throw err;
    }
}

