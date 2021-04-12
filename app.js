import express from 'express';
import dotenv from 'dotenv';
import rutaUsuario from './routes/usuarios.routes.js';
import rutaCitas from './routes/citas.routes.js';
import rutaRegistro from './routes/registro.routes.js';
import rutaMedicos from './routes/medicos.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT, () => console.log("Servidor Levantado"));

app.use('/usuarios', rutaUsuario);
app.use('/citas', rutaCitas);
app.use('/medicos', rutaMedicos);

app.use('/registro', rutaRegistro);
