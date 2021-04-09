'use strict';
import pkg from 'sequelize';
import database from '../config/database/db_connection.js';

const { Model, DataTypes } = pkg;

export default class Usuario extends Model { };
Usuario.init({
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  statusLog: DataTypes.BOOLEAN
}, {
  sequelize: database,
  modelName: 'Usuario'
});