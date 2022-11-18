
import { DataTypes } from "sequelize";

import { sequelize } from "../../connections/postgre.connect";
import CustomerModel from "../customer/customer.schema";
import MeterTypesModel from "../meter-types/meter-types.schema";
import UserModel from "../users/user.schema";


const MeterModel = sequelize.define(
    "meters",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,      
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
MeterTypesModel.belongsToMany(CustomerModel,{through:MeterModel,foreignKey:"metertypeId"})
CustomerModel.belongsToMany(MeterTypesModel,{through:MeterModel,foreignKey:"customerId"})
export default MeterModel;