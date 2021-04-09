/* IMPORTAR LOS MODELOS */
import { Cita } from '../models/index.js';

const controladorCitas = {
    crear: async (req, res) => {

    },
    miscitas: async (req, res) => {

    },
    findAll: async (req, res) => {

        try {
            const results = await Cita.findAll();
            res.json(results);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }

    }
}

export default controladorCitas;