var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '<gmail_email>',
      pass: '<your_password>'
    }
});

var timerId;

module.exports.sendEmail=function() {
    if(timerId) return;

    timerId=setTimeout(function() {
      clearTimeout(timerId);
      timerId=null;
    }, 1000);

    console.log('Enviando un E-mail...');

    var mailOptions={
      from: '<from_email_address>',
      to: '<destination_email_address>',
      subject: 'Kontuz! Ura irteten hasi da!',
      html: '<b>Kontuz!</b><br /><br />Ura irteten hasi da!<br /> <br /><b>Data: </b>' + Date()
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('An e-mail has been sent: ' + info.response);
      }
    });
}
