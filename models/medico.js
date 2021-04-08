'use strict';
import pkg from 'sequelize';
import database from '../config/database/db_connection.js';

const { Model, DataTypes } = pkg;

export default class Medico extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
Medico.init({
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize: database,
  modelName: 'Medico'
});