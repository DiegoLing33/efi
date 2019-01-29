import elyXLogger from "../core/elyXLogger";
import {buildProject} from "./build";
import {watch} from "./watcher";
import * as figlet from "figlet";
import {init} from "./init";
import {startServer} from "./server";

/**
 * Выводит сообщение с помощью
 * @private
 */
function __help() {
    console.log();
    console.log("\tely.flat.builder <command>");
    console.log("\tСтроитель проектов, работающих на ely.flat.");
    console.log();
    console.log("\tКоманды:");
    console.log("\t-i --init\tСоздает начальный проект");
    console.log("\t-b --build\tВыполняет сборку проекта");
    console.log("\t-u --update\tОбновляет js файл в сборке");
    console.log("\t-l --live\tЗапускает систему ely.flat.builder watcher");
    console.log("\t-s --server\tЗапуск автономного сервера с режимом live update");
    console.log("\t-h --help\tСправка cli");
    console.log();
    console.log();
}

/**
 * CLI MODE
 *
 * @param logger
 * @param args
 */
export function cli(logger, args) {

    // Start
    console.clear();
    console.log(elyXLogger.styles.fgYellow + figlet.textSync(`e l y . f l a t . c l i`));
    console.log(elyXLogger.styles.reset);
    console.log();
    logger.log("Добро пожаловать в строитель ely.flat!");
    console.log();
    logger.log(`Аргументы получены: [${args.join(", ")}]`);

    // Logic
    switch (args[0]) {
        case "--init":
        case "-i":
            init(logger, null);
            break;
        case "--build":
        case "-b":
            buildProject(logger, null);
            break;
        case "--update":
        case "-u":
            buildProject(logger, null, true);
            break;
        case "--live":
        case "-l":
            watch(logger);
            break;
        case "--server":
        case "-s":
            startServer(logger);
            break;
        case "--help":
        case "-h":
        case "--version":
        case "-v":
            logger.log("Текущая версия: 1.0.5");
            break;
        default:
            __help();
            break;
    }
}
