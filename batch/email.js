var nodemailer = require('nodemailer');

var mongoose   = require('mongoose');
\
mongoose.connect("mongodb://localhost/wis");

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'alpesh.hadoop@gmail.com',
        pass: 'Pratham2002!'
    }
});

console.log('created');
transporter.sendMail({
    from: 'alpesh.hadoop@gmail.com',
    to: 'alpesh.hadoop@gmail.com',
    subject: 'hello world!',
    text: 'hello world!'
});


var sendEmail = function()
{

}