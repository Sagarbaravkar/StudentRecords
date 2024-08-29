const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "courses",
    timestamps: false,
    tableName: "courses",
  }
);

module.exports = { Course };
