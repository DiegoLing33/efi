import elyXLogger from "../core/elyXLogger";
import * as express from "express";
import * as path from "path";
const app = express();
import figlet = require("figlet");
import filewatcher = require('filewatcher');
import {buildProject} from "./build";
import * as bodyParser from "body-parser";


export function startServer(logger: elyXLogger, address: string = "127.0.0.1") {
    const server = app.listen(1580, ()=>{

        console.clear();
        console.log(elyXLogger.styles.fgYellow + figlet.textSync(`e l y . f l a t`));
        console.log(elyXLogger.styles.reset);

        logger.log(`Сервер запущен: http://${address}:1580`)
    });

    app.use(express.static(path.resolve("./build")));

    app.use("/app.config.json",(req, res)=>{
       res.sendFile(path.resolve("./build/app.config.json"));
    });

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    const watcher = filewatcher();
    watcher.add(path.resolve("./app.js"));

    watcher.on("change", (file, stat) => {
        if (stat) logger.log("[~~] Сборка APPJS...");
        buildProject(logger, () => {
        }, true);
    });
}