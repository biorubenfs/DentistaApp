import { Router } from "express";
import controladorRegistro from "../controllers/registro.controller.js";

const rutaRegistro = Router();

rutaRegistro.post('/usuario', controladorRegistro.crearUsuario);
rutaRegistro.post('/medico', controladorRegistro.crearMedico);

export default rutaRegistro;