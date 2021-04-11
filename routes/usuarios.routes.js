import { Router } from 'express';
import controladorUsuario from '../controllers/usuarios.controller.js';
import authMiddleware from '../middleware/auth.js'

const rutaUsuario = Router();

rutaUsuario.post("/login", controladorUsuario.login);
rutaUsuario.get("/logout", controladorUsuario.logout);

rutaUsuario.get("/usuarios", controladorUsuario.findAll);
rutaUsuario.post("/miscitas", authMiddleware, controladorUsuario.misCitas);
rutaUsuario.get("/citas", controladorUsuario.citasDisponibles);
rutaUsuario.post("/citas", controladorUsuario.nuevaCita);
rutaUsuario.post("/confirmacion", controladorUsuario.confirmarCita);


export default rutaUsuario;


