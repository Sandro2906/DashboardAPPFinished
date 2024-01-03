import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{ 
    type:String,
    required: true,
    unique: true,
    min:3,
    max:20
},
email:{
    type: String,
    required:true,
    unique:true,
    max:20,
},
password:{
    type: String,
    required:true,
},

isAdmin:{
    type:Boolean,
    default:false,
},
isActive:{
    type:Boolean,
    default:true,
},
phone:{
    type:String,
},
adress:{
    type:String
}
},{timestamps: true})





const productSchema = new mongoose.Schema({
    title:{ 
    type:String,
    required: true,
    unique: true,
    
},
desc:{
    type: String,
    required:true,
    unique:true,
    max:20,
},
price:{
    type: Number,
    required:true,
    min:0
},
stock:{
    type:Number,
    required: true,
    min: 0,
},

color:{
    type:String,
},
size:{
    type:String
}
},{timestamps: true})


const helpSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        min:3
    },
    email:{ 
    type:String,
    required: true,
    unique: true,
    min:3,
    max: 40
    
},
message:{
    type: String,
    required:true,
    min:3
},

},{timestamps: true})


export const User = mongoose.models.User || mongoose.model('User' ,userSchema)


export const Product = mongoose.models.Product|| mongoose.model('Product' ,productSchema)
export const Help = mongoose.models.Help || mongoose.model('Help' ,helpSchema)

