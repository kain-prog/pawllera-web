import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dataContact = JSON.parse(req.body);

  if (dataContact.name.length < 3) {
    return res
      .status(400)
      .json({ message: 'O campo nome precisa ter no mínimo 3 caracteres' });
  } else if (dataContact.email.length < 3 || !dataContact.email.includes('@')) {
    return res.status(400).json({ message: 'O email está inválido' });
  } else if (dataContact.subject.length < 3) {
    return res
      .status(400)
      .json({ message: 'O campo assunto precisa ter no mínimo 3 caracteres' });
  } else if (dataContact.message.length < 3) {
    return res
      .status(400)
      .json({ message: 'O campo mensagem precisa ter no mínimo 3 caracteres' });
  }

  const transporter = createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  async function send() {
    const info = await transporter.sendMail({
      from: `"Temos uma mensagem!!" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: dataContact.subject,
      text:
        dataContact.message +
        '\r\n\r\n' +
        `Cliente: ${dataContact.name}` +
        '\r\n' +
        `E-mail: ${dataContact.email}`,
    });

    return res
      .status(200)
      .json({ message: 'O e-mail foi enviado com sucesso!', info });
  }

  send().catch((err) => console.error(err));
};
