const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
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

