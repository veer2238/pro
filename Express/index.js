
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

mongoose
.connect(
  "mongodb+srv://nandanipatel057:qPrLJ7hONnX9DfYW@cluster0.v2nbfxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("mongo error", err));


//Contact
const ContactSchema = new mongoose.Schema({
  name: {
  type: String,
  require: true,
  },
  email: {
  type: String,
  require: true,
  },
  message: {
  type: String,
  require: true,
  },
  });
 
  const User = mongoose.model("demo", ContactSchema);
  
  
  app.use(cors());
  app.use(bodyParser.json());
  


//contact

app.post('/contact',async(req,res) =>{
    const{name,email,mobile,message}=req.body
   
   
    //check if contact detail is match then show error
    try {
   
    const repeat = await User.findOne({email,message})
   
    if(repeat){
     return res.json({go:'alert',error:'data alredy exist'})
   }
    const result = await User.create({
       name,
       email,
       mobile,
       message,
       
       });
   
       console.log(result)
   
   
        // Create a Nodemailer transporter
     const transporter = nodemailer.createTransport({
       service: "gmail",
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
       },
     });
   
     const mailOptions = {
       from: process.env.EMAIL_USER,
       to: email,
       subject: `Thanks for Contacting ${name}`,
       html: `
         <p>Hello  ${name}</p>
         <p>Thank you for contacting !!</p> <br>
         

       `,
     };
   
   
     const mailOptions1 = {
       from: process.env.EMAIL_USER,
       to:  process.env.EMAIL_ADMIN,
       subject: "Portfolio ",
       html: `
         <span> Details of Person who contact :: </span>  <br>
         <p> Name:${name} <br><br> Email:${email} <br> Message:${message} </p>
         
       `,
     };
   
     const info = await transporter.sendMail(mailOptions);
     const info1 = await transporter.sendMail(mailOptions1);
     console.log("Email sent:", info.response);
     console.log("Email sent:", info1.response);
   
   
       res.json({go:'success',message:'Thanks For Contacting '});
     } catch (error) {
       res.json({ go:'alert', error: 'Contact cannot be submitted' });
     }
      
   })
   //contact over
app.listen(3032, () => {
console.log('Server connected');
});