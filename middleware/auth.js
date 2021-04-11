import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const authMiddleware = (req, res, next) => {
    try{
        jwt.verify(req.cookie.token, process.env.JWTOKEN);
        next();
    }catch(e) { res.sendStatus(401) }
}

export default authMiddleware;