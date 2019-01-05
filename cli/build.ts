import * as fs from "fs";
import elyXLogger from "../core/elyXLogger";
import * as path from "path";
import * as child_process from "child_process";


function __buildAPPJS(logger, cb?: () => void) {
    logger.log("[~~] Построение...");

    const root = __dirname.replace("/cli", "");

    let buildPath = path.resolve("./build/js/index.js");
    let sourcePath = path.resolve("./app.js");
    // logger.log("");
    // logger.log(`Build path: ${buildPath}`);
    // logger.log(`Source path: ${sourcePath}`);
    // logger.log("");
    child_process.exec(`${root}/node_modules/.bin/rollup ${sourcePath} --file ${buildPath} --format iife`, (a, b, c) => {
        logger.log("[OK] Построение завершено!");
        if(cb) cb();
    });
}

export function buildProject(logger: elyXLogger, end?: () => void, short?: boolean) {
    const root = __dirname.replace("/cli", "");
    const build = path.resolve("./build/");

    if(short){
        fs.mkdir(build, err => {
            __buildAPPJS(logger, end);
        });
    }else {
        child_process.exec(`rm -r ${build}`, () => {
            logger.log("[~~] Создание директории...");
            fs.mkdir(build, err => {
                __buildAPPJS(logger, () => {
                    logger.log("[OK] Построение завершено!");
                    logger.log("[~~] Копирование ресурсов...");
                    child_process.exec(`cp -r ${root}/res/* ${build}`, () => {
                        logger.log("[OK] Ресурсы скопированы!");
                        logger.log("[~~] Копирование файла &cynapp.config");
                        child_process.exec(`cp ${build}/../app.config.json ${build}`, () => {
                            if (end) end();
                        });
                    });
                });
            });
        });
    }
}