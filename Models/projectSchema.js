const mongoose = require('mongoose')
const validator = require('validator')

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    projectImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})


const projcects = mongoose.model("projcects",projectSchema)

module.exports = projcects