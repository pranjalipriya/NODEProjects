"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgre_connect_1 = require("../../connections/postgre.connect");
const UserModel = postgre_connect_1.sequelize.define("readings", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    company: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    meterRating: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    meterPicture: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    meterType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    comments: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isFaulty: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    isDeleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, { timestamps: true });
exports.default = UserModel;
//# sourceMappingURL=reading.schema.js.map