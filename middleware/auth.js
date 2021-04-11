import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models';

dotenv.config();

const authMiddleware = (req, res, next) => {
    try{
        /*
        jwt.verify(req.cookie.token, process.env.JWTOKEN);
        next();
        Lo recogemos del header puesto que no tenemos frontal 
        y lo añadimos automaticamente en el postman;
        */
        jwt.verify(req.headers.token, process.env.TOKEN);
        await Usuario.findAll({ where: email})
        next();
    }catch(e) { res.sendStatus(401).send('Tienes que loguearte') }
}

export default authMiddleware;