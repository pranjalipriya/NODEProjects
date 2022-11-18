"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.header = void 0;
const validateFactoryFunction = (source, key) => {
    return (req, res, next) => {
        const value = (req[source])[key];
        if (value === 'superAdmin') {
            console.log("SuperAdmin");
        }
        if (value === 'admin') {
            console.log("Admin");
        }
        if (value === 'user') {
            console.log("user");
        }
        //  if(!value){
        //     const error=`${key} Not Valid`
        //     res.locals={...res.locals , [key]: error};
        //  }
    };
};
const header = (key) => {
    validateFactoryFunction('headers', key);
};
exports.header = header;
const validate = (req, res, next) => {
    if (Object.keys(req.params).length) {
        next('error');
    }
    next();
};
exports.validate = validate;
//# sourceMappingURL=validators.js.map