
import nodemailer from 'nodemailer';
import { MailConfigurations, MessageOptions } from '../interfaces/interfaces';


let mailConfigurations: MailConfigurations = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.USER as string,
    pass: process.env.PASS as string
  }
};

const createTransporter = (mailConfigurations: MailConfigurations) => nodemailer.createTransport(mailConfigurations);

export const sendMail = async (messageOptions: MessageOptions) => {

  let transpoter = createTransporter(mailConfigurations); await transpoter.verify();

  transpoter.sendMail(messageOptions, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(info.response);
    }
  })
}