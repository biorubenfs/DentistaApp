'use strict';
import pkg from 'sequelize';
import database from '../config/database/db_connection.js';

const { Model, DataTypes } = pkg;

export default class Medico extends Model { };
Medico.init({
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize: database,
  modelName: 'Medico'
});