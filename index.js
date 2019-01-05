#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var boxen = require("boxen");
var figlet = require("figlet");
var prompt = require("prompt");
var elyXLogger_1 = require("./core/elyXLogger");
var process = require("process");
var build_1 = require("./cli/build");
var watcher_1 = require("./cli/watcher");
var cli_1 = require("./cli/cli");
var init_1 = require("./cli/init");
var server_1 = require("./cli/server");
var logger = new elyXLogger_1["default"]({ mainPrefix: "Builder" });
prompt.start();
//
//  CLI Performing
//
var cliArgs = process.argv.slice(2);
if (cliArgs.length > 0) {
    cli_1.cli(logger, cliArgs);
}
else {
    welcome();
}
/**
 * Функция привествия
 */
function welcome() {
    console.clear();
    console.log(elyXLogger_1["default"].styles.fgYellow + figlet.textSync("e l y . f l a t"));
    console.log(elyXLogger_1["default"].styles.reset);
    console.log();
    logger.log("Добро пожаловать в строитель ely.flat!");
    console.log();
    console.log(boxen("1 - Иницилизировать новый проект\n" +
        "2 - Выполнить полную сборку проекта\n" +
        "3 - Выполнить сборку JS\n" +
        "4 - Live reload\n" +
        "5 - Запустить автономный сервер\n" +
        "0 - Выход", { padding: 1, borderColor: "cyan", align: "left" }));
    console.log();
    menu();
}
function menu() {
    prompt.get([{ name: "cmd", description: "Номер команды" }], function (err, result) {
        execMenuCommand(result.cmd);
    });
}
function menuBack() {
    var i = 4;
    var th = setInterval(function () {
        i--;
        logger.log("\u0412\u044B\u0445\u043E\u0434 \u0432 \u043C\u0435\u043D\u044E \u0447\u0435\u0440\u0435\u0437 " + i + " \u0441\u0435\u043A...");
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
function execMenuCommand(cmd) {
    if (!(/[0-9]+/.test(cmd))) {
        welcome();
        return;
    }
    var cmdNum = parseInt(cmd, 10);
    if (cmdNum === 1) {
        init_1.init(logger, null, function () {
            menuBack();
        });
    }
    else if (cmdNum === 2) {
        build_1.buildProject(logger, function () {
            menuBack();
        });
    }
    else if (cmdNum === 3) {
        build_1.buildProject(logger, function () {
            menuBack();
        }, true);
    }
    else if (cmdNum === 4) {
        watcher_1.watch(logger);
    }
    else if (cmdNum === 5) {
        server_1.startServer(logger);
    }
    if (cmdNum === 0)
        process.exit(0);
}
