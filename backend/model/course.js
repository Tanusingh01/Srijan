import mongoose from "mongoose";
const cousreSchema=mongoose.Schema({
    coursename:String,
    description:String,
    price:Number,
    trending:String,
    image:String,
})
const cousreModel=mongoose.model('course',cousreSchema)
export {cousreModel}