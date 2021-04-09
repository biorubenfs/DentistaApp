import Medico from "../models/medico.js";
import Usuario from "../models/usuario.js";

const controladorRegistro = {
    crearUsuario: async (req, res) => {

        try {
            const nombre = req.body.nombre;
            const email = req.body.email;
            const password = req.body.password;
            const statusLog = 1;

            const nuevoUsuario = { nombre: nombre, email: email, password: password, statusLog: statusLog }

            await Usuario.create(nuevoUsuario);

            res.send(`Usuario registrado: ${nuevoUsuario.nombre}`);

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
    crearMedico: async (req, res) => {

        try {
            const nombre = req.body.nombre;
            const email = req.body.email;
            const password = req.body.password;
            const statusLog = 1;

            const nuevoMedico = { nombre: nombre, email: email, password: password, statusLog: statusLog }

            await Medico.create(nuevoMedico);

            res.send(`Bienvenido Dr. ${nuevoMedico.nombre}`);

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

export default controladorRegistro;