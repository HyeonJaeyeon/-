import jwt from "jsonwebtoken";
import User from "../entities/User"

export const decodeJWT = async(token: string):Promise<User | undefined>=>{
    try{
        const deocoded: any = jwt.verify(token, "iAmSecretToken" || "")
        //id = decoded.id
        const {id} = deocoded;
        const user =  await User.findOne({id, token})
    }catch(err){
        return undefined;
    }
};