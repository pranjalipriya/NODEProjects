import { compare, genSalt, hash, compareSync, genSaltSync, hashSync } from 'bcryptjs';
import Cryptr from 'cryptr';

export const createPassword = async () => {
    const alphaNumeric = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&**()";

    let password = ''
    for (let count = 0; count < 6; count++) {
        const shouldBeSymbol = Math.random() > 0.5;
        if (shouldBeSymbol) {
            const index = Math.floor(Math.random() * symbols.length);
            password += symbols[index];
            continue;
        }

        const index = Math.floor(Math.random() * alphaNumeric.length);
        password += alphaNumeric[index];
    }

    const hashedPassword = createHash(password)
    

    return {password,
        hashedPassword};
}

export const comparePassword = (password: string, hashedPassword: string) => {
   return compareSync(password, hashedPassword);
}

export const createHash = (password: string) => {
    const salt = genSaltSync();

    const hashedPassword = hashSync(password, salt);

    return hashedPassword;
}
const cryptr = new Cryptr('Secretkey')
export const encrypt=(email:string)=>cryptr.encrypt(email);
export const decrypt=(hashid:string)=>cryptr.decrypt(hashid);