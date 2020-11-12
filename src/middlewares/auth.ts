import {Response, NextFunction} from "express"
import { decodeJWT } from "../utils/decodeJWT"

export const auth = async(
    req: any,
    res: Response, 
    next: NextFunction
    ): Promise<void> =>{
        //token이름을 x_jwt
        const token = req.cookies.x_jwt;
        const user = await decodeJWT(token);
        if(!user){
            res.json({
                isAuth: false,
                error: true,
            });
        }

        req.token = token;
        req.user = user;
        next();
        };