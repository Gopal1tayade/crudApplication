const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { ConnecttoMongoAtlas} = require("./connection");
const dotenv = require('dotenv')
dotenv.config();


ConnecttoMongoAtlas(process.env.DB);
const studentUser = require("./Models/student");




app.use(express.urlencoded({ extended: false }));


app.get("/student", async (req ,res)=>{   // this is the api to show all the students
    const allStudent =  await studentUser.find({});
    return res.json(allStudent);
    
});



app.post("/student/add" , async(req , res)=>{  // this is the api to create a student 
       
    const body = req.body;
    const result = await studentUser.create({
       roll_number : body.roll_number,
       first_name: body.first_name,
       last_name : body.last_name,
       email : body.email,
       gender: body.gender,
       course: body.course ,
    });
    return res.status(201).json({ Status: " sucess" });
});

app.get("/student/find/:roll_number" , async(req,res)=>{   // this is the api to find the student with roll number

    // const student = await studentUser.findById(req.params.id);
    const id = req.params.roll_number;
    const student = await studentUser.find({roll_number : id});
    if (!student) return res.status(404).json({ error: "student not found" });
        return res.json(student);
});

app.patch("/student/update/:roll_number" , async(req , res)=>{
    const body = req.body;

    const id = req.params.roll_number;
    await studentUser.updateOne({'roll_number':id},{$set:body});
    return res.json({ Status: "Sucess" });
});

 app.delete("/student/delete/:roll_number", async(req , res)=>{
        const id  = req.params.roll_number;
        const result = await studentUser.deleteOne({'roll_number': id});
        return res.json({ Status: "Sucess" });
 })


app.listen(8000 ,() =>{
    console.log("connected");
})