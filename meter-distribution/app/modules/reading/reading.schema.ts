import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/postgre.connect";
import MeterModel from "../assign-meter/meter.schema";

const ReadingModel = sequelize.define(
    "readings",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      meterRating: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      meterPicture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meterType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comments: {
        type: DataTypes.STRING,
        defaultValue:"none",
        allowNull: false,
      },
      isFaulty: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
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
  ReadingModel.belongsTo(MeterModel,{foreignKey:"meterId"})
   MeterModel.hasMany(ReadingModel)
  export default ReadingModel;