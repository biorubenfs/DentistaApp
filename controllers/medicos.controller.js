import { Cita, Medico } from "../models/index.js";
import jwt from 'jsonwebtoken';

/* IMPORTAR LOS MODELOS */
const controladorMedicos = {

    crearCita: async (req, res) => {
        try {
            const token = req.cookies.jwt;
            const email = jwt.decode(token, process.env.TOKEN);
            const medico = await Medico.findOne({ where: { email: email }});
            
            // Datos de la cita. La fecha es la de hoy a la espera de implementar un mejor sistema
            const fecha = new Date();
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

    cancelarCita: async (req, res)=> {
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