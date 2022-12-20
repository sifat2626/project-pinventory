const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"],
    },
    email:{
        type:String,
        required:[true,"Please add an email"],
        unique:true,
        trim:true,
        match:[/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please add a password"],
        minLength:[6,"Password must be up to 6 characters"]
    }
},
{
    timestamps:true,versionKey:false
})
const()