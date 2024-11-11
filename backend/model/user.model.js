import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please enter your Fullname"],
    },
    username: {
        type: String,
        required: [true, "Please enter your Username"],
        unique: true,
    },
    Dateofbirth: {
        type: Date,
        required: [true, "Please enter your Date of Birth"],
    },
    email:{
        type: String,
        required: [true, "Please enter your Email"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid Email"]
    }, 
    password: {
        type: String,
        required: [true, "Please enter your Password"],
    }, 
    phonenumber:{
        type: String,
        required: [true, "Please enter your Phone Number"],
        unique: true,
    }, 
    country:{
        type: String,
        required: [true, "Please enter your Country"],
    }
},{
    timestamp: true,
})

const User = mongoose.model("User", UserSchema);

export default User;