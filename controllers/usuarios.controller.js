/* IMPORTAR LOS MODELOS */

import Usuario from "../models/usuario.js";



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
            res.status(400).send({ message: error.message });
        }
    }
}

export default controladorUsuario;