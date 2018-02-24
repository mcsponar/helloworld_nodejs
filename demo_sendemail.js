var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: '@gmail.com',
    to: '@gmail.com',
    subject: 'Hi, I love you!',
    text: 'Love you more!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});