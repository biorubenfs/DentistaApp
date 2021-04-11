import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models/index.js';

dotenv.config();

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        jwt.verify(token, process.env.TOKEN);
        next();
    } catch (e) { res.status(401).send('Tienes que loguearte') }
}

export default authMiddleware;