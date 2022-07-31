const nodemailer = require("nodemailer");
let   mailTransporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "Kingnover16@gmail.com",
    pass: "godfather14",
  }
});

let details = {
    from: "Kingnover16@gmail.com",
    to: "novertech4@gmail.com",
    subject: "testing out nodemailer",
    text:"texting out first sender"
}

mailTransporter.sendMail(details,(err)=>{

       if(err){
        console.log('it has an error',err)
       } else{
        console.log("email has sent!")
       }
      
})
