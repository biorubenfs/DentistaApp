import { Router } from 'express';
import controladorCitas from '../controllers/citas.controller.js';

const rutaCitas = Router();

rutaCitas.post('/reserva', controladorCitas.crear);
rutaCitas.get('/miscitas', controladorCitas.miscitas);

rutaCitas.get('/citas', controladorCitas.findAll);

export default rutaCitas;