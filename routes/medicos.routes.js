import { Router } from 'express';
import controladorMedicos from '../controllers/medicos.controller.js';

const rutaMedicos = Router();

rutaMedicos.post("/login", controladorMedicos.login);
rutaMedicos.get("/logout", controladorMedicos.logout);

rutaMedicos.get("/", controladorMedicos.findAll);
rutaMedicos.post("/cita", controladorMedicos.crearCita);
rutaMedicos.delete("/cancelar", controladorMedicos.cancelarCita);

export default rutaMedicos;