const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Students extends Model {}

Students.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    course_id:{
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    collage_name: {
      type: DataTypes.STRING,
    },
    address: {
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
    modelName: "students",
    timestamps: false,
    tableName: "students",
  }
);

module.exports = { Students };
