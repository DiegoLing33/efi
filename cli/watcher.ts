import elyXLogger from "../core/elyXLogger";
import * as path from "path";
import {buildProject} from "./build";
import filewatcher = require('filewatcher');
import boxen = require("boxen");
import figlet = require("figlet");

function __welcome(logger) {
    console.clear();
    console.log(elyXLogger.styles.fgYellow + figlet.textSync(`e l y . f l a t`));
    console.log(elyXLogger.styles.reset);

    console.log();
    console.log(boxen("Ожидание изменений файла `app.js`...",
        {padding: 1, borderColor: "cyan", align: "left"}));
    console.log();
    logger.log("ely.flat.builder version: &cyn0.1a");
    logger.log("ely.flat watcher is running...");
}

export function watch(logger: elyXLogger) {

    const watcher = filewatcher();
    watcher.add(path.resolve("./app.js"));
    __welcome(logger);

    watcher.on("change", (file, stat) => {
        if (stat) logger.log("[~~] Сборка APPJS...");
        buildProject(logger, () => {
            __welcome(logger);
        }, true);
    });
}