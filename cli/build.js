"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var child_process = require("child_process");
function __buildAPPJS(logger, cb) {
    logger.log("[~~] Построение...");
    var root = __dirname.replace("/cli", "");
    var buildPath = path.resolve("./build/js/index.js");
    var sourcePath = path.resolve("./app.js");
    // logger.log("");
    // logger.log(`Build path: ${buildPath}`);
    // logger.log(`Source path: ${sourcePath}`);
    // logger.log("");
    child_process.exec(root + "/node_modules/.bin/rollup " + sourcePath + " --file " + buildPath + " --format iife", function (a, b, c) {
        logger.log("[OK] Построение завершено!");
        if (cb)
            cb();
    });
}
function buildProject(logger, end, short) {
    var root = __dirname.replace("/cli", "");
    var build = path.resolve("./build/");
    if (short) {
        fs.mkdir(build, function (err) {
            __buildAPPJS(logger, end);
        });
    }
    else {
        child_process.exec("rm -r " + build, function () {
            logger.log("[~~] Создание директории...");
            fs.mkdir(build, function (err) {
                __buildAPPJS(logger, function () {
                    logger.log("[OK] Построение завершено!");
                    logger.log("[~~] Копирование ресурсов...");
                    child_process.exec("cp -r " + root + "/res/* " + build, function () {
                        logger.log("[OK] Ресурсы скопированы!");
                        logger.log("[~~] Копирование файла &cynapp.config");
                        child_process.exec("cp " + build + "/../app.config.json " + build, function () {
                            if (end)
                                end();
                        });
                    });
                });
            });
        });
    }
}
exports.buildProject = buildProject;
