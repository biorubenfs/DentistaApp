import { Cita, Medico } from "../models/index.js";

/* IMPORTAR LOS MODELOS */
const controladorMedicos = {

    crearCita: async (req, res) => {
        try {
            // Sacar el id del médico

            // Datos de la cita. La fecha es la de hoy a la espera de implementar un mejor sistema
            // El id del médico habrá que cogerlo del token
            const fecha = new Date();
            const estado = 0;
            const medicoId = 2;

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