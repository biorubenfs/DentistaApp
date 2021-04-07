import { Router } from 'express';
import controladorUsuario from '../controllers/usuarios.controller.js';

const rutaUsuario = Router();

rutaUsuario.post("/login", controladorUsuario.login);
rutaUsuario.post("/registro", controladorUsuario.registro);
rutaUsuario.get("/logout", controladorUsuario.logout)


export default rutaUsuario;


