import { Router } from "express";
import controladorRegistro from "../controllers/registro.controller.js";

const rutaRegistro = Router();

rutaRegistro.post('/', controladorRegistro.crearUsuario);

export default rutaRegistro;