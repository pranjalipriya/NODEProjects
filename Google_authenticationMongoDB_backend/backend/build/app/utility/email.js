"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.sendEmail = void 0;
const cryptr_1 = __importDefault(require("cryptr"));
const nodemailer_1 = require("nodemailer");
const { EMAIL_PASSWORD } = process.env;
const transport = (0, nodemailer_1.createTransport)({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'harold.bednar23@ethereal.email',
        pass: EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});
const sendEmail = (to, subject, message, html) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transport.sendMail({
            to,
            subject,
            text: message,
            html: html,
            from: "pranjali.priya@coditas.com"
        });
        return true;
    }
    catch (e) {
        throw e;
    }
});
exports.sendEmail = sendEmail;
const cryptr = new cryptr_1.default('Secretkey');
const encrypt = (email) => cryptr.encrypt(email);
exports.encrypt = encrypt;
const decrypt = (hashid) => cryptr.decrypt(hashid);
exports.decrypt = decrypt;
//# sourceMappingURL=email.js.map