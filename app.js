import express from 'express';
import dotenv from 'dotenv';
import rutaUsuario from './routes/usuarios.routes.js';
import rutaCitas from './routes/citas.routes.js';
import rutaRegistro from './routes/registro.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => console.log("Servidor Levantado"));

app.use('/usuarios', rutaUsuario);
app.use('/citas', rutaCitas);

app.use('/registro', rutaRegistro);
