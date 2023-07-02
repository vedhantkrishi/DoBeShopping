const sgMail = require("@sendgrid/mail");

const verifyEmail = async (options) => {
  // console.log ("setting API key");
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  // console.log ("API key set");

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html:
      "<div style =" +
      "width:100%; height:100%;  " +
      "><h1 style=" +
      "font-weight:500>Hey, " +
      options.name +
      "<br>Welcome to DoBeShopping</h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : " +
      options.code +
      " </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>pandaNeko</strong></p>",
  };
  await sgMail.send(message);
  // console.log("verification mail sent");
};
module.exports = verifyEmail;
