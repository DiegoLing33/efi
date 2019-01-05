/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 +                                                                            +
 + ,--. o                   |    o                                            +
 + |   |.,---.,---.,---.    |    .,---.,---.                                  +
 + |   |||---'|   ||   |    |    ||   ||   |                                  +
 + `--' ``---'`---|`---'    `---'``   '`---|                                  +
 +            `---'                    `---'                                  +
 +                                                                            +
 + Copyright (C) 2016-2019, Yakov Panov (Yakov Ling)                          +
 + Mail: <diegoling33@gmail.com>                                              +
 +                                                                            +
 + Это программное обеспечение имеет лицензию, как это сказано в файле        +
 + COPYING, который Вы должны были получить в рамках распространения ПО.      +
 +                                                                            +
 + Использование, изменение, копирование, распространение, обмен/продажа      +
 + могут выполняться исключительно в согласии с условиями файла COPYING.      +
 +                                                                            +
 + Проект: ely.flat                                                           +
 +                                                                            +
 + Файл: ely.flat.builder.ts                                                  +
 + Файл изменен: 05.12.2018 22:42:58                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

import boxen = require("boxen");
import figlet = require("figlet");
import prompt = require("prompt");
import elyXLogger from "./core/elyXLogger";
import process = require("process");
import {buildProject} from "./cli/build";
import {watch} from "./cli/watcher";
import {cli} from "./cli/cli";
import {init} from "./cli/init";
import {startServer} from "./cli/server";

const logger = new elyXLogger({mainPrefix: "Builder"});
prompt.start();

//
//  CLI Performing
//

const cliArgs = process.argv.slice(2);
if (cliArgs.length > 0) {
    cli(logger, cliArgs);
} else {
    welcome();
}

/**
 * Функция привествия
 */
function welcome(): void {
    console.clear();
    console.log(elyXLogger.styles.fgYellow + figlet.textSync(`e l y . f l a t`));
    console.log(elyXLogger.styles.reset);
    console.log();
    logger.log("Добро пожаловать в строитель ely.flat!");
    console.log();

    console.log(boxen(
        "1 - Иницилизировать новый проект\n" +
        "2 - Выполнить полную сборку проекта\n" +
        "3 - Выполнить сборку JS\n" +
        "4 - Live reload\n" +
        "5 - Запустить автономный сервер\n" +
        "0 - Выход", {padding: 1, borderColor: "cyan", align: "left"}));
    console.log();

    menu();
}

function menu(): void {
    prompt.get([{name: "cmd", description: "Номер команды"}], (err: any, result: any) => {
        execMenuCommand(result.cmd);
    });
}

function menuBack() {
    let i = 4;
    const th = setInterval(() => {
        i--;
        logger.log(`Выход в меню через ${i} сек...`);
        if (i === 0) {
            clearInterval(th);
            welcome();
        }
    }, 1000);
}

/**
 * Выполнение меню
 * @param cmd
 */
function execMenuCommand(cmd: string): void {
    if (!(/[0-9]+/.test(cmd))) {
        welcome();
        return;
    }
    const cmdNum = parseInt(cmd, 10);
    if (cmdNum === 1) {
        init(logger, null, () => {
            menuBack();
        });
    } else if (cmdNum === 2) {
        buildProject(logger, () => {
            menuBack();
        });
    } else if (cmdNum === 3) {
        buildProject(logger, () => {
            menuBack();
        }, true);
    } else if (cmdNum === 4) {
        watch(logger);
    } else if (cmdNum === 5) {
        startServer(logger);
    }
    if (cmdNum === 0) process.exit(0);
}
