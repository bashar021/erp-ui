const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

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

app.get('/getdata',(res,req)=>{
    res.send("Welcome")
})

// arjain020502
// LRrVuoVomm39eDhH