// import { createTransport } from 'nodemailer';

// const { EMAIL_PASSWORD } = process.env;

// const transport = createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'elaina.crona@ethereal.email',
//         pass: EMAIL_PASSWORD
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// export const sendEmail = async (
//     to: string | string[],
//     subject: string,
//     message: string
// ) => {
//     try {
//         await transport.sendMail({
//             to,
//             subject,
//             text: message,
//             from: "aniruddha.gohad@coditas.com"
//         });

//         return true;
//     } catch (e) {
//         throw e;
//     }
// }