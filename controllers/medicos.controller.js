import { Cita, Medico } from "../models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

/* IMPORTAR LOS MODELOS */
const controladorMedicos = {

    login: async (req, res) => {

        const { email, password } = req.body;
        try {
            const busquedaMedico = await Medico.findOne({ where: { email: email } });

            if (!busquedaMedico) {
                return res.send("Tienes que registrarse primero");
            }

            const verification = await bcrypt.compare(password, busquedaMedico.password);

            if (verification) {
                const token = jwt.sign(email, process.env.TOKEN);
                res.cookie('jwt', token, { httpOnly: true, maxAge: 18000000 });
                res.status(200).send('Se ha logueado con exito!');
            } else {
                res.status(403).send('La contraseña estan mal!');
            }
        } catch (e) {
            res.status(404).send(e)
        }

    },
    logout: async (req, res) => {

        try {

            const email = jwt.decode(req.cookies.jwt, process.env.TOKEN);
            const medico = await Medico.findOne({ where: { email: email } })
            medico.statusLog = 0;
            res.clearCookie('jwt')
            res.send(`Hasta pronto Dr. ${medico.nombre}`);

        } catch (e) {
            res.status(404).send({ e: e.message });
        }


    },

    crearCita: async (req, res) => {
        try {
            const token = req.cookies.jwt;
            const email = jwt.decode(token, process.env.TOKEN);
            const medico = await Medico.findOne({ where: { email: email } });

            // Datos de la cita. La fecha es la de hoy a la espera de implementar un mejor sistema
            const fecha = req.body.fecha;
            const estado = 0;
            const medicoId = medico.id;

            const nuevaCitaDisponible = {
                fecha: fecha,
                estado: estado,
                medicoId: medicoId,
                usuarioId: null
            }

            const result = await Cita.create(nuevaCitaDisponible);

            res.json(result);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },

    cancelarCita: async (req, res) => {
        const citaId = req.body.citaId;
        try {
            const cita = await Cita.findByPk(citaId);
            cita.destroy();

            res.send(`Tu cita ${cita.fecha} ha sido cancelada`);

        } catch (e) {
            res.status(400).send({ message: e.message });
        }
    },

    findAll: async (req, res) => {

        try {
            const results = await Medico.findAll();
            res.json(results);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

export default controladorMedicos;