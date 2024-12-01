import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET= process.env.JWT_SECRET || 'myJWTSecret';

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(401).json({message: "JWT Token missing"});
    } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({message: "Could not validate JWT Token"});
            }
            req.userId = decoded.id;
            next();
        })
    }
}

export default verifyJWT;