const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const StudentModel = require('./models/Student')

app.use(cors());
app.use(express.json());
const url= "mongodb+srv://arjain020502:LRrVuoVomm39eDhH@cluster0.wyyacpb.mongodb.net/test"

app.listen(3001,()=>{
    console.log("Server running")
})

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.get('/getdata',async (req,res)=>{
   StudentModel.find().then((err,result)=>{
    if(err){
        res.send(err) 
    }else{
       res.send(result)
    }
   })
})

app.post('/addstudent',async (req,res)=>{
    const {student_id,student_name,course,branch,semester,password} = req.body;
    const student = new StudentModel({
        student_id:student_id,
        student_name:student_name,
        course:course,
        branch:branch,
        semester:semester,
        password:password
    })
    await student.save();
    res.send("Inserted Data")
   
})

// arjain020502
// LRrVuoVomm39eDhH