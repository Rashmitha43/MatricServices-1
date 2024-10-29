const nodemailer = require('nodemailer');

class EmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.zoho.in',
            port: 465,
            secure: true,
            // rejectUnauthorized: false,
            auth: {
                user: 'enquiry@matricservices.in',
                // pass: 'MatricServices1$'
                pass: 'ss8mkU3Y6hmW'
            }
        });
    }


    sendEmail(payload) {
        console.log(payload.name);

        const mailOptions = {
            from: 'enquiry@matricservices.in',
            // to: 'kalyanseera1997@gmail.com',
            to: 'enquiry@matricservices.in',
            subject: `Enquiry from ${payload.name}. `,
            // text: 'Plain text content of the email testing for the web site'
            html: ` 
            <p>Dear Sir,</p>
            <p>Greetings of the day!</p>
            <p>New Inquiry from <strong>${payload.name}</strong></p>
            <p><strong>Student Name:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> ${payload.email}</p>
          <p><strong>College/Institute:</strong> ${payload.college}</p>
          <p><strong>Inquiry:</strong> ${payload.doubts}</p>
          <p><strong>Phone:</strong> ${payload.phone}</p>
          <p><strong>This mail was Generated Autonomous Please <span style="color: red;">DO NOT</span> reply to this mail.</strong>
          <p>Thank you.</p>
          `

        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("error in sendEmail ", error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}



// module.exports = sendEmail;
module.exports = EmailSender;
