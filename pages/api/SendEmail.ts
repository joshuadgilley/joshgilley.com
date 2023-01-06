// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require('@sendgrid/mail')
import getHtmlString from '../../templates/html_string';

type Data = Error | string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  const { subject } = data;
  const image = "https://media.istockphoto.com/id/1328032651/vector/cartoon-white-bubble-with-email-notice.jpg?s=612x612&w=0&k=20&c=Olo9PmvJezFAu5mdUHnulKsSpjlTpEVrgvlu2FEevrU=";
  data.image = image;
  const htmlString = getHtmlString(data);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: process.env.PERSONAL_EMAIL, // Change to your recipient
    from: process.env.PERSONAL_EMAIL, // Change to your verified sender
    subject: subject,
    // text: 'and easy to do anywhere, even with Node.js'
    html: htmlString,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.send('Email sent')
    })
    .catch((error: Data) => {
      console.error(error)
      res.send(error)
    })
}
