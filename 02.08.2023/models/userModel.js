const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, 'Name required'],

        },
        email : {
            type : String,
            required : [true, 'Email id required'],
            unique : true,
        },
        pass : {
            type : String
        }
    }
)

module.exports = mongoose.model('user',userSchema);