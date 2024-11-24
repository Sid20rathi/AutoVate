import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";



declare global {
    namespace Express {
        interface Request {
            id?: string;
        }
    }
}


interface AuthPayload extends JwtPayload {
    id: string;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: "Authorization token missing" });
        return; 
    }

    try {
        const payload = jwt.verify(token, JWT_PASSWORD) as AuthPayload;

        if (!payload.id) {
            res.status(401).json({ message: "Invalid token payload" });
            return; 
        }

        req.id = payload.id; 
        next(); 
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
        return; 
    }
};

