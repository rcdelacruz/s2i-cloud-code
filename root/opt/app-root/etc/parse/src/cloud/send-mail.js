/*
* this should be part of s2i
*/
const path = require("path");
const mailAdapter = require('./adapter');

Parse.Cloud.define("sendMail", (req, res) => {
  mailAdapter.adapter.sendMail({
      from: process.env.EMAIL_FROM_ADDRESS,
      to: 'rdelacruz@stratpoint.com', // "foo <foo@example.com>"
      subject: 'this is a subject', // email subject
      template: './public/files/templates/verifyUser.html',
      templateData: {
        /*template data*/
      } // now you can use {{paramater}} in your template
    })
    .then(info => console.log("success"))
    .catch(err => console.log(err));
});