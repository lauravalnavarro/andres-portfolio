const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res)=>{
    let data = req.body;
    if(data.name.length===0 || data.email.length===0 || data.message.length===0){
     return res.json({msg:"Please fill all the fields"})
    }

let smtpTransport = nodemailer.createTransport({
    service:'Gmail',
    port:465,
    auth:{
        user:'andresfra65@gmail.com',
        pass:'LaNenePechocha2021',
    },
    tls:{
        rejectUnauthorized: false,
    }
})

let mailOptions = {
    from:data.email,
    to:'andresfra65@gmail.com',
    subject:`Message from ${data.name}`,
    html:`
    
    <h3>Informations</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
   
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
    `
}

smtpTransport.sendMail(mailOptions, (err)=>{
try {    
 if(err) return res.status(400).json({msg:'Please fill all the fields'})
res.status(200).json({msg:'Thank you for contacting Andres!'})
} catch (err) {
    if(err) return res.status(500).json({msg:'There is server error'})
}
})
})
module.exports=router;