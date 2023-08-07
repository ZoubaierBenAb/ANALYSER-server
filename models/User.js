import mongoose from "mongoose"

const UserSchema =new mongoose.Schema({
name : {
    type : String,
    required : true,
    min : 2 ,
    max : 50
} ,
email : {
    type : String,
    required : true ,
    unique : true
},
password : {
    type : String ,
    required : true,
    min : 6 
},
state : String,
city : String,
country : String,
occupation : String ,
transactions : Array,
phoneNumber : String,
role : {
    type : String,
    enum : ['admin','user','superadmin'],
    default : 'admin'
} 

},{timestamps : true})

const User = mongoose.model('User',UserSchema)


export default User