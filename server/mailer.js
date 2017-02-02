var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'etxahun.sanchez@gmail.com',
      pass: 'etxahun101281sanchez'
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
      from: 'DomoNESB <etxahun.sanchez@gmail.com>',
      to: 'etxahun.sanchez@gmail.com',
      subject: 'Kontuz! Ura irteten hasi da!',
      html: '<b>Kontuz!</b><br /><br />Ura irteten hasi da!<br /> <br /><b>Data: </b>' + Date()
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Mensaje enviado: ' + info.response);
      }
    });
}
