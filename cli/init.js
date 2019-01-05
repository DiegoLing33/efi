"use strict";
exports.__esModule = true;
var child_process = require("child_process");
function init(logger, prompt, end) {
    logger.log("[~~] Создание проекта...");
    logger.log("[~~] Создание стартовых файлов проекта...");
    var path = require("path").resolve("./");
    var builder = __dirname.replace("/cli", "");
    child_process.exec("cp " + builder + "/start/* " + path, function () {
        logger.log("[OK] Проект успешно создан!");
        logger.log("Главный файл приложения: &cynapp.js");
        logger.log("Конфигурация приложения: &cynapp.config.json");
        if (end)
            end();
    });
}
exports.init = init;
