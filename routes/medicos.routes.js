import { Router } from 'express';
import controladorMedicos from '../controllers/medicos.controller.js';

const rutaMedicos = Router();

rutaMedicos.get("/", controladorMedicos.findAll);
rutaMedicos.post("/cita", controladorMedicos.crearCita);
rutaMedicos.delete("/cancelar", controladorMedicos.cancelarCita);

export default rutaMedicos;