const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Subjects extends Model {}

Subjects.init(
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
    modelName: "subjects",
    timestamps: false,
    tableName: "subjects",
  }
);

module.exports = { Subjects };
