"use strict";
exports.__esModule = true;
var elyXLogger_1 = require("../core/elyXLogger");
var path = require("path");
var build_1 = require("./build");
var filewatcher = require("filewatcher");
var boxen = require("boxen");
var figlet = require("figlet");
function __welcome(logger) {
    console.clear();
    console.log(elyXLogger_1["default"].styles.fgYellow + figlet.textSync("e l y . f l a t"));
    console.log(elyXLogger_1["default"].styles.reset);
    console.log();
    console.log(boxen("Ожидание изменений файла `app.js`...", { padding: 1, borderColor: "cyan", align: "left" }));
    console.log();
    logger.log("ely.flat.builder version: &cyn0.1a");
    logger.log("ely.flat watcher is running...");
}
function watch(logger) {
    var watcher = filewatcher();
    watcher.add(path.resolve("./app.js"));
    __welcome(logger);
    watcher.on("change", function (file, stat) {
        if (stat)
            logger.log("[~~] Сборка APPJS...");
        build_1.buildProject(logger, function () {
            __welcome(logger);
        }, true);
    });
}
exports.watch = watch;
