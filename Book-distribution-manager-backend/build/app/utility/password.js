"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHash = exports.comparePassword = void 0;
const bcryptjs_1 = require("bcryptjs");
// export const createPassword = async () => {
//     const alphaNumeric = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const symbols = "!@#$%^&**()";
//     let password = ''
//     for (let count = 0; count < 6; count++) {
//         const shouldBeSymbol = Math.random() > 0.5;
//         if (shouldBeSymbol) {
//             const index = Math.floor(Math.random() * symbols.length);
//             password += symbols[index];
//             continue;
//         }
//         const index = Math.floor(Math.random() * alphaNumeric.length);
//         password += alphaNumeric[index];
//     }
//     const hashedPassword = createHash(password)
//     return hashedPassword;
// }
const comparePassword = (password, hashedPassword) => {
    return (0, bcryptjs_1.compareSync)(password, hashedPassword);
};
exports.comparePassword = comparePassword;
const createHash = (password) => {
    const salt = (0, bcryptjs_1.genSaltSync)();
    const hashedPassword = (0, bcryptjs_1.hashSync)(password, salt);
    return hashedPassword;
};
exports.createHash = createHash;
//# sourceMappingURL=password.js.map