import elyXLogger from "../core/elyXLogger";
import * as child_process from "child_process";

export function init(logger: elyXLogger, prompt, end?: () => void) {
    logger.log("[~~] Создание проекта...");
    logger.log("[~~] Создание стартовых файлов проекта...");

    const path = require("path").resolve("./");
    const builder = __dirname.replace("/cli", "");

    child_process.exec(`cp ${builder}/start/* ${path}`, ()=>{
        logger.log("[OK] Проект успешно создан!");
        logger.log("Главный файл приложения: &cynapp.js");
        logger.log("Конфигурация приложения: &cynapp.config.json");
        if(end) end();
    });
}