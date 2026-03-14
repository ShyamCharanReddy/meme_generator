import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required : [true, "Please Enter The Name"]
        },
        password:{
            type: String,
            required : [true, "Please Enter The Email"]
        },
        email : {
            type : String,
            required : [true, "Please Enter The Password"],
            unique : true
        }

},{
    timestamps : true
});

const User = mongoose.model('User', userSchema);

export default User;
