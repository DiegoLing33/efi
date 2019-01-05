"use strict";
exports.__esModule = true;
var elyXLogger_1 = require("../core/elyXLogger");
var express = require("express");
var path = require("path");
var app = express();
var figlet = require("figlet");
var filewatcher = require("filewatcher");
var build_1 = require("./build");
var bodyParser = require("body-parser");
function startServer(logger, address) {
    if (address === void 0) { address = "127.0.0.1"; }
    var server = app.listen(1580, function () {
        console.clear();
        console.log(elyXLogger_1["default"].styles.fgYellow + figlet.textSync("e l y . f l a t"));
        console.log(elyXLogger_1["default"].styles.reset);
        logger.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D: http://" + address + ":1580");
    });
    app.use(express.static(path.resolve("./build")));
    app.use("/app.config.json", function (req, res) {
        res.sendFile(path.resolve("./build/app.config.json"));
    });
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    var watcher = filewatcher();
    watcher.add(path.resolve("./app.js"));
    watcher.on("change", function (file, stat) {
        if (stat)
            logger.log("[~~] Сборка APPJS...");
        build_1.buildProject(logger, function () {
        }, true);
    });
}
exports.startServer = startServer;
