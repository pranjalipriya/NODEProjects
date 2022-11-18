"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgre_connect_1 = require("../../connections/postgre.connect");
const MeterModel = postgre_connect_1.sequelize.define("meters", {
    meterType: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    picturesRequired: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    faultTolerance: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ratePerUnit: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    readingRequired: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isDeleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, { timestamps: true });
exports.default = MeterModel;
//# sourceMappingURL=meter.schema.js.map