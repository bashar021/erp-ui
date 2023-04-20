const nodemailer = require('nodemailer');

// Define the attendance records of each student

const attendanceData = [
  { name: 'Arihant Jain',P_email : 'arjain020502@gmail.com', email: 'arjain050502@gmail.com', attendance: 65,presetDay : 30,absDay : 20},
  { name: 'Himanshu saurav',P_email : 'arjain020502@gmail.com', email: 'hsaurav6@gmail.com', attendance: 65,presetDay : 30,absDay : 20 },
  { name: 'Shan singh',P_email : 'shantamkrstm@gmail.com', email: 'luvuprogram@gmail.com', attendance: 65,presetDay : 30,absDay : 20 },
  { name: 'Arsh singhal',P_email : 'arjain020502@gmail.com', email: 'arshsinghal2001@gmail.com', attendance: 65,presetDay : 30,absDay : 20 },
  { name: 'Nikita',P_email : 'shantamkrstm@gmail.com', email: 'nikitasinghstm812@gmail.com', attendance: 60,presetDay : 30,absDay : 20 }
];
    
// Create a transporter to send emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shantamkrstm@gmail.com', 
    pass: 'qhomrmhgultafctj'
  }
});

  // Check if the attendance percentage is below 75%
      attendanceData.forEach(data =>{
        if ((data.presetDay/(data.presetDay+data.absDay) *100) < 75) {
          const mailOptions = {
            from: 'shantamkrstm@gmail.com', 
            to: data.email,
            subject: 'Reminder: Attendance below 75%',
            text: `Dear ${data.name},\n\nThis is a friendly reminder that your attendance is below 75%. Please make sure to  attend atleast ${Math.ceil(3*(data.presetDay+data.absDay) - 4*(data.presetDay))}  classes to avoid any academic difficulties.\n\nThank you!\n\nBest regards,\nErp cell`
         }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error sending email to ${data.name} at ${data.email}: ${error}`);
      } else {
        console.log(`Reminder email sent to ${data.name} at ${data.email}. Message ID: ${info.messageId}`);
      }
    });
  }
});

attendanceData.forEach(data =>{
  if ((data.presetDay/(data.presetDay+data.absDay) *100) < 75) {
    const parentMail = {
      from: 'shantamkrstm@gmail.com', 
      to: data.P_email,
      subject: 'Reminder: Attendance below 75%',
      text: `Dear parent of ${data.name},\n\nThis is a friendly reminder that your attendance is below 75%. Please make sure to attend all classes to avoid any academic difficulties.\n\nThank you!\n\nBest regards,\nErp cell`
   }
    transporter.sendMail(parentMail, (error, info) => {
        if (error) {
          console.log(`Error sending email to ${data.name} at ${data.P_email}: ${error}`);
        } else {
          console.log(`Reminder email sent to parents at ${data.P_email}. Message ID: ${info.messageId}`);
        }
      });
   }
});