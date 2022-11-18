import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/postgre.connect";
import UserModel from "../users/user.schema";

const CustomerModel = sequelize.define(
    "customers",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,  
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
  
  
  CustomerModel.hasOne(UserModel, { sourceKey: "userId" , foreignKey: "id"})

  export default CustomerModel;