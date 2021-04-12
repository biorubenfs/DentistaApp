'use strict';
import pkg from 'sequelize';
import database from '../config/database/db_connection.js';

const { Model, DataTypes } = pkg;

export default class Cita extends Model { };
Cita.init({
  fecha: DataTypes.DATE,
  estado: DataTypes.BOOLEAN
}, {
  sequelize: database,
  modelName: 'Cita'
});

