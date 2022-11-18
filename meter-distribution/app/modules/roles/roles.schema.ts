import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/postgre.connect";


const RolesModel = sequelize.define(
    "roles",
    {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     
    },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleid: {
        type: DataTypes.STRING,
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


  
  export default RolesModel;