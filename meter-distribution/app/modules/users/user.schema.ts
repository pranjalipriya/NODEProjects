import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/postgre.connect";
import CustomerModel from "../customer/customer.schema";

const UserModel = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
       
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue:"a1fb54a0-659c-423d-81d5-1cda568459db",
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  

  export default UserModel;