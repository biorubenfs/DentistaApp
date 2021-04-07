import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
    const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.DATABASEPASSWORD, {
        host: process.env.HOST,
        dialect: 'mysql'
    });
    try {
        await sequelize.authenticate();
        console.log('Todo se ha conectado correctamente');
    } catch (error) {
        console.error('Imposible conectarse con la base de datos:', error);
    }
}

export default connect;