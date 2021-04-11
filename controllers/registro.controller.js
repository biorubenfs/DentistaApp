import Medico from "../models/medico.js";
import Usuario from "../models/usuario.js";
import bcrypt, { hash } from 'bcrypt';

const controladorRegistro = {
    crearUsuario: async (req, res) => {
        const nombre = req.body.nombre;
        const email = req.body.email;
        const password = req.body.password;
        const statusLog = 0;
        const hashTemp = 10;

        try {
            const passwordHash = await bcrypt.hash(password, hashTemp);
            const nuevoUsuario = { nombre: nombre, email: email, password: passwordHash, statusLog: statusLog }

            await Usuario.create(nuevoUsuario);

            res.send(`Usuario registrado: ${nuevoUsuario.nombre}`);

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
    crearMedico: async (req, res) => {

        const nombre = req.body.nombre;
        const email = req.body.email;
        const password = req.body.password;
        const statusLog = 1;
        const hashTemp = 10;

        try {
            const passwordHash = await bcrypt.hash(password, hashTemp);
            const nuevoMedico = { nombre: nombre, email: email, password: passwordHash, statusLog: statusLog }

            await Medico.create(nuevoMedico);

            res.send(`Bienvenido Dr. ${nuevoMedico.nombre}`);

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

export default controladorRegistro;