import "reflect-metadata"
import express, {Application} from "express";
import {createConnection} from "typeorm"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const PORT: number = 5000;
const handleStart = () => console.log(`Listening on port ${PORT}`)

createConnection()
 .then(async () => {
        console.log("db connected!!");
        const app: Application = express();

        app.use(cors());
        app.use(morgan("dev"));
        app.use(helmet());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        app.use(cookieParser());

        //route

        app.listen(PORT,handleStart);
    })
    .catch((err) => console.log(err));