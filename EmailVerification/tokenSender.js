const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: secure_configuration.EMAIL_USERNAME,
        pass: secure_configuration.PASSWORD
    }
});

const token = jwt.sign({
    data: 'Token Data'}, 'ourSecretKey', { expiresIn: '10m' }  
);  

const mailConfigurations = {
     // It should be a string of sender/server email
     from: 'akshanshawasthi685@gmail.com',
  
     to: 'akshanshawasthi013@gmail.com',
   
     // Subject of Email
     subject: 'Email Verification',
       
     // This would be the text of email body
     text: `Hi! There, You have recently visited 
            our website and entered your email.
            Please follow the given link to verify your email
            http://localhost:8080/verify/${token} 
            Thanks`
}


transporter.sendMail(mailConfigurations,function(error,info){
    if(error)  throw error;
    console.log('Email Sent Successfully');
    console.log(info)
})