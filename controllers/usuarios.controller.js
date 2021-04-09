/* IMPORTAR LOS MODELOS */
import { Usuario } from "../models/index.js";

const controladorUsuario = {
    registro: async (req, res) => {

    },
    login: async (req, res) => {

    },
    logout: async (req, res) => {

    },
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