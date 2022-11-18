import { createTransport } from 'nodemailer';

const { EMAIL_PASSWORD } = process.env;

const transport = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: '	rachael.labadie7@ethereal.email',
        pass: EMAIL_PASSWORD
    },
    tls :{
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