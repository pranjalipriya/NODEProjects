import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/postgre.connect";
import MeterModel from "../assign-meter/meter.schema";


const MeterTypesModel = sequelize.define(
    "metertypes",
    {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     
    },
      meterType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picturesRequired: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      faultTolerance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ratePerUnit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      readingRequired: {
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

  // MeterTypesModel.belongsTo(MeterModel);
  
  export default MeterTypesModel;