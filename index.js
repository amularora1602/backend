// // require('dotenv').config()
// // const express=require('express');
// // // import express from "express";
// // const app=express();
// // const port=3000;

// // app.get('/',(req,res)=>{
// //     res.send("Hello World")
// // })

// // app.get('/twitter',(req,res)=>{
// //     res.send("Amularor")
// // })

// // app.get("/login",(req,res)=>{
// //     res.send("<h1>login </h1>")
// // })

// // app.listen(process.env.port,()=>{
// //     console.log('Example app listening at port ${port}' )
// // })


// const express = require('express');
// const app = express();
// const port = 3000;
// const booksSchema = { title: String, author: String, publication: String, subject: String };
// const authorsSchema = { name: String, email: String, phone: String };
// const sectionSchema = { name: String };
// const subSectionSchema = { name: String, section: Object };
// const publicationSchema = { name: String, date: Date };
// const subjectSchema = { name: String };
// app.get('/books', (req, res) => {
    
// });
// app.get('/authors', (req, res) => {

// });  
// app.get('/sections', (req, res) => {
// });
// app.get('/subsections', (req, res) => {
    
// });
// app.get('/publications', (req, res) => {
    
// });
// app.get('/subjects', (req, res) => {

// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

 

const nodemailer = require('nodemailer')

const crd = require('PATH_TO_YOUR_FILE_CONTAINING_CREDENTIALS')



exports.SendInvoiceMail = async (email,attachmentUrl) => {
    const mail = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: { user: crd.user1 , pass: crd.pass1 },
    })
}


mail.sendMail({
    from: 'hi@company.com',
    to: [email],
    subject: 'Whatever you want',
    html: message,
    
}, (err) => {
    if (err) throw err;
    console.log(`Invoice Mail sent to ${email}`)
    return true
})
return true

