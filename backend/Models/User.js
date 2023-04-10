const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
 username:{type:String,required:true},
 email:{type:String,required:true,unique:true},
 mobileNo:{type:Number,required:true},
 gpayNo:{type:Number},
 college:{type:String,required:true},
 collegeAddress:{type:String},
 branch:{type:String,required:true},
 semester:{type:String,required:true},
 createdAt:{type:Date,default:Date.now()}
});

module.exports = mongoose.model("User",UserSchema)