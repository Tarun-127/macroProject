const mongoose = require('mongoose')
const { string } = require('prop-types')

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        default:false
    },
    city:{
        type:String,
        reuired:true
    }


})

module.exports = mongoose.model("Employee", employeeSchema)