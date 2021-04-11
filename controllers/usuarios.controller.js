/* IMPORTAR LOS MODELOS */
import database from "../config/database/db_connection.js";
import { Cita, Usuario } from "../models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const controladorUsuario = {
    login: async (req, res) => {

        const { email, password } = req.body;
        try {
            const userSearch = await Usuario.findOne( { where: { email: email }});
            const verification = await bcrypt.compare(password, userSearch.password);

            if(verification){
                const token = jwt.sign(email, process.env.TOKEN);
                res.cookie('jwt', token, {httpOnly: true});
                res.status(200).send('Se ha logueado con exito!');
            } else {
                res.status(403).send('La contraseña estan mal!');
            }
        } catch (e){
            res.status(404).send(e)
        }

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
    // Busca las citas disponibles, es decir, aquellas que están definidas, pero cuyo usuarioId es NULL.
    citasDisponibles: async (req, res) => {
        try {
            const results = await database.query(`SELECT * FROM Cita WHERE usuarioId IS NULL`, { type: database.QueryTypes.SELECT })
            res.json(results);

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },

    nuevaCita: async (req, res) => {
        try {
            // Recuperar el id del usuario del token
            const usuarioId = 2;

            // Recuperamos el id de la cita seleccionada y actualizamos los campos deseados
            const cita = await Cita.findByPk(7);
            cita.usuarioId = usuarioId;
            cita.estado = 0;
            await cita.save();

            res.json(`Tu cita ha sido generada: ${cita.fecha}`);

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
    confirmarCita: async (req, res) => {
        try {

            // Recuperamos el id de la cita de alguna manera.
            const citaId = 11;
            const cita = await Cita.findByPk(citaId);
            cita.estado = 1;
            await cita.save();

            res.send(`Tu cita ${cita.fecha} ha sido confirmada`);

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