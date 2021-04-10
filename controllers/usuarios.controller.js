/* IMPORTAR LOS MODELOS */
import database from "../config/database/db_connection.js";
import { Usuario } from "../models/index.js";

const controladorUsuario = {
    login: async (req, res) => {

    },
    logout: async (req, res) => {

    },
    misCitas: async (req, res) => {
        // Recuperar los datos del usuario a través del token.
        // De momento harcodeamos un id de usuario.
        try {

            const usuarioId = 2;    // Tendrá que coger el id de usuario por el token

            const results = await database.query(`SELECT * FROM Cita WHERE usuarioId = ${usuarioId}`, { type: database.QueryTypes.SELECT })
            res.json(results);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },


    // Este metodo solo debería estar disponible para administradores
    findAll: async (req, res) => {
        try {
            const results = await Usuario.findAll();
            res.json(results);
        } catch (error) {
            console.log(error.message);
            res.status(400).send({ message: error.message });
        }
    }
}

export default controladorUsuario;