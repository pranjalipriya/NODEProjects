"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgre_connect_1 = require("../../connections/postgre.connect");
const CustomerModel = postgre_connect_1.sequelize.define("customers", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    meter: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    comapany: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isDeleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, { timestamps: true });
exports.default = CustomerModel;
//# sourceMappingURL=customer.schema.js.map