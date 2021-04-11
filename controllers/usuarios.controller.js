/* IMPORTAR LOS MODELOS */
import database from "../config/database/db_connection.js";
import { Cita, Usuario } from "../models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser, { signedCookies } from 'cookie-parser';

const controladorUsuario = {
    login: async (req, res) => {

        const { email, password } = req.body;
        try {
            const userSearch = await Usuario.findOne({ where: { email: email } });
            const verification = await bcrypt.compare(password, userSearch.password);

            if (verification) {
                const token = jwt.sign(email, process.env.TOKEN);
                res.cookie('jwt', token, {httpOnly: true, maxAge: 18000000});
                res.status(200).send('Se ha logueado con exito!');
            } else {
                res.status(403).send('La contraseña estan mal!');
            }
        } catch (e) {
            res.status(404).send(e)
        }

    },
    logout: async (req, res) => {

        try{

            const email = jwt.decode(req.headers.token, process.env.TOKEN);
            const user = await Usuario.findOne({ where: { email: email }})
            user.statusLog = 0;
            res.clearCookie('jwt')
            res.send(`Hasta pronto ${user.nombre}`);

        } catch (e){
            res.status(404).send({e: e.message});
        }
       

    },
    misCitas: async (req, res) => {
        // Recuperar los datos del usuario a través del token.
        // De momento harcodeamos un id de usuario.
        try {
            const token = req.headers.token;
            //El payload es el email
            const payload = jwt.verify(token, process.env.TOKEN);

            const email = payload;

            const usuario = await Usuario.findOne({
                where: { email: email }
            })

            const citas = await Cita.findAll({
                where: { usuarioId: usuario.id }
            });

            res.send(citas);

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

            const token = req.headers.token;
            //El payload es el email
            const payload = jwt.verify(token, process.env.TOKEN);
            const email = payload;

            const usuario = await Usuario.findOne({
                where: { email: email }
            })

            const citaId = req.body.citaId;

            // Recuperamos el id de la cita seleccionada y actualizamos los campos deseados
            const cita = await Cita.findByPk(citaId);

            if (!cita || cita.usuarioId !== null) {
                return res.send("La cita seleccionada no está disponible");
            }
            cita.usuarioId = usuario.id;
            cita.estado = 0;
            await cita.save();

            res.send(`Cita seleccionada: ${cita.fecha}`);

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
    confirmarCita: async (req, res) => {
        try {

            const token = req.headers.token;
            //El payload es el email
            const payload = jwt.verify(token, process.env.TOKEN);
            const email = payload;

            const usuario = await Usuario.findOne({
                where: { email: email }
            })

            // Recuperamos el id de la cita de alguna manera.
            const citaId = req.body.citaId;
            const cita = await Cita.findByPk(citaId);
            cita.estado = 1;
            await cita.save();

            res.send(`Tu cita ${cita.fecha} ha sido confirmada`);

        } catch (error) {
            res.status(400).send({ message: error.message });

        }
    },
    cancelarCita: async (req, res) => {
        
        try {
            const citaId = req.body.citaId;
            const cita = await Cita.findByPk(citaId);
            cita.estado = 0;
            cita.usuarioId = null;
            await cita.save();

            res.send(`Tu cita ${cita.fecha} ha sido cancelada`);

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