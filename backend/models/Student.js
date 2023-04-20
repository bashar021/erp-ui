const mongoose = require('mongoose');

const StudentSchema =  new mongoose.Schema({
    student_id:{
        type:Number
    },
    student_name:{
        type:String
    },
    course:{
        type:String
    },
    branch:{
        type:String
    },
    semester:{
        type:Number
    },
    password:{
        type:String
    },
    presentday:{
        type:Number
    },
    absentday:{
        type:Number
    }
})

const StudentModel = mongoose.model('student',StudentSchema);
module.exports = StudentModel