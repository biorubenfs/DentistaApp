import { Router } from 'express';
import controladorUsuario from '../controllers/usuarios.controller.js';
import authMiddleware from '../middleware/auth.js'

const rutaUsuario = Router();

rutaUsuario.post("/login", controladorUsuario.login);
rutaUsuario.get("/logout", controladorUsuario.logout);

rutaUsuario.get("/usuarios", controladorUsuario.findAll); // Esto lo podremos borrar
rutaUsuario.post("/miscitas", authMiddleware, controladorUsuario.misCitas);
rutaUsuario.get("/citas", authMiddleware, controladorUsuario.citasDisponibles);
rutaUsuario.post("/cita", authMiddleware, controladorUsuario.nuevaCita);
rutaUsuario.post("/confirmacion", authMiddleware, controladorUsuario.confirmarCita);


export default rutaUsuario;