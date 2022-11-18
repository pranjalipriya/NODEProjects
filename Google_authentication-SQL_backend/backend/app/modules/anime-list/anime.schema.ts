import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/postgre.connect";

const AnimeModel = sequelize.define(
    "anime",
    {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      production: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      episodes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      release: {
        type: DataTypes.INTEGER,  
        allowNull: false,
      },
      genre: {
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
  

  export default AnimeModel;