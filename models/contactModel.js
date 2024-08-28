const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type :String,
        required : [true,"pleasse add the name "]
    },

    email:{
        type :String,
        required : [true,"pleasse add the email address "]
    },
    phone:{
        type :String,
        required : [true,"pleasse add the phone numbers "]
    }
},{
    timestamps:true,
}
);

module.exports = mongoose.model("contact",contactSchema);

