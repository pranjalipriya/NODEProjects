import Cryptr from 'cryptr';
import { createTransport } from 'nodemailer';

const { EMAIL_PASSWORD } = process.env;

const transport = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure :false,
    auth: {
        user: 'fredy.kreiger@ethereal.email',
        pass: EMAIL_PASSWORD
    },
    tls: {
    rejectUnauthorized:false
    }
});

export const sendEmail = async (
    to: string | string[],
    subject: string,
    message: string,
    html:string
) => {
    try {
        await transport.sendMail({
            to,
            subject,
            text: message,
            html:html,
            from: "pranjali.priya@coditas.com"
        });

        return true;
    } catch (e) {
        throw e;
    }
}

const cryptr = new Cryptr('Secretkey')
export const encrypt=(email:string)=>cryptr.encrypt(email);
export const decrypt=(hashid:string)=>cryptr.decrypt(hashid);