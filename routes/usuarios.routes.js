import { Router } from 'express';
import controladorUsuario from '../controllers/usuarios.controller.js';

const rutaUsuario = Router();

rutaUsuario.post("/login", controladorUsuario.login);
rutaUsuario.get("/logout", controladorUsuario.logout);

rutaUsuario.get("/usuarios", controladorUsuario.findAll);
rutaUsuario.get("/miscitas", controladorUsuario.misCitas);
rutaUsuario.get("/citas", controladorUsuario.citasDisponibles);
rutaUsuario.post("/citas", controladorUsuario.nuevaCita);
rutaUsuario.post("/confirmacion", controladorUsuario.confirmarCita);
rutaUsuario.delete("/cancelar", controladorUsuario.cancelarCita);


export default rutaUsuario;


