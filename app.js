import express from 'express';
import dotenv from 'dotenv';
import connect from './config/database/db_connection.js';
import rutaUsuario from './routes/usuarios.routes.js';
import rutaCitas from './routes/citas.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => console.log("Servidor Levantado"));

connect();

app.use('/usuarios', rutaUsuario);
app.use('/', rutaCitas);
