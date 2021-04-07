import { Router } from 'express';
import controladorCitas from '../controllers/citas.controller.js';

const rutaCitas = Router();

rutaCitas.post('/reserva', controladorCitas.crear);
rutaCitas.get('/miscitas', controladorCitas.miscitas);

export default rutaCitas;