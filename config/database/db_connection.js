import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbname = "ClinicaDental";
const username = "root";
const password = "root";

const database = new Sequelize(dbname, username, password, {
    host: "127.0.0.1",
    dialect: 'mysql'
});

try {
    await database.authenticate();
    console.log('Todo se ha conectado correctamente');
} catch (error) {
    console.error('Imposible conectarse con la base de datos:', error);
}

// const connect = async () => {
//     const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.DATABASEPASSWORD, {
//         host: process.env.HOST,
//         dialect: 'mysql'
//     });
//     try {
//         await sequelize.authenticate();
//         console.log('Todo se ha conectado correctamente');
//     } catch (error) {
//         console.error('Imposible conectarse con la base de datos:', error);
//     }
// }

export default database;