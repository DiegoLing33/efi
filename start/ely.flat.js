/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyViewCounter.ts                                                    +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Счетчик элементов
 */
class elyViewCounter {
    /**
     * Создает идентификатор для элемента
     * @param view
     */
    static createIdentifierFor(view) {
        elyViewCounter.__count++;
        return "view-" + elyViewCounter.__count;
    }
}
/**
 * Счётчик элементов
 */
elyViewCounter.__count = 0;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyObservable.ts                                                     +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Прослушиваемый протокол
 * @class elyObservable
 */
class elyObservable {
    constructor() {
        /**
         * @protected
         */
        this.observers = {};
    }
    /**
     * Добавляет наблюдатель
     * @param {String} event - событие
     * @param {Function} observer - наблюдатель
     */
    addObserver(event, observer) {
        if (!this.observers.hasOwnProperty(event))
            this.observers[event] = [];
        this.observers[event].push(observer);
        return this;
    }
    /**
     * Удаляет обработчик
     * @param event
     * @param observer
     */
    removeObserver(event, observer) {
        if (this.observers.hasOwnProperty(event)) {
            this.observers[event].splice(this.observers[event].indexOf(observer), 1);
        }
        return this;
    }
    /**
     * Удаляет все обработчики события или событий
     * @param {String} [event] - Событие
     */
    removeAllObservers(event) {
        if (event !== undefined) {
            if (this.observers.hasOwnProperty(event)) {
                this.observers[event] = [];
            }
        }
        else {
            this.observers = {};
        }
        return this;
    }
    /**
     * Сообщает о событие всех наблюдателей
     * @param {String} event
     * @param {*} args
     */
    notificate(event, args) {
        if (this.observers.hasOwnProperty(event)) {
            for (const observer of this.observers[event])
                observer.apply(this, args);
        }
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyObject.ts                                                         +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Объект
 * @class elyObject
 * @abstract
 */
class elyObject extends elyObservable {
    constructor() {
        super();
    }
    describe() {
        return Object.getOwnPropertyNames(this).filter((value, index) => {
            return !value.startsWith("__");
        });
    }
    /**
     * Проверяет объект на наличие обозреваемого свойства в стандарте EPS6.
     * @param propName
     */
    hasObservablePropertyProtocol(propName) {
        if (propName.indexOf("Property") > -1)
            propName.replace("Property", "");
        const desc = this.describe();
        if (desc.indexOf(propName + "Property") === -1)
            return false;
        return typeof this[propName] === "function";
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyOneActionEval.ts                                                  +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Выполнение синтаксиса elyOneAction
 */
class elyOneActionEval {
    constructor() {
        /**
         * Правила обработки действий
         */
        this.actionsRules = {};
    }
    /**
     * Исполняет действие
     * @param action
     */
    go(action) {
        const args = action.match(/\#([A-z0-9]+)\((.+)\)/);
        if (args && args.length > 2) {
            if (this.actionsRules.hasOwnProperty(args[1])) {
                this.actionsRules[args[1]](args[2]);
            }
        }
    }
}
/**
 * Стандартный обработчик
 */
elyOneActionEval.default = new elyOneActionEval();

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyUtils.ts                                                          +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Утилиты
 */
class elyUtils {
    /**
     * Возвращает true, если строка содержит число
     * @param str
     */
    static isNumber(str) {
        return /^(-?[0-9.]+)$/.test(str.toString());
    }
    /**
     * Возвращает первый элемент объекта
     * @param obj
     */
    static first(obj) {
        for (const index in obj) {
            if (obj.hasOwnProperty(index)) {
                return obj[index];
            }
        }
        return null;
    }
    /**
     * Возвращает массив значений
     * @param obj
     */
    static values(obj) {
        const values = [];
        elyUtils.forEach(obj, (index, value) => values.push(value));
        return values;
    }
    /**
     * Возвращает количество элементов в объекте
     * @param obj
     */
    static count(obj) {
        return Object.keys(obj).length;
    }
    /**
     * Цикл по эелментам
     * @param obj
     * @param callable
     */
    static forEach(obj, callable) {
        if (!obj)
            return null;
        let i = 0;
        for (const index in obj) {
            if (!obj.hasOwnProperty(index)) {
                continue;
            }
            const res = callable(index, obj[index], i);
            if (res === this.BREAK_FLAG) {
                return 1;
            }
            i++;
        }
        return 1;
    }
    /**
     * Выполняет поиск элемента по объекту с критерием filter
     * @param {*} obj - объект
     * @param {elyIterateClosure} filter - фильтр
     *
     * Фильтр принемает на вход 2 значения: index, value.
     * Если фильтр возвращает true, значение будет возвращено методом.
     *
     * @return {*}
     */
    static find(obj, filter) {
        let i = 0;
        for (const index in obj) {
            if (!obj.hasOwnProperty(index))
                continue;
            if (filter(index, obj[index], i))
                return { index, value: obj[index] };
            i++;
        }
        return { index: null, value: null, empty: true };
    }
    /**
     * Возвращает новый объект из фильтра
     * @param obj
     * @param filter
     */
    static filter(obj, filter) {
        if (obj instanceof Array) {
            const newArray = [];
            let i = 0;
            for (const index in obj) {
                if (obj.hasOwnProperty(index)) {
                    if (filter(index, obj[index], i))
                        newArray.push(obj[index]);
                    i++;
                }
            }
            return newArray;
        }
        else {
            const newObject = {};
            let i = 0;
            for (const index in obj) {
                if (!obj.hasOwnProperty(index))
                    continue;
                if (filter(index, obj[index], i))
                    newObject[index] = obj[index];
                i++;
            }
            return newObject;
        }
    }
    /**
     * Сортирует объект по алфавиту
     * @param obj
     */
    static sortAlphabetic(obj) {
        const ordered = {};
        Object.keys(obj).sort().forEach(function (key) {
            ordered[key] = obj[key];
        });
        return ordered;
    }
    /**
     * Подключение скрипта в шапку страницы
     * @param src
     * @param callback
     */
    static require(src, callback) {
        const script = document.createElement("script");
        script.src = src;
        script.onload = callback;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    /**
     * Удаляет выделение
     */
    static removeSelection() {
        if (window.getSelection) {
            if (window.getSelection().empty) { // Chrome
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges) { // Firefox
                window.getSelection().removeAllRanges();
            }
        }
    }
    /**
     * Возвращает разные значения
     * @param obj1
     * @param obj2
     */
    static diffObj(obj1, obj2) {
        const newItem = {};
        for (const obj1Key in obj1) {
            if (!obj1.hasOwnProperty(obj1Key))
                continue;
            if (!obj2.hasOwnProperty(obj1Key))
                newItem[obj1Key] = obj1[obj1Key];
        }
        return newItem;
    }
    /**
     * Возвращает true, если в матрице найдено значение
     * @param matrix
     * @param value
     */
    static matrixHas(matrix, value) {
        return elyUtils.indexInMatrix(matrix, value) !== null;
    }
    /**
     * Возвращает пару индексов элемента матрицы
     * @param matrix
     * @param value
     */
    static indexInMatrix(matrix, value) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] === value)
                    return [i, j];
            }
        }
        return null;
    }
    /**
     * Удаляет элемент из матрицы
     * @param matrix
     * @param value
     */
    static removeFromMatrix(matrix, value) {
        const indexes = elyUtils.indexInMatrix(matrix, value);
        if (!indexes)
            return false;
        matrix[indexes[0]].splice(indexes[1], 1);
        return true;
    }
    static cut(obj, len) {
        const keys = Object.keys(obj);
        const o = {};
        keys.sort((a, b) => {
            return a.length - b.length;
        });
        for (let i = 0; i < keys.length && i < len; i++) {
            o[keys[i]] = obj[keys[i]];
        }
        return o;
    }
    static applySrc(source, key, o, prefix = "", checker) {
        checker = checker || ((val) => val);
        if (typeof key === "string") {
            o[prefix + key] = checker(source[key]);
        }
        else {
            key.forEach((value) => {
                o[prefix + value] = checker(source[value]);
            });
        }
    }
    /**
     * Simple object check.
     * @param item
     * @returns {boolean}
     */
    static isObject(item) {
        return (item && typeof item === "object" && !Array.isArray(item));
    }
    /**
     * Deep merge two objects.
     * @param target
     * @param sources
     */
    static mergeDeep(target, ...sources) {
        if (!sources.length)
            return target;
        const source = sources.shift();
        if (elyUtils.isObject(target) && elyUtils.isObject(source)) {
            for (const key in source) {
                if (!source.hasOwnProperty(key))
                    continue;
                if (elyUtils.isObject(source[key])) {
                    if (!target[key])
                        Object.assign(target, { [key]: {} });
                    elyUtils.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return elyUtils.mergeDeep(target, ...sources);
    }
}
elyUtils.BREAK_FLAG = "ely_for_loop_break_312441edq2jhd78q2df67q";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyGuard.ts                                                          +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Безопасность значений
 */
class elyGuard {
    /**
     * Функция
     * @param func
     * @param args
     * @param callback
     * @param context
     */
    static func(func, args, callback, context) {
        const result = func.apply(context, args);
        if (result !== undefined && result !== null)
            callback(result);
    }
    /**
     * Значение
     * @param variable
     * @param callback
     */
    static variable(variable, callback) {
        if (variable !== undefined && variable !== null)
            callback(variable);
    }
    /**
     * Возвращает true, если obj undefined или null.
     * @param {*} obj
     * @return {boolean}
     */
    static isNone(obj) {
        return obj === undefined || obj === null;
    }
    /**
     * Возвращает true, если obj не undefined
     * @param {*} obj
     * @return {boolean}
     */
    static isSet(obj) {
        return obj !== undefined;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyObservableProperty.ts                                             +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Обрабатываемое значение
 * @class elyObservableProperty
 * @template T
 * @augments elyObservable
 */
class elyObservableProperty extends elyObservable {
    /**
     * Конструктор
     * @param {T|null} defaultValue
     */
    constructor(defaultValue = null) {
        super();
        /**
         * Флаг защиты от перезаписи
         * @ignore
         * @protected
         * @type {boolean}
         */
        this.isOverwriteProtected = false;
        /**
         * @protected
         * @type {T}
         */
        this.value = defaultValue || null;
    }
    /**
     * Простое автоматизированное свойство
     * @param context
     * @param value
     * @param prop
     */
    static simplePropertyAccess(context, value, prop) {
        if (!elyGuard.isSet(value))
            return prop.get(null);
        prop.set(value);
        return context;
    }
    /**
     * Возвращает значение или guard если значение null.
     *
     * Данный метод никогда не возвращает значение null. В случае, если значение
     * прослушиваемого параметра null или undefined, возвращает `guard` значение.
     *
     * @param {T} [guard]
     * @return {T}
     *
     *
     *     // Создаем прослушиваемый параметр
     *     let prop = new elyObservableProperty<string>();
     *
     *     // Отображаем в консоль "защищенное" значение (с флагом guard)
     *     console.log( prop.get( "test" ) ); // test
     *
     *
     */
    get(guard) {
        if (this.isNull() && guard !== null)
            return guard;
        else if (this.isNull())
            return null;
        return this.value;
    }
    /**
     * Устанавливает флаг защиты от перезаписи.
     *
     * @param {boolean} flag
     * @return {this}
     *
     *
     *     // Создаем прослушиваемый параметр
     *     let prop = new elyObservableProperty<string>();
     *     prop.set( "Tom" );
     *
     *     // Запрещаем перезапись
     *     prop.overwrite(false);
     *
     *     prop.set( "John" );
     *
     *     // Отображаем в консоль "защищенное" значение (с флагом guard)
     *     console.log( prop.get() ); // Tom
     *
     *
     */
    overwrite(flag) {
        this.isOverwriteProtected = flag;
        return this;
    }
    /**
     * Устанавливает значение и вызывает оповещение `change`, прослушиваемое
     * методом {@link elyObservableProperty.change}.
     *
     * @param {T} value
     * @return {this}
     *
     *
     *     // Создаем прослушиваемый параметр
     *     let prop = new elyObservableProperty<string>();
     *     prop.set( "Tom" );
     *
     *     // Отображаем в консоль "защищенное" значение (с флагом guard)
     *     console.log( prop.get() ); // Tom
     *
     *
     */
    set(value) {
        if (this.isOverwriteProtected)
            return this;
        const old = this.value;
        /**
         * @type {T}
         * @protected
         */
        this.value = value;
        this.notificate("change", [old, value]);
        return this;
    }
    /**
     * Возвращает true, если объект null или undefined.
     * @return {boolean}
     */
    isNull() {
        return elyGuard.isNone(this.value);
    }
    /**
     * Добавляет наблюдатель за изменением значения
     * @param {{function(value:T, oldValue:T?)}} observer - наблюдатель
     *
     *
     *
     *     // Создание свойства
     *     let observableString = new elyObservableProperty<string>();
     *
     *     observableString.change( value => {
     *          console.log("Set to: " + value);
     *     });
     *
     *     observableString.set("123");
     *     observableString.set("abc");
     *
     *     // Вывод:
     *     // Set to: 123
     *     // Set to: abc
     *
     *
     *
     */
    change(observer) {
        this.addObserver("change", (old, nw) => {
            observer(nw, old);
        });
        return this;
    }
    /**
     * Преобразует объект в строку
     * @return {string}
     */
    toString() {
        return this.get() + "";
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyView.ts                                                           +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Объект отображения
 * @class elyView
 * @abstract
 */
class elyView extends elyObject {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super();
        /**
         * Родитель элемента
         */
        this.superview = null;
        /**
         * Идентификатор
         */
        this.__id = null;
        /**
         * Строка действия
         */
        this.__actionString = "";
        if (options.selector)
            this.__view = document.querySelector(options.selector);
        else if (options.element)
            this.__view = options.element;
        else
            this.__view = document.createElement(options.tag || "div");
        if (options.action)
            this.actionString(options.action);
        if (options.class)
            this.addClass(...options.class.split(" "));
        this.__view.onclick = (ev) => {
            this.notificate("click", [ev]);
        };
        if (options.style)
            this.css(options.style);
        this.addObserver("click", () => {
            if (this.__actionString !== "")
                elyOneActionEval.default.go(this.__actionString);
        });
        this.hiddenProperty = new elyObservableProperty(false);
        this.hiddenProperty.change(value => this.__view.hidden = value);
        this.hidden(options.hidden || false);
        if (options.opacity)
            this.opacity(options.opacity);
        if (options.disabled)
            this.disabled(options.disabled);
        const wait = setInterval(() => {
            if (this.getRect().width) {
                clearInterval(wait);
                this.notificate("viewWillDraw", [this]);
            }
        }, 10);
    }
    /**
     * Возвращает HTML элемент
     */
    getDocument() {
        return this.__view;
    }
    /**
     * Возвращает внутренний идентификатор элемента
     */
    identifier() {
        if (!this.__id) {
            this.__id = elyViewCounter.createIdentifierFor(this);
            this.attribute("id", this.__id);
        }
        return this.__id;
    }
    /**
     * Устанавливает или возвращает действие
     * @param action
     */
    actionString(action) {
        if (action === undefined)
            return this.__actionString;
        this.__actionString = action;
        return this;
    }
    /**
     * Устанавливает или возвращает атрибут.
     *
     * Для удаления атрибута, установите значение value как null.
     *
     * @param name
     * @param value
     */
    attribute(name, value) {
        if (value === null) {
            this.getDocument().removeAttribute(name);
            return this;
        }
        if (value === undefined) {
            return this.getDocument().getAttribute(name);
        }
        this.getDocument().setAttribute(name, value);
        return this;
    }
    /**
     * Добавляет класс
     * @param className - имя класса стилей или кортеж имен
     *
     *
     *     let obj = new elyControl();
     *     obj.addClass("animate");
     *     obj.addClass("go");
     *
     *     // Или
     *
     *     obj.addClass("animate", "go");
     *
     *
     */
    addClass(...className) {
        this.getDocument().classList.add(...className);
        return this;
    }
    /**
     * Возвращает true, если содержит класс
     * @param className - имя класса стилей
     */
    hasClass(className) {
        return this.getDocument().classList.contains(className);
    }
    /**
     * Удаляет класс
     * @param className - имя класса стилей
     */
    removeClass(className) {
        this.getDocument().classList.remove(className);
        return this;
    }
    /**
     * Возвращает и устанавливает скрытие элемента
     */
    hidden(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.hiddenProperty);
    }
    /**
     * Устанавливает css значение
     * @param style
     */
    css(style) {
        elyUtils.forEach(style, (k, v) => {
            const pattern = /([+-]=)?(.+)(px|%|rem)/;
            const res = pattern.exec(v.toString());
            if (res && res[1]) {
                if (res[1] === "+=") {
                    v = parseFloat(/(.+)(px|%)/.exec(this.getDocument().style[k] || "0")[1])
                        + parseFloat(res[2]) + res[3];
                }
                else if (res[1] === "-=") {
                    v = parseFloat(/(.+)(px|%)/.exec(this.getDocument().style[k] || "0")[1])
                        - parseFloat(res[2]) + res[3];
                }
            }
            this.getDocument().style[k] = v;
        });
        return this;
    }
    /**
     * Возвращает параметр стиля или все стили элемента,
     * если значение  name не установлено.
     * @param name
     */
    getStyle(name) {
        if (name === undefined)
            return this.getDocument().style;
        return this.getStyle()[name];
    }
    /**
     * Возвращает данные положения и размера объекта
     */
    getRect() {
        return this.getDocument().getBoundingClientRect();
    }
    /**
     * Устанавливает или возвращает высоту
     * @param value
     */
    height(value) {
        if (value === undefined) {
            return this.getDocument().getBoundingClientRect().height;
        }
        if (typeof value === "number")
            value = `${value}px`;
        this.css({ height: value });
        return this;
    }
    /**
     * Устанавливает или возвращает ширину
     * @param value
     */
    width(value) {
        if (value === undefined) {
            return this.getDocument().getBoundingClientRect().width;
        }
        if (typeof value === "number")
            value = `${value}px`;
        this.css({ width: value });
        return this;
    }
    /**
     * Устанавливает или возвращает прозрачность
     * @param value
     */
    opacity(value) {
        if (value === undefined)
            return parseFloat(this.getStyle("opacity") || "1");
        return this.css({ opacity: value.toString() });
    }
    /**
     * Устанавливает фокус на объект
     */
    makeFirstResponder() {
        this.getDocument().focus();
        return this;
    }
    /**
     * Размывает объект
     */
    blur() {
        this.getDocument().blur();
        return this;
    }
    /**
     * Запускает анимацию css
     * @param animationName
     * @param completion
     */
    animateCss(animationName, completion) {
        const animationEnd = ((el) => {
            const animations = {
                MozAnimation: "mozAnimationEnd",
                OAnimation: "oAnimationEnd",
                WebkitAnimation: "webkitAnimationEnd",
                animation: "animationend",
            };
            for (const t in animations) {
                if (el.style[t] !== undefined) {
                    // @ts-ignore
                    return animations[t];
                }
            }
        })(document.createElement("div"));
        this.addClass("animated", animationName);
        const animationCallback = () => {
            this.removeClass("animated");
            this.removeClass(animationName);
            // this is the main part of the fix
            this.getDocument().removeEventListener(animationEnd, animationCallback);
            if (completion)
                completion();
            this.notificate("animate-css-" + animationName);
        }; // End fix
        this.getDocument().addEventListener(animationEnd, animationCallback);
        return this;
    }
    /**
     * Анимация повяления
     * @param completion - обработчик завершения анимации
     */
    fadeIn(completion) {
        this.hidden(false);
        this.animateCss("fadeIn", () => {
            if (completion)
                completion();
            this.notificate("fadedIn", [this]);
        });
        return this;
    }
    /**
     * Анимация исчезания
     * @param completion - обработчик завершения анимации
     */
    fadeOut(completion) {
        this.animateCss("fadeOut", () => {
            this.hidden(true);
            if (completion)
                completion();
            this.notificate("fadedOut", [this]);
        });
        return this;
    }
    /**
     * Возвращает абсолютные размеры (без отступов)
     * @return {{width: number, height: number}}
     *
     * @deprecated
     */
    offSize() {
        return { width: this.getDocument().offsetWidth, height: this.getDocument().offsetHeight };
    }
    /**
     * Удаляет содержимое view
     */
    removeViewContent() {
        this.getDocument().innerHTML = "";
        return this;
    }
    /**
     * Удаляет все применененные стили
     */
    removeStyles() {
        return this.attribute("style", null);
    }
    /**
     * Удаляет все аттрибуты элемента
     */
    removeAttributes() {
        for (const attr in this.getDocument().attributes) {
            if (this.getDocument().getAttribute(attr))
                this.getDocument().removeAttribute(attr);
        }
        return this;
    }
    /**
     * Полностью очищает элемент view
     *
     * - {@link elyView.removeViewContent}
     * - {@link elyView.removeStyles}
     * - {@link elyView.removeAttributes}
     */
    clearView() {
        this.removeViewContent();
        this.removeStyles();
        this.removeAttributes();
        return this;
    }
    /**
     * Утанавливает подсказку
     * @param {String} hint - подсказка
     * @return {elyView}
     */
    hint(hint) {
        const selector = this.getDocument().querySelector(".ef-hint");
        if (typeof hint === "string") {
            if (selector) {
                selector.innerHTML = hint;
            }
            else {
                const hintView = document.createElement("div");
                hintView.classList.add("ef-hint");
                hintView.innerText = hint;
                this.getDocument().appendChild(hintView);
            }
            return this;
        }
        else {
            if (selector)
                return selector.innerHTML;
            return "";
        }
    }
    /**
     * Устанавливает или возвращает доступность элемента
     * @param bool
     */
    disabled(bool) {
        if (bool === undefined)
            return (this.attribute("disabled") || null) === "disabled";
        return this.attribute("disabled", bool ? "disabled" : null);
    }
    /**
     * Удаляет элемент
     */
    removeFromSuperview() {
        if (this.getDocument().parentNode !== null) {
            this.getDocument().parentNode.removeChild(this.getDocument());
        }
        return this;
    }
    /**
     * Добавляет слушатель изменения
     * @param closure
     */
    resize(closure) {
        const bd = window.document.body;
        window.addEventListener("resize", () => {
            closure(this, bd.clientWidth, bd.clientHeight);
        });
        closure(this, bd.clientWidth, bd.clientHeight);
        return this;
    }
    elyViewWillDraw(o) {
        this.addObserver("viewWillDraw", o);
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyDesignable.ts                                                     +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const elyDesignableAutoFieldsData = {};
/**
 * Состояния авто полян
 */
var elyDesignableFieldState;
(function (elyDesignableFieldState) {
    elyDesignableFieldState[elyDesignableFieldState["VIEW"] = 4] = "VIEW";
    elyDesignableFieldState[elyDesignableFieldState["GETSET"] = 3] = "GETSET";
    elyDesignableFieldState[elyDesignableFieldState["GET"] = 1] = "GET";
    elyDesignableFieldState[elyDesignableFieldState["SET"] = 2] = "SET";
    elyDesignableFieldState[elyDesignableFieldState["DENY"] = 0] = "DENY";
})(elyDesignableFieldState || (elyDesignableFieldState = {}));
function createAutoFieldBase(target) {
    if (!elyDesignableAutoFieldsData.hasOwnProperty(target.name))
        elyDesignableAutoFieldsData[target.name] = {
            fields: {},
        };
}
/**
 * Декоратор автоматического поля для UI Builder
 * @param name
 * @param state
 * @param type
 * @param values
 */
function designable(name, state, type = "string", values = null) {
    return (target) => {
        if (state === elyDesignableFieldState.DENY) {
            if (elyDesignableAutoFieldsData[target.name]) {
                delete elyDesignableAutoFieldsData[target.name].fields[name];
            }
        }
        createAutoFieldBase(target);
        const superName = Object.getPrototypeOf(target).name;
        if (superName && elyDesignableAutoFieldsData[superName])
            elyUtils.forEach(elyDesignableAutoFieldsData[superName].fields, (index, value) => elyDesignableAutoFieldsData[target.name].fields[index] = value);
        elyDesignableAutoFieldsData[target.name].fields[name] = {
            name,
            state,
            type,
            values,
        };
    };
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyControl.ts                                                        +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var elyControl_1;
/**
 * Основная единица графического элемента
 * @class elyControl
 * @augments elyView
 */
let elyControl = elyControl_1 = class elyControl extends elyView {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(options);
        this.__subviews = [];
        if (options.subviews)
            this.addSubView(...options.subviews);
    }
    /**
     * Создает elyControl или объект elyControlObjectProtocol
     * @param obj
     */
    static fromObject(obj) {
        if (obj.line)
            return elyControl_1.line();
        const item = obj.item;
        if (item && window.elyflatobjects.hasOwnProperty(item)) {
            const opts = elyUtils.filter(obj, (k) => {
                return ["item"].indexOf(k) === -1;
            });
            const inst = new window.elyflatobjects[item](opts);
            for (const afvName in elyDesignableAutoFieldsData[item].fields) {
                if (!elyDesignableAutoFieldsData[item].fields.hasOwnProperty(afvName))
                    continue;
                if (elyDesignableAutoFieldsData[item].fields[afvName].state === elyDesignableFieldState.VIEW
                    && opts.hasOwnProperty(afvName)) {
                    for (const afvv of opts[afvName]) {
                        inst[afvName].addSubView(elyControl_1.fromObject(afvv));
                    }
                }
            }
            if (inst instanceof elyView || typeof inst.getView === "function")
                return inst;
        }
        return elyControl_1.empty();
    }
    /**
     * Создает elyControl или объект elyControlObjectProtocol из JSON строки
     * @param json
     */
    static fromJSON(json) {
        return elyControl_1.fromObject(JSON.parse(json));
    }
    /**
     * Выполняет попытку мутировать obj в объект elyView.
     * Иначе возвращает пустой элемент.
     *
     *
     *     let obj = "Тест";
     *     let view = elyControl.tryMutateToView(obj);
     *
     *     typeOf view; // elyTextView
     *     view.text(); // "Тест"
     *
     *
     *
     * @param obj
     */
    static tryMutateToView(obj) {
        try {
            if (obj instanceof elyView)
                return obj;
            return String(obj).textView();
        }
        catch (e) {
            return elyControl_1.empty();
        }
    }
    /**
     * Возвращает дочерние элементы
     */
    getSubViews() {
        return this.__subviews;
    }
    /**
     * Добавляет элемент в элемент
     * @param views
     */
    addSubView(...views) {
        views.forEach((view) => {
            if (view instanceof elyView) {
                this.__subviews.push(view);
                view.superview = this;
                this.notificate("addview", [view]);
                this.getDocument().appendChild(view.getDocument());
            }
            else {
                window.console.error(view);
                throw new Error("В объект elyControl может быть добавлен только элемент " +
                    "реализующий протокол elyContentProtocol!");
            }
        });
        return this;
    }
    /**
     * Удаляет дочений элемент
     * @param view
     */
    removeSubView(view) {
        const index = this.__subviews.indexOf(view);
        if (index > -1) {
            const sub = this.__subviews[index];
            this.getDocument().removeChild(sub.getDocument());
            this.__subviews.splice(this.__subviews.indexOf(view), 1);
        }
        return this;
    }
    /**
     * Полностью очищает графический элемент
     */
    clearView() {
        this.__subviews.splice(0, this.__subviews.length);
        this.__view.innerHTML = "";
        return this;
    }
    removeViewContent() {
        this.__subviews.splice(0, this.__subviews.length);
        return super.removeViewContent();
    }
};
/**
 * Горизонтальная линяя
 */
elyControl.line = () => new elyControl_1({ tag: "hr" });
/**
 * Пустой объект elyControl
 */
elyControl.empty = () => new elyControl_1();
elyControl = elyControl_1 = __decorate([
    designable("actionString", elyDesignableFieldState.GETSET, "string"),
    designable("hidden", elyDesignableFieldState.GETSET, "boolean"),
    designable("opacity", elyDesignableFieldState.GETSET, "number")
], elyControl);
var elyControl$1 = elyControl;

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
 + Файл: elyEnum.ts                                                           +
 + Файл изменен: 06.01.2019 04:55:09                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Перечисление
 * @class elyEnum
 * @template T
 * @abstract
 */
class elyEnum {
    /**
     * Конструктор
     * @param {T} value
     */
    constructor(value) {
        this.value = value;
    }
    /**
     * Преобразование в строку
     * @return {string}
     */
    toString() {
        return String(this.value);
    }
    /**
     * Возвращает true, если объекты одинаковые
     * @param {elyEnum} obj
     * @return {boolean}
     */
    equals(obj) {
        return this.value === obj.value;
    }
}

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
 + Файл: elyFieldType.ts                                                      +
 + Файл изменен: 05.12.2018 23:47:11                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Типы ввода данных
 * @class elyFieldType
 * @augments {elyEnum<string>}
 */
class elyFieldType extends elyEnum {
    /**
     * Конструктор
     * @ignore
     * @param val
     */
    constructor(val) {
        super(val);
    }
    /**
     * Тип по имени
     * @param value
     */
    static byName(value) {
        if (typeof value === "number")
            value = value.toString() + "px";
        return new elyFieldType(value);
    }
    /**
     * Список
     */
    static rawList() {
        return {
            mail: elyFieldType.mail.value,
            number: elyFieldType.number.value,
            password: elyFieldType.password.value,
            text: elyFieldType.text.value,
        };
    }
}
/**
 * Текст
 */
elyFieldType.text = new elyFieldType("text");
/**
 * Пароль
 */
elyFieldType.password = new elyFieldType("password");
/**
 * Число
 */
elyFieldType.number = new elyFieldType("number");
/**
 * Почта
 */
elyFieldType.mail = new elyFieldType("mail");

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
 + Файл: elyTimer.ts                                                          +
 + Файл изменен: 08.01.2019 01:11:46                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Таймер
 * @class {elyTimer}
 */
class elyTimer extends elyObservable {
    /**
     * Конструктор
     * @param props
     */
    constructor(props) {
        super();
        /**
         * Циклический таймер
         * @type {boolean}
         * @protected
         */
        this.__loop = false;
        /**
         * @protected
         */
        this.__duration = props.duration;
        /**
         * @protected
         */
        this.__loop = props.loop || false;
    }
    /**
     * Добавляет наблюдатель: окончание таймера
     *
     * Если таймер циклический, данный метод будет вызван каждый цикл
     *
     * Имя обсервера: addEndObserver
     *
     * @param o - наблюдатель
     */
    addEndObserver(o) {
        this.addObserver("endTimer", o);
        return this;
    }
    /**
     * Добавляет наблюдатель: запускт таймера
     *
     * Имя обсервера: startTimer
     *
     * @param o - наблюдатель
     */
    addStartObserver(o) {
        this.addObserver("startTimer", o);
        return this;
    }
    /**
     * Запускает таймер
     */
    start() {
        if (this.__thread !== null)
            return;
        this.notificate("startTimer");
        if (this.__loop)
            this.__thread = setInterval(() => {
                this.stop(true);
            }, this.__duration);
        else {
            this.__thread = setTimeout(() => {
                this.stop(true);
            }, this.__duration);
        }
    }
    /**
     * Перезапускает таймер
     */
    restart() {
        this.stop(false);
        this.start();
    }
    /**
     * Останавливает таймер
     * @param {boolean} [notificate = true] - если установлено значение true,
     * после выполнения метода, будет вызвано событие `endTimer` {@link elyTimer.addEndObserver}
     */
    stop(notificate = true) {
        if (this.__loop)
            clearInterval(this.__thread);
        else
            clearTimeout(this.__thread);
        if (notificate)
            this.notificate("endTimer");
        this.__thread = null;
    }
}

/*
 *
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *   ,--. o                   |    o
 *   |   |.,---.,---.,---.    |    .,---.,---.
 *   |   |||---'|   ||   |    |    ||   ||   |
 *   `--' ``---'`---|`---'    `---'``   '`---|
 *              `---'                    `---'
 *
 * Copyright (C) 2016-2019, Yakov Panov (Yakov Ling)
 * Mail: <diegoling33@gmail.com>
 *
 * Это программное обеспечение имеет лицензию, как это сказано в файле
 * COPYING, который Вы должны были получить в рамках распространения ПО.
 *
 * Использование, изменение, копирование, распространение, обмен/продажа
 * могут выполняться исключительно в согласии с условиями файла COPYING.
 *
 * Файл: elyObservableBoolean.ts
 * Файл создан: 28.11.2018 01:03:35
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 */
/**
 * Прослушиваемый булевый тип
 */
class elyObservableBoolean extends elyObservableProperty {
    /**
     * Конструктор
     * @param defaultValue
     */
    constructor(defaultValue = false) {
        super(defaultValue);
    }
    /**
     * Переключает значение
     */
    toggle() {
        this.set(!this.value);
        return this;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyCookie.ts                                                         +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Печеньки
 */
class elyCookie {
    /**
     * Возвращает данные cookie
     * @param name
     */
    static get(name) {
        const matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        const val = matches ? decodeURIComponent(matches[1]) : null;
        if (val && (val === "undefined" || val === "null"))
            return null;
        return val;
    }
    /**
     * Устанавливает cookie
     * @param name
     * @param value
     * @param options
     */
    static set(name, value, options) {
        options = options || {};
        let expires = options.expires;
        if (typeof expires === "number" && expires) {
            const d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        let updatedCookie = name + "=" + value;
        for (const propName in options) {
            if (!options.hasOwnProperty(propName))
                continue;
            updatedCookie += "; " + propName;
            const propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyMath.ts                                                           +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Библиотека математики
 */
class elyMath {
    /**
     * Преобразовывает значение переменной X из одного диапазона в другой.
     *
     * @param x
     * @param inMin
     * @param inMax
     * @param outMin
     * @param outMax
     */
    static map(x, inMin, inMax, outMin, outMax) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
}

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
 + Файл: elyColorUtils.ts                                                     +
 + Файл изменен: 06.01.2019 05:32:41                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Утилиты для работы с цветом
 */
class elyColorUtils {
    /**
     * Преобразует HSV цвет в RGB
     * @param color
     */
    static hsv2rgb(color) {
        let red = 0;
        let green = 0;
        let blue = 0;
        const i = Math.floor(color.hue * 6);
        const f = color.hue * 6 - i;
        const p = color.value * (1 - color.saturation);
        const q = color.value * (1 - f * color.saturation);
        const t = color.value * (1 - (1 - f) * color.saturation);
        switch (i % 6) {
            case 0:
                red = color.value;
                green = t;
                blue = p;
                break;
            case 1:
                red = q;
                green = color.value;
                blue = p;
                break;
            case 2:
                red = p;
                green = color.value;
                blue = t;
                break;
            case 3:
                red = p;
                green = q;
                blue = color.value;
                break;
            case 4:
                red = t;
                green = p;
                blue = color.value;
                break;
            case 5:
                red = color.value;
                green = p;
                blue = q;
                break;
        }
        return { red, green, blue };
    }
    /**
     * Преобразует RGB цвет в HSV
     * @param color
     */
    static rgb2hsv(color) {
        const max = Math.max(color.red, color.green, color.blue);
        const min = Math.min(color.red, color.green, color.blue);
        const d = max - min;
        let hue = 0;
        const saturation = (max === 0 ? 0 : d / max);
        const value = max / 255;
        switch (max) {
            case min:
                hue = 0;
                break;
            case color.red:
                hue = (color.green - color.blue) + d * (color.green < color.blue ? 6 : 0);
                hue /= 6 * d;
                break;
            case color.green:
                hue = (color.blue - color.red) + d * 2;
                hue /= 6 * d;
                break;
            case color.blue:
                hue = (color.red - color.green) + d * 4;
                hue /= 6 * d;
                break;
        }
        return { hue, saturation, value };
    }
    /**
     * Преобразует HSV в __hex
     * @param color
     */
    static hsv2hex(color) {
        return elyColorUtils.rgb2hex(elyColorUtils.hsv2rgb(color));
    }
    /**
     * Преобразует HEX в RGB
     * @param hex
     */
    static hex2rgb(hex) {
        if (hex.length === 3) {
            hex = hex.replace(/./g, "$&$&");
        }
        return {
            blue: parseInt(hex[4] + hex[5], 16),
            green: parseInt(hex[2] + hex[3], 16),
            red: parseInt(hex[0] + hex[1], 16),
        };
    }
    /**
     * Преобразует __hex цвет в hsv
     * @param hex
     */
    static hex2hsv(hex) {
        return elyColorUtils.rgb2hsv(elyColorUtils.hex2rgb(hex));
    }
    /**
     * Преобразует RGB в HEX
     * @param color
     */
    static rgb2hex(color) {
        const rgbToHex = (rgb) => {
            let hex = Number(rgb).toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        };
        return (rgbToHex(color.red) + rgbToHex(color.green) + rgbToHex(color.blue)).toUpperCase();
    }
}
/**
 * Код белого цвета
 */
elyColorUtils.whiteNumber = 16777215;
/**
 * Код черного цвета
 */
elyColorUtils.blackNumber = 0;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyColor.ts                                                          +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Цвет
 * @class elyColor
 */
class elyColor {
    /**
     * Конструктор
     * @param {{ __hex?: string, rgb?: elyColorRGB, hsv?: elyColorHSV }} props - параметры
     */
    constructor(props = {}) {
        /**
         * 16 код цвета
         * @protected
         * @type {string}
         */
        this.__hex = "000000";
        if (props.hex)
            this.__hex = props.hex.startsWith("#") ? props.hex.substr(1) : props.hex;
        else if (props.rgb)
            this.__hex = elyColorUtils.rgb2hex(props.rgb);
        else if (props.hsv)
            this.__hex = elyColorUtils.hsv2hex(props.hsv);
        else
            this.__hex = elyColor.black().getHexString().substr(1);
    }
    /**
     * Возвращает черный цвет
     * @return {elyColor}
     */
    static black() {
        return new elyColor({ hex: "#000000" });
    }
    /**
     * Возвращает белый цвет
     * @return {elyColor}
     */
    static white() {
        return new elyColor({ hex: "#ffffff" });
    }
    /**
     * Возвращает красный цвет
     * @return {elyColor}
     */
    static red() {
        return new elyColor({ hex: "#ff0000" });
    }
    /**
     * Возвращает зеленый цвет
     * @return {elyColor}
     */
    static green() {
        return new elyColor({ hex: "#00ff00" });
    }
    /**
     * Возвращает синий цвет
     * @return {elyColor}
     */
    static blue() {
        return new elyColor({ hex: "#0000ff" });
    }
    /**
     * Возвращает число цвета
     * @return {number}
     */
    getByte() {
        return parseInt(this.__hex, 16);
    }
    /**
     * Возвращает true, если цвет темный
     * @return {boolean}
     */
    isDarker() {
        return this.getByte() < (elyColorUtils.whiteNumber / 1.8);
    }
    /**
     * Возвращает байты цветов
     * @return {elyColorRGB}
     */
    getRGBBytes() {
        return {
            blue: parseInt(this.__hex.substr(4, 2), 16),
            green: parseInt(this.__hex.substr(2, 2), 16),
            red: parseInt(this.__hex.substr(0, 2), 16),
        };
    }
    /**
     * Устанавливает RGB цвета
     *
     * @param {{elyColorRGB}} props
     */
    setRGBBytes(props) {
        if (props.rgb.red > 255)
            props.rgb.red = 255;
        if (props.rgb.green > 255)
            props.rgb.green = 255;
        if (props.rgb.blue > 255)
            props.rgb.blue = 255;
        if (props.rgb.red < 0)
            props.rgb.red = 0;
        if (props.rgb.green < 0)
            props.rgb.green = 0;
        if (props.rgb.blue < 0)
            props.rgb.blue = 0;
        this.__hex = props.rgb.red.toString(16) +
            props.rgb.green.toString(16) +
            props.rgb.blue.toString(16);
    }
    /**
     * Возвращает цвет светлее
     * @param {number} percentage
     * @return {elyColor}
     */
    getLighterColor(percentage) {
        const rgb = this.getRGBBytes();
        percentage = 1 - percentage;
        const val = Math.round(255 - (255 * percentage));
        rgb.red = Math.round(elyMath.map(val, 0, 255, rgb.red, 255));
        rgb.green = Math.round(elyMath.map(val, 0, 255, rgb.green, 255));
        rgb.blue = Math.round(elyMath.map(val, 0, 255, rgb.blue, 255));
        return new elyColor({ hex: "#" + elyColorUtils.rgb2hex(rgb) });
    }
    /**
     * Возвращает цвет тмнее
     * @param {number} percentage
     * @return {elyColor}
     */
    getDarkerColor(percentage) {
        const rgb = this.getRGBBytes();
        percentage = 1 - percentage;
        const val = Math.round(255 - (255 * percentage));
        rgb.red = Math.round(elyMath.map(val, 0, 255, rgb.red, 0));
        rgb.green = Math.round(elyMath.map(val, 0, 255, rgb.green, 0));
        rgb.blue = Math.round(elyMath.map(val, 0, 255, rgb.blue, 0));
        return new elyColor({ hex: "#" + elyColorUtils.rgb2hex(rgb) });
    }
    /**
     * Возвращает HEX с символом # в начале
     * @return {string}
     */
    getHexString() {
        return `#${this.__hex}`;
    }
    /**
     * Возвращает HEX с символом # в начале
     * @return {string}
     */
    toString() {
        return this.getHexString();
    }
}

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
 + Файл: elyFieldView.ts                                                      +
 + Файл изменен: 08.01.2019 02:43:40                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Поле ввоода
 * @class elyFieldView
 * @template T
 * @augments {efEditableProtocol}
 * @augments {efValueProtocol<T>}
 * @augments {efErrorDisplayProtocol}
 * @augments {efValidatableProtocol}
 */
class elyFieldView extends elyView {
    /**
     * Конструктор
     * @param props
     */
    constructor(props) {
        super(props);
        /**
         * Свойство: значение поля ввода
         * @type {elyObservableProperty<T>}
         */
        this.valueProperty = new elyObservableProperty();
        /**
         * Свойство: флаг возможности редактирования
         * @type {elyObservableBoolean}
         */
        this.editableProperty = new elyObservableBoolean(true);
        /**
         * Таймер
         * @protected
         * @type {elyTimer}
         */
        this.__errorDisplayTimer = new elyTimer({ duration: 1500 });
        this.addClass("ef-field");
        this.__errorDisplayTimer.addEndObserver(() => {
            this.removeClass("error");
        });
        this.__errorDisplayTimer.addStartObserver(() => {
            this.addClass("error");
        });
        this.accessoryView = props.accessory;
        this.getDocument().append(this.accessoryView.getDocument());
        if (props.hint)
            this.hint(props.hint);
    }
    /**
     * Возвращает и устанавливает значение поля ввода
     * @param {T|null} [value] - значение
     * @returns {T|this|null}
     */
    value(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.valueProperty);
    }
    /**
     * Очищает значение
     * @return {this}
     */
    clearValue() {
        this.value(null);
        return this;
    }
    /**
     * Возвращает и устанавливает флаг возможности редактирования
     * @param {boolean} [value] - значение
     * @returns {boolean|this}
     */
    editable(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.editableProperty);
    }
    /**
     * Возвращает true, если данные валидны
     * @return {boolean}
     */
    isValid() {
        if (this.__isValidDelegate)
            return this.__isValidDelegate(this.value());
        return true;
    }
    /**
     * Возвращает true, если данные пусты
     * @return {boolean}
     */
    isEmpty() {
        return this.valueProperty.isNull();
    }
    /**
     * Помечает объект как неисправный
     * @param {boolean} flag
     * @return {this}
     */
    error(flag) {
        if (flag)
            this.__errorDisplayTimer.restart();
        else
            this.__errorDisplayTimer.stop();
        return this;
    }
    /**
     * Возвращает и устанавливает делегает валидации
     * @param {(data: T | null) => boolean} [value] - значение
     * @returns {this}
     */
    setIsValidDelegate(value) {
        this.__isValidDelegate = value;
        return this;
    }
    /**
     * Возвращает и устанавливает плейслхолдер для ввода
     * @param {string} [value] - значение
     * @returns {string|this|null}
     */
    placeholder(value) {
        throw Error(`Method placeholder is not implemented in class ${this}!`);
    }
    /**
     * Добавляет слушатель изменения значения поля
     *
     * @param {function(value: T, oldVal: T | null)} o
     * @param {boolean} clearanceSafe - защита от сброса
     * @return {this}
     */
    change(o, clearanceSafe = false) {
        if (!clearanceSafe)
            this.valueProperty.change(o);
        else
            this.valueProperty.change((nv, ov) => {
                o(nv, ov);
            });
        return this;
    }
    /**
     * Утанавливает подсказку
     * @param {String} hint - подсказка
     * @return {elyView}
     */
    hint(hint) {
        if (hint === undefined)
            return "";
        const hintView = new elyControl$1({ class: "ef-hint" });
        hintView.getDocument().innerHTML = hint;
        this.elyViewWillDraw(() => {
            this.getDocument().after(hintView.getDocument());
        });
        return this;
    }
    /**
     * Experimental
     *
     * @param name
     */
    tempData(name) {
        this.change(value => {
            elyCookie.set(`tfd-${name}`, `${value.constructor.name},${value}`, { expires: 5 * 60 });
        });
        this.elyViewWillDraw(() => {
            let val = elyCookie.get(`tfd-${name}`);
            if (elyGuard.isNone(val))
                return;
            const arr = val.split(",");
            const cns = arr.shift();
            if (cns) {
                if (cns === "elyColor") {
                    val = new elyColor({ hex: arr.join(",") });
                }
                else if (cns === "Number") {
                    val = parseInt(arr.join(","), 10);
                }
                else {
                    val = arr.join(",");
                }
            }
            this.value(val);
        });
    }
}

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
 + Файл: elyTextField.ts                                                      +
 + Файл изменен: 08.01.2019 02:54:20                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Поле: Ввод текста
 * @version 1.0
 * @class elyTextField
 * @augments {elyField<string>}
 */
let elyTextField = class elyTextField extends elyFieldView {
    /**
     * Конструктор
     * @param {elyTextFieldOptions} props
     */
    constructor(props = { fieldType: elyFieldType.text, encrypted: false }) {
        super({ accessory: new elyControl$1({ tag: "input", class: "ef-input" }) });
        /**
         * Флаг шифрования данных
         *
         * Данный флаг необходим для elyFormBuilder, при получении
         * и отрпавки значений, поле шифруется ключем.
         *
         * @type {boolean}
         */
        this.encrypted = false;
        this.__fieldType = props.fieldType || elyFieldType.text;
        const accessory = this.accessoryView.getDocument();
        accessory.onchange = () => {
            this.value(accessory.value);
        };
        this.valueProperty.change((newValue) => accessory.value = newValue);
        if (props.placeholder)
            accessory.placeholder = props.placeholder;
        if (props.value)
            this.value(props.value);
        accessory.type = this.fieldType().value;
    }
    /**
     * Возвращает тип поля ввода
     * @return {elyFieldType}
     */
    fieldType() {
        return this.__fieldType;
    }
    /**
     * Возвращает true, если поле пустое
     * @return {boolean}
     */
    isEmpty() {
        return super.isEmpty() || this.value() === "";
    }
    /**
     * Добавляет слушатель изменения поля
     * @param {{function(value: string)}} observer
     * @return {this}
     */
    addInputObserver(observer) {
        this.addObserver("input", observer);
        return this;
    }
    /**
     * Возвращает true, если данные введены правильно
     * @return {boolean}
     */
    isValid() {
        let result = false;
        if (this.fieldType().value === elyFieldType.mail.value) {
            result = /^([^ {}\]\[,]+)@(.+)\.(.+)/.test(this.valueProperty.get(""));
        }
        else {
            result = true;
        }
        return result && super.isValid();
    }
    /**
     * Возвращает и устанавливает плейслхолдер для ввода
     * @param {string} [value] - значение
     * @returns {string|this|null}
     */
    placeholder(value) {
        if (value === undefined)
            return this.accessoryView.getDocument().placeholder;
        this.accessoryView.getDocument().placeholder = value;
        return this;
    }
};
elyTextField = __decorate([
    designable("value", elyDesignableFieldState.GETSET, "string"),
    designable("fieldType", elyDesignableFieldState.GET, "string", elyFieldType.rawList())
], elyTextField);

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
 + Проект: ely.flat.application                                               +
 +                                                                            +
 + Файл: elyTextViewEditable.ts                                               +
 + Файл изменен: 27.11.2018 23:47:26                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Состояния объекта
 * @enum elyTextViewEditableState
 */
var elyTextViewEditableState;
(function (elyTextViewEditableState) {
    /**
     * Отображение значения
     */
    elyTextViewEditableState[elyTextViewEditableState["PRESENT"] = 0] = "PRESENT";
    /**
     * Редактирование
     */
    elyTextViewEditableState[elyTextViewEditableState["EDIT"] = 1] = "EDIT";
})(elyTextViewEditableState || (elyTextViewEditableState = {}));
/**
 * Элемент отображения: Мутация elyTextView в редактируемый по клику элемент
 * @class elyTextViewEditable
 * @augments elyView
 */
class elyTextViewEditable extends elyView {
    /**
     * Конструктор
     * @param props
     */
    constructor(props) {
        super(props);
        /**
         * Свойство: флаг режима редактирования
         * @ignore
         */
        this.editmodeProperty = new elyObservableProperty(false);
        /**
         * Свойство: флаг - разрешение редактирования
         * @ignore
         */
        this.editableProperty = new elyObservableProperty(true);
        /**
         * Свойство: значение
         * @ignore
         */
        this.valueProperty = new elyObservableProperty("");
        /**
         * Поле редактирования текста
         */
        this.textEditField = new elyTextField( /*{actionIcon: "check"}*/);
        /**
         * Делегат: проверка возможности сохранить значение
         */
        this.shouldSaveValueDelegate = ((val, res) => {
            res(true);
        });
        /**
         * Флаг того, что еще идет проверка
         * @ignore
         */
        this.__isChecking = false;
        this.textView = props.textView || new elyTextView$1({ text: "" });
        this.textView.addClass("clickable");
        this.textEditField.hidden(true);
        // Изменение значения
        this.valueProperty.change((value, oldVal) => {
            this.textView.text(value);
            this.textEditField.value(value).placeholder(value);
            this.notificate("value", [value, oldVal]);
        });
        // Режим редактирования
        this.editmodeProperty.change(editMode => {
            if (!this.editable() || this.__isChecking)
                return;
            this.__isChecking = true;
            // Изменяет состояния иконки
            // this.textEditField.actionIconView.iconName("refresh");
            // this.textEditField.actionIconView.iconSpinning(true);
            /**
             * Выполняет попытку сохранить результаты,
             * проходя все необходимые проверки и делигаты.
             */
            const tryToSaveResults = (callback) => {
                if (this.textView.text() === this.textEditField.value()) {
                    // this.value(this.textEditField.value());
                    callback(true);
                    this.setEditorViewState(elyTextViewEditableState.PRESENT);
                }
            };
            /**
             * Выполняет попытку войти в режим редактирования
             * @param callback
             */
            const tryToEnterEditMode = (callback) => {
                this.setEditorViewState(elyTextViewEditableState.EDIT);
                callback(true);
            };
            if (editMode)
                tryToEnterEditMode(() => this.__isChecking = false);
            else
                tryToSaveResults(() => this.__isChecking = false);
            if (props.editmode)
                this.editemode(props.editmode);
        });
        this.textEditField.addObserver("actionClick", () => this.editemode(false));
        this.textView.addObserver("click", () => this.editemode(true));
        this.value(this.textView.text());
        this.getDocument().append(this.textView.getDocument());
        this.getDocument().append(this.textEditField.getDocument());
    }
    /**
     * Устанавливает делигат проверки возможности сохранения значения
     * @param delegate
     */
    textViewEditableShouldSaveValue(delegate) {
        this.shouldSaveValueDelegate = delegate;
        return this;
    }
    /**
     * Возвращает и устанавливает значение
     */
    value(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.valueProperty);
    }
    /**
     * Добавляет наблюдатель: изменение значения
     *
     * Имя обсервера: value
     *
     * @param o - наблюдатель
     */
    addChangeValueObserver(o) {
        this.addObserver("value", o);
        return this;
    }
    /**
     * Возвращает и устанавливает флаг - разрешение редактирования
     */
    editable(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.editableProperty);
    }
    /**
     * Возвращает и устанавливает флаг редактирования
     */
    editemode(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.editmodeProperty);
    }
    /**
     * Модифицирует элемент отображения в зависимости от состояния
     * @param state
     */
    setEditorViewState(state) {
        this.textEditField.hidden(state === elyTextViewEditableState.PRESENT);
        this.textView.hidden(state === elyTextViewEditableState.EDIT);
        // this.textEditField.actionIconView.iconName("check");
        // this.textEditField.actionIconView.iconSpinning(false);
        return this;
    }
}

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
 + Файл: elySize.ts                                                           +
 + Файл изменен: 05.12.2018 23:47:11                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Размеры ely.flat
 * @class elySize
 * @augments {elyEnum<string>}
 */
class elySize extends elyEnum {
    /**
     * Конструктор
     * @ignore
     * @param val
     * @param custom
     */
    constructor(val, custom = false) {
        super(val);
        this.custom = custom;
    }
    /**
     * Свой размер
     * @param value
     */
    static custom(value) {
        if (typeof value === "number")
            value = value.toString() + "px";
        return new elySize(value, true);
    }
    /**
     * Возвращает размер по его названию
     * @param name
     */
    static byName(name) {
        return new elySize(name);
    }
    /**
     * Список
     */
    static rawList() {
        return {
            default: elySize.default.value,
            extraLarge: elySize.extraLarge.value,
            extraSmall: elySize.extraSmall.value,
            fill: elySize.fill.value,
            large: elySize.large.value,
            middle: elySize.middle.value,
            regular: elySize.regular.value,
            small: elySize.small.value,
        };
    }
}
/**
 * Стандартный размер
 * @return elySize
 */
elySize.default = new elySize("default");
/**
 * Основной размер, используемый в ely.flat
 */
elySize.regular = new elySize("regular");
/**
 * Размер во весь блок
 */
elySize.fill = new elySize("fill");
/**
 * Маленький размер
 */
elySize.small = new elySize("small");
/**
 * Средний размер
 */
elySize.middle = new elySize("middle");
/**
 * Большой размер
 */
elySize.large = new elySize("large");
/**
 * Очень большой размер
 */
elySize.extraLarge = new elySize("extraLarge");
/**
 * Очень маленький размер
 */
elySize.extraSmall = new elySize("extraSmall");

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
 + Файл: elyWeight.ts                                                         +
 + Файл изменен: 05.12.2018 23:47:11                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Толщина ely.flat
 * @class elyWeight
 * @augments {elyEnum<number>}
 */
class elyWeight extends elyEnum {
    /**
     * Конструктор
     * @ignore
     * @param val
     */
    constructor(val) {
        super(val);
    }
    /**
     * Свой размер
     * @param value
     */
    static custom(value) {
        return new elyWeight(value);
    }
    /**
     * Список
     */
    static rawList() {
        return {
            bold: elyWeight.bold.value,
            fat: elyWeight.fat.value,
            light: elyWeight.light.value,
            normal: elyWeight.normal.value,
            regular: elyWeight.regular.value,
            thin: elyWeight.thin.value,
        };
    }
}
/**
 * Стандартная толщина
 */
elyWeight.default = new elyWeight(300);
/**
 * Основная толщина, используемый в ely.flat
 */
elyWeight.regular = new elyWeight(300);
/**
 * Толщина, используемая общими стандартами
 */
elyWeight.normal = new elyWeight(400);
/**
 * Толщина выше нормальной
 */
elyWeight.bold = new elyWeight(700);
/**
 * Предельная толщина
 */
elyWeight.fat = new elyWeight(900);
/**
 * Толщина меньше стандартной
 */
elyWeight.light = new elyWeight(200);
/**
 * Предельно низкая толщина
 */
elyWeight.thin = new elyWeight(100);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyTextView.ts                                                       +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var elyTextView_1;
/**
 * Элемент отображения: Текст
 *
 * Объект соответствует стандарту: EPS4
 * @class elyTextView
 */
let elyTextView = elyTextView_1 = class elyTextView extends elyControl$1 {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(options);
        this.addClass("ef-text");
        /**
         * @protected
         * @readonly
         */
        this.textContentView = new elyControl$1({ tag: "span", class: "content" });
        /**
         * @protected
         * @readonly
         */
        this.iconView = new elyControl$1({ tag: "span" });
        this.addSubView(this.iconView);
        this.addSubView(this.textContentView);
        this.iconView.hidden(true);
        /**
         * Свойство текста
         * @readonly
         * @type {elyObservableProperty}
         */
        this.textProperty = new elyObservableProperty("").change((value) => this.textContentView.getDocument().innerHTML = elyTextView_1.filterString(value));
        /**
         * @protected
         * @readonly
         */
        this.textSizeProperty = new elyObservableProperty().change((newValue, oldValue) => {
            if (oldValue && !oldValue.custom)
                this.removeClass(`ts-${oldValue.value}`);
            if (oldValue && oldValue.custom)
                this.css({ "font-size": null });
            if (newValue.custom) {
                this.css({ "font-size": newValue.value });
            }
            else {
                this.addClass(`ts-${newValue.value}`);
            }
        });
        /**
         * @protected
         */
        this.textWeightProperty = new elyObservableProperty(elyWeight.default.value)
            .change(value => {
            return this.css({ "font-weight": value });
        });
        /**
         * Иконка
         * @readonly
         * @type {elyObservableProperty}
         */
        this.iconNameProperty = new elyObservableProperty("")
            .change((value) => {
            if (value) {
                this.iconView.attribute("class", `fa fa-${value}`);
                this.iconView.hidden(false);
            }
            else
                this.iconView.hidden(true);
        });
        if (options.text)
            this.text(options.text);
        if (options.iconName)
            this.iconName(options.iconName);
        if (options.textSize)
            this.textSize(options.textSize);
        if (options.textWeight)
            this.textWeight(options.textWeight);
        if (options.textCenter)
            this.textCenter(options.textCenter);
    }
    /**
     * Возвращает интерактивный элемент
     * @param textView
     */
    static editable(textView) {
        return new elyTextViewEditable({ textView });
    }
    /**
     * Выполняет попытку мутировать obj в объект elyTextView.
     * Иначе возвращает пустой элемент.
     *
     *
     *     let obj = "Тест";
     *     let view = elyTextView.tryMutate(obj);
     *
     *     typeOf view; // elyTextView
     *     view.text(); // "Тест"
     *
     *
     *
     * @param obj
     */
    static tryMutate(obj) {
        try {
            if (obj instanceof elyView) {
                if (obj instanceof elyTextView_1)
                    return obj;
                return obj.getDocument().innerText.textView();
            }
            else
                return String(obj).textView();
        }
        catch (e) {
            return new elyTextView_1();
        }
    }
    /**
     * Фильтрует строку
     * @param str
     */
    static filterString(str) {
        return str.replace(/\*([^*]+)\*/g, "<b>$1</b>")
            .replace(/\(link:([^)]+)\){([^}]+)}/g, "<a href='$1'>$2</a>")
            .replace(/\(action:([^{]+)\){([^}]+)}/g, "<a href='#' onclick='ely.oneAction.go(\"$1\")'>$2</a>")
            .replace(/{nl}/g, "<br>");
    }
    /**
     * Устанавливает выравнивание текста по середине
     * @param {boolean} [bool] - значение
     * @return {boolean|elyTextView}
     */
    textCenter(bool) {
        if (bool === undefined)
            return this.getStyle().textAlign === "center";
        this.getStyle().textAlign = bool === true ? "center" : null;
        return this;
    }
    /**
     * Возвращает и устанавливает размер текста
     * @param {elySize|string|number} [value]
     * @return {elyTextView|elySize}
     */
    textSize(value) {
        if (value !== undefined) {
            if (typeof value === "string") {
                if (/^([A-z]+)$/.test(value))
                    value = elySize.byName(value);
                else {
                    value = elySize.custom(value);
                }
            }
            else if (typeof value === "number")
                value = elySize.custom(value + "px");
        }
        return elyObservableProperty.simplePropertyAccess(this, value, this.textSizeProperty);
    }
    /**
     * Устанавливает толщину текста
     * @param {elyWeight|number} weight
     * @return {elyTextView|number}
     *
     * Используемые константы: {@link elyWeight}
     */
    textWeight(weight) {
        if (weight) {
            // @ts-ignore
            weight = weight.toString();
        }
        return elyObservableProperty.simplePropertyAccess(this, weight, this.textWeightProperty);
    }
    /**
     * Устанавливает или возвращает текст
     * @param {String} [value] - текст
     * @return {String|elyTextView}
     */
    text(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.textProperty);
    }
    /**
     * Название иконки
     * @param {String} [value] - имя иконки
     * @return {string|elyTextView}
     */
    iconName(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.iconNameProperty);
    }
    /**
     * Устанавливает положение икноки
     * - {@link elyTextView.iconLeft}
     * - {@link elyTextView.iconRight}
     *
     * @param position
     */
    setIconPosition(position) {
        this.removeSubView(this.textContentView);
        this.removeSubView(this.iconView);
        if (position === elyTextView_1.iconRight) {
            this.addSubView(this.textContentView);
            this.addSubView(this.iconView);
        }
        else if (position === elyTextView_1.iconLeft) {
            this.addSubView(this.iconView);
            this.addSubView(this.textContentView);
        }
        else {
            this.addSubView(this.iconView);
            this.addSubView(this.textContentView);
        }
        return this;
    }
};
/**
 * Константа положения иконки: лево
 */
elyTextView.iconLeft = "left";
/**
 * Константа положения иконки: право
 */
elyTextView.iconRight = "right";
elyTextView = elyTextView_1 = __decorate([
    designable("text", elyDesignableFieldState.GETSET, "text"),
    designable("textCenter", elyDesignableFieldState.GETSET, "boolean"),
    designable("textSize", elyDesignableFieldState.GETSET, "number|string", elySize.rawList()),
    designable("textWeight", elyDesignableFieldState.GETSET, "number|string", elyWeight.rawList()),
    designable("iconName", elyDesignableFieldState.GETSET),
    designable("setIconPosition", elyDesignableFieldState.SET, "string", {
        left: elyTextView_1.iconLeft,
        right: elyTextView_1.iconRight,
    })
], elyTextView);
var elyTextView$1 = elyTextView;

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
 + Файл: elyStyle.ts                                                          +
 + Файл изменен: 05.12.2018 23:47:11                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Стили ely.flat
 * @class elyStyle
 * @augments {elyEnum}
 */
class elyStyle extends elyEnum {
    /**
     * Конструктор
     * @ignore
     * @param val
     */
    constructor(val) {
        super(val);
    }
    /**
     * Список
     */
    static rawList() {
        // tslint:disable-next-line:max-classes-per-file
        return new class {
            constructor() {
                this.danger = elyStyle.danger.value;
                this.default = elyStyle.default.value;
                this.info = elyStyle.info.value;
                this.muted = elyStyle.muted.value;
                this.primary = elyStyle.primary.value;
                this.secondary = elyStyle.secondary.value;
                this.success = elyStyle.success.value;
                this.warning = elyStyle.warning.value;
            }
        };
    }
    static list() {
        return {
            danger: elyStyle.default,
            default: elyStyle.default,
            info: elyStyle.info,
            muted: elyStyle.muted,
            primary: elyStyle.primary,
            secondary: elyStyle.secondary,
            success: elyStyle.success,
            warning: elyStyle.warning,
        };
    }
    /**
     * Свой стиль
     * @param name
     */
    static custom(name) {
        return new elyStyle(name);
    }
    /**
     * Возвраща стиль по имени
     * @param name
     */
    static byName(name) {
        return new elyStyle(name);
    }
}
/**
 * Стандартный стиль
 *
 * Элементарный сброс стиля
 */
elyStyle.default = new elyStyle("default");
/**
 * Главный стиль
 *
 * Основной стиль подходит для важных элементов.
 */
elyStyle.primary = new elyStyle("primary");
/**
 * Информативный стиль
 *
 * Основной стиль подходит для отображения информации, которая должна выделяться.
 */
elyStyle.info = new elyStyle("info");
/**
 * Вторичный стиль
 *
 * Стиль подходит для элементов, не требующих основное внимание.
 */
elyStyle.secondary = new elyStyle("secondary");
/**
 * Стиль предупреждения
 *
 * Стиль, особо концентрирующий внимание пользователя.
 */
elyStyle.warning = new elyStyle("warning");
/**
 * Успешный стиль
 *
 * Стиль, говорящий об успешном завершении действия.
 */
elyStyle.success = new elyStyle("success");
/**
 * Опасный стиль
 *
 * Стиль, ярко бросающийся в глаза. Подойдет для отметки ошибок.
 */
elyStyle.danger = new elyStyle("danger");
/**
 * Заглушенный стиль
 *
 * Стиль, говорящий о невозможности использовать элемент.
 */
elyStyle.muted = new elyStyle("muted");

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyButton.ts                                                         +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент управления: Кнопка
 * @version 1.0
 *
 *
 *     // Создание кнопки по ширине заполнения
 *     let button = new ely.button({text: "Button", buttonSize: ely.size.fill});
 *
 *     button.click( () => {
 *        // Обработка нажатия кнопки
 *        console.log("Wow!");
 *     });
 *
 * @class elyButton
 * @augments elyControl
 */
let elyButton = class elyButton extends elyControl$1 {
    /**
     * Инициилизирует объект
     * @param {click:Function, buttonStyle: elyStyle, buttonSize: elySize, text: string, fill:Boolean|*} options - опции
     */
    constructor(options = {}) {
        super(Object.assign({ tag: "button", class: "btn" }, options));
        /**
         * Элемент отображения текста
         * @type {elyTextView}
         * @readonly
         */
        this.textView = new elyTextView$1({ tag: "span", text: options.text, iconName: options.iconName });
        /**
         * @protected
         */
        this.buttonSizeProperty = new elyObservableProperty(elySize.default);
        /**
         * @protected
         */
        this.buttonStyleProperty = new elyObservableProperty(elyStyle.default);
        this.buttonStyleProperty.change((newValue, oldValue) => {
            if (oldValue)
                this.removeClass(`bg-${oldValue.value}`);
            this.addClass(`bg-${newValue.value}`);
        });
        this.buttonSizeProperty.change((newValue, oldValue) => {
            if (oldValue)
                this.removeClass(`btn-${oldValue.value}`);
            this.addClass(`btn-${newValue.value}`);
        });
        this.addSubView(this.textView);
        this.buttonSize(options.buttonSize || elySize.regular);
        this.buttonStyle(options.buttonStyle || elyStyle.primary);
        if (options.click)
            this.click(options.click);
        if (options.fill)
            this.fill();
    }
    /**
     * Устанавливает текст на кнопку
     * @param {String} text - текст кнопки
     * @return {string|elyButton}
     */
    text(text) {
        if (text === undefined)
            return this.textView.text();
        this.textView.text(text);
        return this;
    }
    /**
     * Возвращает или устанавливает размер кнопки
     *
     * См {@link elySize}
     * @param [sizeName] - {@link elySize}
     * @return {elyButton|elySize}
     */
    buttonSize(sizeName) {
        if (typeof sizeName === "string")
            sizeName = elySize.byName(sizeName);
        return elyObservableProperty.simplePropertyAccess(this, sizeName, this.buttonSizeProperty);
    }
    /**
     * Возвращает или устанавливает стиль кнопки
     *
     * См {@link elyStyle}
     * @param {string|elyStyle} [styleName] - стиль
     * @returns {elyStyle|elyButton|null}
     */
    buttonStyle(styleName) {
        if (typeof styleName === "string")
            styleName = elyStyle.byName(styleName);
        return elyObservableProperty.simplePropertyAccess(this, styleName, this.buttonStyleProperty);
    }
    /**
     * Устанавливает слушатель нажатия или нажимает на кнопку
     *
     * @param {Function} [callback = null]
     * @returns {elyButton}
     */
    click(callback) {
        if (callback === undefined) {
            this.getDocument().click();
        }
        else {
            this.addObserver("click", callback);
        }
        return this;
    }
    /**
     * Увеличивает размер кнопки до всего блока
     * @returns {elyButton}
     */
    fill() {
        this.buttonSize(elySize.fill);
        return this;
    }
};
elyButton = __decorate([
    designable("text", elyDesignableFieldState.GETSET, "string"),
    designable("buttonSize", elyDesignableFieldState.GETSET, "string", elySize.rawList()),
    designable("buttonStyle", elyDesignableFieldState.GETSET, "string", elyStyle.rawList())
], elyButton);
var elyButton$1 = elyButton;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyObservableDictionary.ts                                           +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Свойство словаря
 * @class elyObservableDictionary
 * @template T
 */
class elyObservableDictionary extends elyObservableProperty {
    /**
     * Конструктор
     * @param defaultValue
     */
    constructor(defaultValue = {}) {
        super(defaultValue);
    }
    /**
     * Возвращакт словарь, как объекта
     */
    get() {
        return super.get();
    }
    /**
     * Слушатель добавления новго элемента в словаре
     * @param observer
     */
    addNewItemObserver(observer) {
        this.addObserver("newItem", observer);
        return this;
    }
    getSorted(handler) {
        const ordered = new elyObservableDictionary();
        Object.keys(this.value).sort(handler).forEach((key) => {
            ordered.add(key, this.value[key]);
        });
        return this;
    }
    /**
     * Слушатель удаления элемента в словаре
     * @param observer
     */
    addRemoveItemObserver(observer) {
        this.addObserver("removeItem", observer);
        return this;
    }
    /**
     * Возвращает элемент словаря или NULL
     * @param key
     */
    item(key) {
        const val = (this.value || {})[key];
        return elyGuard.isNone(val) ? null : val;
    }
    /**
     * Возвращает элемент по индексу
     * @param index
     */
    itemByIndex(index) {
        const key = Object.keys(this.value)[index];
        return key ? { key, value: this.value[key] } : null;
    }
    /**
     * Добавляет значение в словарь
     * @param key   - ключ
     * @param value - значение
     */
    add(key, value) {
        this.value[key] = value;
        this.notificate("change", [this.value]);
        this.notificate("newItem", [key, value]);
        return this;
    }
    /**
     * Удаляет значение из словаря
     * @param key
     */
    remove(key) {
        if (this.value.hasOwnProperty(key)) {
            const copy = this.value[key];
            delete this.value[key];
            this.notificate("change", [this.value]);
            this.notificate("removeItem", [key, copy]);
            return true;
        }
        return false;
    }
    /**
     * Очищает словарь
     */
    clear() {
        this.set({});
        return this;
    }
    /**
     * Возвращает количество элементов в словаре
     *
     *
     *     // Создаём словарь
     *     let dictionary = new ely.observable.dictionary();
     *
     *     // Заполняем его элементами
     *     dictionary.add("a", 100);
     *     dictionary.add("b", 200);
     *     dictionary.add("c", 300);
     *
     *     console.log( dictionary.count() );
     *
     *     //3
     *
     *
     */
    count() {
        let count = 0;
        elyUtils.forEach(this.value, () => count++);
        return count;
    }
    /**
     * Цикл по всем элементам словаря
     * @param iterator
     *
     *
     *     // Создаём словарь
     *     let dictionary = new ely.observable.dictionary();
     *
     *     // Заполняем его элементами
     *     dictionary.add("a", 100);
     *     dictionary.add("b", 200);
     *     dictionary.add("c", 300);
     *
     *     dictionary.forEach( (key, value) => {
     *        console.log(key + " " + value);
     *     });
     *
     *     //a 100
     *     //b 200
     *     //c 300
     *
     *
     */
    forEach(iterator) {
        elyUtils.forEach(this.value, iterator);
        return this;
    }
    /**
     * Возвращает true, если существует ключ
     * @param key
     */
    contains(key) {
        return this.value.hasOwnProperty(key);
    }
    /**
     * Возвращает первый индекс значения или null, если значение не найдено.
     *
     * Данный метод можно использовать для проверки наличия значения.
     *
     * @param value
     */
    keyOf(value) {
        let searched = null;
        elyUtils.forEach(this.value, (index, value1) => {
            if (value1 === value) {
                searched = index;
                return elyUtils.BREAK_FLAG;
            }
        });
        return searched;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyStylesheet.ts                                                     +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
 *
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *   ,--. o                   |    o
 *   |   |.,---.,---.,---.    |    .,---.,---.
 *   |   |||---'|   ||   |    |    ||   ||   |
 *   `--' ``---'`---|`---'    `---'``   '`---|
 *              `---'                    `---'
 *
 * Copyright (C) 2016-2019, Yakov Panov (Yakov Ling)
 * Mail: <diegoling33@gmail.com>
 *
 * Это программное обеспечение имеет лицензию, как это сказано в файле
 * COPYING, который Вы должны были получить в рамках распространения ПО.
 *
 * Использование, изменение, копирование, распространение, обмен/продажа
 * могут выполняться исключительно в согласии с условиями файла COPYING.
 *
 * Файл: elyStylesheet.ts
 * Файл создан: 19.11.2018 20:56:39
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *
 */
/**
 * Типы стиля
 */
var elyStylesheetItemType;
(function (elyStylesheetItemType) {
    elyStylesheetItemType[elyStylesheetItemType["class"] = 0] = "class";
    elyStylesheetItemType[elyStylesheetItemType["tag"] = 1] = "tag";
    elyStylesheetItemType[elyStylesheetItemType["id"] = 2] = "id";
})(elyStylesheetItemType || (elyStylesheetItemType = {}));
/**
 * Таблица стилей
 *
 */
class elyStylesheet {
    /**
     * Конструктор
     * @param sheet
     *
     */
    constructor(sheet) {
        this.__view = document.createElement("style");
        this.stylesheet = sheet || (this.__view.sheet || {});
        this.classes = new elyObservableDictionary();
    }
    /**
     * Возвращает документ
     */
    getDocument() {
        return this.__view;
    }
    addItem(name, type, style) {
        if (this.classes.contains(name) && this.classes.item(name).type === type) {
            this.classes.item(name).style = Object.assign({}, (this.classes.item(name).style || {}), style);
        }
        else {
            this.classes.add(name, { name, type, style });
        }
        return this.rebuild();
    }
    /**
     * Добавляет класс стилей
     * @param className
     * @param style
     */
    addClass(className, style) {
        return this.addItem(className, elyStylesheetItemType.class, style);
    }
    /**
     * Добавляет ID стилей
     * @param id
     * @param style
     */
    addID(id, style) {
        return this.addItem(id, elyStylesheetItemType.id, style);
    }
    /**
     * Добавляет стили
     * @param name
     * @param style
     */
    add(name, style) {
        return this.addItem(name, elyStylesheetItemType.tag, style);
    }
    /**
     * Перестроение таблицы стилей
     */
    rebuild() {
        this.getDocument().innerHTML = "";
        this.classes.forEach((key, value) => {
            const tempNode = document.createElement("div");
            for (const name in value.style)
                if (value.style.hasOwnProperty(name))
                    tempNode.style[name] = value.style[name];
            let name = value.name;
            switch (value.type) {
                case elyStylesheetItemType.class:
                    name = `.${name}`;
                    break;
                case elyStylesheetItemType.tag:
                    name = `${name}`;
                    break;
                case elyStylesheetItemType.id:
                    name = `#${name}`;
                    break;
            }
            this.getDocument().appendChild(document.createTextNode(`${name}{${tempNode.getAttribute("style").replace(";", " !important;")}}`));
        });
        return this;
    }
}
/**
 * Глобавльные стили
 */
elyStylesheet.global = new elyStylesheet();

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyGridRowView.ts                                                    +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Flex Строка
 */
class elyGridRowView extends elyView {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(Object.assign({ class: "ef-flex-box" }, options));
        this.addClass("row");
        this.__views = [];
        this.__columns = [];
    }
    /**
     * Добавляет элемент в строку
     * @param view          - элемент
     * @param percentage    - процентное значение элемента в строке (0 ... 1)
     */
    add(view, percentage = null) {
        const column = new elyControl$1({ class: "item" });
        if (percentage === null)
            percentage = 1;
        if (typeof percentage === "number" && percentage > 1)
            percentage /= 100;
        if (typeof percentage === "string")
            column.css({ flex: `1 1 ${percentage}` });
        else
            column.css({ flex: `1 1 ${percentage * 100}%` });
        column.addSubView(view);
        this.__views.push(view);
        this.__columns.push(column);
        if (percentage === null) {
            this.__columns.forEach((value) => {
                value.css({ flex: `1 1 ${100 / this.__views.length}%` });
            });
        }
        column.superview = this;
        this.getDocument().append(column.getDocument());
        return this;
    }
    /**
     * Удаляет элемент из строки
     * @param view
     */
    remove(view) {
        const index = this.__views.indexOf(view);
        if (index > -1 && this.__columns[index]) {
            this.__views.splice(index, 1);
            view.removeFromSuperview();
            this.__columns[index].removeFromSuperview();
            this.__columns.splice(index, 1);
        }
        return this;
    }
    /**
     * Удаляет содержимое строки
     */
    removeViewContent() {
        super.removeViewContent();
        this.__views.splice(0, this.__views.length);
        return this;
    }
    /**
     * Возвращает индекс элемента в строке или -1
     * @param view
     */
    viewIndex(view) {
        return this.__views.indexOf(view);
    }
    /**
     * Возвращает колонку по индексу
     * @param index
     */
    viewAt(index) {
        return this.__views[index];
    }
    /**
     * Возвращает количество элементов
     */
    viewsCount() {
        return this.__columns.length;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyGridView                                                  +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Флекс сетка
 * @class elyGridView
 * @augments {elyView}
 */
class elyGridView extends elyView {
    /**
     * Конструктор
     * @param {elyFlexGridViewOptions} options
     */
    constructor(options = {}) {
        super(options);
        this.__flexPercentage = options.flex || [];
        this.__rows = [];
        this.addClass(this.identifier());
        this.setItemsMargin(options.margin || { top: 5, bottom: 5, left: 5, right: 5 });
    }
    /**
     * Устанавливает внитринний отступ элементов сетки
     * @param {IPosition} margin
     */
    setItemsMargin(margin) {
        margin = Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, margin);
        const styles = {};
        elyUtils.applySrc(margin, ["top", "bottom", "left", "right"], styles, "margin-", (val) => {
            return typeof val === "string" ? val : val + "px";
        });
        elyStylesheet.global.addClass(this.identifier() + " .item", styles);
        return this;
    }
    /**
     * Возвращает строки
     * @return {elyGridRowView[]}
     */
    getRows() {
        return this.__rows;
    }
    /**
     * Удаляет строку
     * @param {number} index
     * @return {this}
     */
    removeRow(index) {
        this.__rows[index].removeFromSuperview();
        return this;
    }
    /**
     * Возвращает индекс строки, в которой находится элемент
     * @param {elyView} view
     * @return {number}
     */
    viewRowIndex(view) {
        let i = 0;
        for (const row of this.__rows) {
            if (row.viewIndex(view) > -1)
                return i;
            i++;
        }
        return -1;
    }
    /**
     * Возвращает полный адрес элемента: `{rowIndex: number, viewIndex: number}`
     * @param {elyView} view
     * @return {{rowIndex: number, viewIndex: number}}
     */
    viewIndex(view) {
        for (let rowIndex = 0; rowIndex < this.__rows.length; rowIndex++) {
            const vi = this.__rows[rowIndex].viewIndex(view);
            if (vi > -1)
                return { rowIndex, viewIndex: vi };
        }
        return { rowIndex: -1, viewIndex: -1 };
    }
    /**
     * Возвращает строку по индексу
     * @param {number} index
     * @return {elyGridRowView|null}
     */
    rowAt(index) {
        return this.__rows[index];
    }
    /**
     * Удаляет элемент
     * @param {elyView} view
     * @return {this}
     */
    removeView(view) {
        const index = this.viewRowIndex(view);
        this.rowAt(index).remove(view);
        return this;
    }
    /**
     * Добавляет строку
     * @param {...elyView} row
     * @return {this}
     */
    add(...row) {
        return this.insert(null, ...row);
    }
    /**
     * Вставляет строку по индексу
     *
     * @param {number} index
     * @param {...elyView} row
     * @return {this}
     */
    insert(index = null, ...row) {
        const rowView = new elyGridRowView();
        const rowIndex = this.__rows.length;
        row.forEach((value, index) => {
            let flexMap = [];
            if (this.__flexPercentage.length > 0) {
                if (typeof this.__flexPercentage[0] === "number")
                    flexMap = this.__flexPercentage;
                else
                    flexMap = this.__flexPercentage[rowIndex] || this.__flexPercentage[0];
            }
            value.superview = rowView;
            rowView.add(value, flexMap[index] || null);
        });
        if (index !== null) {
            this.__rows.splice(index, 0, rowView);
            const indexedRow = this.rowAt(index);
            if (indexedRow) {
                indexedRow.getDocument().before(rowView.getDocument());
            }
            else {
                this.getDocument().append(rowView.getDocument());
            }
        }
        else {
            this.__rows.push(rowView);
            this.getDocument().append(rowView.getDocument());
        }
        rowView.superview = this;
        return this;
    }
    /**
     * Удаляет содержимое сетки
     * @return {this}
     */
    removeViewContent() {
        super.removeViewContent();
        this.__rows.splice(0, this.__rows.length);
        return this;
    }
    /**
     * Возвращает количество строк
     * @return {number}
     */
    rowsCount() {
        return this.__rows.length;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyBodyView.ts                                                       +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
 *
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *   ,--. o                   |    o
 *   |   |.,---.,---.,---.    |    .,---.,---.
 *   |   |||---'|   ||   |    |    ||   ||   |
 *   `--' ``---'`---|`---'    `---'``   '`---|
 *              `---'                    `---'
 *
 * Copyright (C) 2016-2019, Yakov Panov (Yakov Ling)
 * Mail: <diegoling33@gmail.com>
 *
 * Это программное обеспечение имеет лицензию, как это сказано в файле
 * COPYING, который Вы должны были получить в рамках распространения ПО.
 *
 * Использование, изменение, копирование, распространение, обмен/продажа
 * могут выполняться исключительно в согласии с условиями файла COPYING.
 *
 * Файл: elyBodyView.ts
 * Файл создан: 19.11.2018 20:52:55
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *
 */
/**
 * Тело документа
 */
class elyBodyView extends elyControl$1 {
    /**
     * Конструктор
     * @ignore
     */
    constructor() {
        super({ element: document.body });
    }
}
/**
 * Основной объект тела документа
 */
elyBodyView.default = new elyBodyView();

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyNotificationView.ts                                               +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Оповещения
 *
 * elyNotification (TypeScript)
 * version 0.1
 */
class elyNotificationView extends elyControl$1 {
    /**
     * Конструктор
     * @param props
     */
    constructor(props = elyNotificationView.defaults) {
        super(props);
        this.notificationHeight = 0;
        /**
         * Флаг нотифицирования
         */
        this._isNotified = false;
        this._isClosable = true;
        this.options = elyNotificationView.defaults;
        for (const index in props)
            this.options[index] = props[index];
        const scsize = window.outerWidth;
        if (this.options.width > scsize)
            this.options.width = scsize - 20;
        const absoluteWidth = (this.options.width) - 37;
        // this.identifier("notification_" + Math.floor(Math.random() * (999999 - 1000 + 1) + 1000));
        this.addClass("ely-notification-panel");
        this.css({ "background-color": this.options.backgroundColor, "width": this.options.width });
        const obj = {};
        obj[this.getDisplayPositions()[0]] = 10 + "px";
        obj[this.getDisplayPositions()[1]] = 10 + "px";
        this.css(obj);
        //
        //  Close button
        //
        this.closeButton = new elyControl$1({ tag: "b", class: "ely-notification-close-button" });
        this.closeButton.css({ color: this.options.titleColor });
        this.closeButton.getDocument().innerHTML = "&times;";
        //
        //  Title
        //
        this.titleView = new elyControl$1({ class: "ely-notification-title-label" });
        this.titleView.css({ width: absoluteWidth + "px", color: this.options.titleColor });
        this.titleView.getDocument().innerHTML = this.options.title || "";
        //
        //  Message
        //
        this.messageView = new elyControl$1({ class: "ely-notification-message-label" });
        this.messageView.css({ width: absoluteWidth + "px", color: this.options.messageColor });
        this.messageView.getDocument().innerHTML = this.options.message || "";
        this.contentView = new elyControl$1({ class: "ely-notification-content" });
        this.contentView.css({
            "border-top": "1px solid " + this.options.sepColor,
            "color": this.options.contentColor,
            "width": this.options.width + "px",
        });
        if (this.options.content)
            this.contentView.addSubView(new elyTextView$1({ text: this.options.content }));
        this.hide();
        this.closable(this.options.closable);
    }
    /**
     * Закрывает все уведомения, кроме последнего
     */
    static closeAllNotificationsToLast() {
        if (elyNotificationView.defaults.notificationsData.length > 0) {
            for (let i = 0; i < elyNotificationView.defaults.notificationsData.length - 1; i++)
                elyNotificationView.defaults.notificationsData[i].dismiss();
        }
    }
    /**
     * Возвращает позиции оповещения
     */
    getDisplayPositions() {
        return this.options.displayPosition.split("/");
    }
    /**
     * Оторбражает оповещение
     */
    present() {
        if (this._isNotified)
            return this;
        //
        // Set-up
        //
        if (this.closable())
            this.addSubView(this.closeButton);
        if (this.options.title || this.titleView.getDocument().innerHTML !== "")
            this.addSubView(this.titleView);
        this.addSubView(this.messageView);
        if (this.options.content || this.contentView.getDocument().innerHTML !== "")
            this.addSubView(this.contentView);
        this._isNotified = true;
        elyBodyView.default.addSubView(this);
        this.show();
        this.notificationHeight = this.offSize().height;
        this.hide();
        const notifications = elyNotificationView.defaults.notificationsData;
        const margin = elyNotificationView.defaults.notificationsMargin + this.notificationHeight;
        const displayPositions = this.getDisplayPositions();
        this.notificate("show");
        if (notifications.length > 0) { // In case if notifications are on the screen
            switch (displayPositions[0]) { // Moves all notifications in true direction
                case "bottom":
                    for (const item of notifications)
                        item.css({ bottom: "+=" + margin + "px" });
                    break;
                default:
                    for (const item of notifications)
                        item.css({ top: "+=" + margin + "px" });
                    break;
            }
        }
        notifications.push(this); // Adds notification to list
        // In case if notifications is too much, clear all to last
        if (notifications.length > elyNotificationView.defaults.limit)
            elyNotificationView.closeAllNotificationsToLast();
        // Fading and moving the notification
        if (notifications.length > 0)
            setTimeout(() => {
                this.fadeIn();
            }, this.options.moveTime);
        else
            this.fadeIn();
        this.closeButton.addObserver("click", () => {
            this.dismiss();
        });
        if (this.isNotified() && this.closable())
            setTimeout(() => {
                this.dismiss();
            }, this.options.fadeTime + this.options.delay);
        return this;
    }
    /**
     * Удаляет оповещение с экрана
     *
     * @param force - принудительное удаление объкта с экранаx
     */
    dismiss(force = false) {
        if (this.closable() || force) {
            this.notificate("close");
            this._isNotified = false;
            this.fadeOut();
            const noties = elyNotificationView.defaults.notificationsData;
            setTimeout(() => {
                if (noties.length > 0)
                    if (this.options.displayPosition.split("/")[0] === "top")
                        for (let j = noties.indexOf(this); j >= 0; j--)
                            noties[j].css({
                                top: "-=" + (this.notificationHeight + this.options.notificationsMargin) + "px",
                            });
                    else
                        for (let j = noties.indexOf(this); j >= 0; j--)
                            noties[j].css({
                                bottom: "-=" + (this.notificationHeight + this.options.notificationsMargin) + "px",
                            });
                const cache = [];
                for (const item of noties)
                    if (item !== this)
                        cache.push(item);
                elyNotificationView.defaults.notificationsData = cache;
                try {
                    this.getDocument().parentNode.removeChild(this.getDocument());
                }
                catch (e) {
                    // Nothing is done
                }
            }, this.options.fadeTime);
        }
    }
    /**
     * Состояние закрывающегося оповещения
     * @param value
     */
    closable(value) {
        if (value === undefined) {
            return this._isClosable;
        }
        this._isClosable = value;
        return this;
    }
    /**
     * Возвращает состояние оповещения
     */
    isNotified() {
        return this._isNotified;
    }
    hide() {
        this.hidden(true);
    }
    show() {
        this.hidden(false);
    }
}
/**
 * Стандартные параметры
 */
elyNotificationView.defaults = {
    animateDuration: 60000,
    animateSpeed: 700,
    animation: false,
    backgroundColor: "#FFFFFF",
    closable: true,
    contentColor: "#595959",
    delay: 5000,
    displayPosition: "top/right",
    fadeTime: 500,
    limit: 15,
    messageColor: "#595959",
    moveTime: 500,
    notificationsData: [],
    notificationsMargin: 10,
    sepColor: "#EEEEEE",
    titleColor: "#595959",
    width: 400,
};

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyIconView.ts                                                       +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Иконка
 * @version 1.0
 * @class elyIconView
 */
let elyIconView = class elyIconView extends elyView {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(Object.assign({ tag: "span" }, options));
        this.addClass("fa");
        this.iconNameProperty = new elyObservableProperty();
        this.iconNameProperty.change((newValue, oldValue) => {
            if (oldValue)
                this.removeClass(`fa-${oldValue}`);
            this.addClass(`fa-${newValue}`);
        });
        if (options.iconName)
            this.iconName(options.iconName);
        if (options.iconSize)
            this.iconSize(options.iconSize);
        if (options.iconSpinning)
            this.iconSpinning(options.iconSpinning);
    }
    /**
     * Устанавливает или возвращает имя иконки
     * @param name
     */
    iconName(name) {
        return elyObservableProperty.simplePropertyAccess(this, name, this.iconNameProperty);
    }
    /**
     * Устанавливает размер иконки
     * @param size
     *
     * Используемые константы: {@link elySize}
     */
    iconSize(size) {
        if (typeof size === "number")
            size = `${size}px`;
        if (size instanceof elySize)
            size = `${size.value}px`;
        return this.css({ "font-size": size });
    }
    /**
     * Устанавливает толщину иконки
     * @param weight
     *
     * Используемые константы: {@link elyWeight}
     */
    iconWeight(weight) {
        return this.css({ "font-weight": weight.toString() });
    }
    /**
     * Вращение иконки
     * @param bool
     */
    iconSpinning(bool = true) {
        if (bool)
            this.addClass("fa-spin");
        else
            this.removeClass("fa-spin");
        return this;
    }
};
elyIconView = __decorate([
    designable("iconName", elyDesignableFieldState.GETSET, "string"),
    designable("iconSpinning", elyDesignableFieldState.SET, "boolean"),
    designable("iconWeight", elyDesignableFieldState.SET, "string|number", elyWeight.rawList()),
    designable("iconSize", elyDesignableFieldState.SET, "string|number", elySize.rawList())
], elyIconView);
var elyIconView$1 = elyIconView;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyRebuildableViewProtocol.ts                                        +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент, который может быть перестроен
 */
class elyRebuildableViewProtocol extends elyView {
    /**
     * Конструктор
     * @param options
     */
    constructor(options) {
        super(options);
        this.__denyRebuild = false;
    }
    /**
     * Запрещает или отменяет запрет перестроения
     * @param deny
     */
    denyRebuild(deny) {
        this.__denyRebuild = deny;
        return this;
    }
    /**
     * Выполняет перестроени элемента
     */
    rebuild() {
        if (!this.__denyRebuild)
            this.__rebuild();
        return this;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyObservableArray.ts                                                +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Массив
 */
class elyObservableArray extends elyObservableProperty {
    /**
     * Конструктор
     */
    constructor() {
        super([]);
    }
    /**
     * Возвращает массив
     */
    get() {
        return this.value || [];
    }
    /**
     * Регистрирует слушатель добавления нового элемента в массив
     * @param observer - слушатель
     */
    addNewItemObserver(observer) {
        return this.addObserver("add", observer);
    }
    /**
     * Регистрирует слушатель изменения элементов массива
     * @param observer - слушатель
     */
    addChangeItemsObserver(observer) {
        return this.addObserver("change", observer);
    }
    /**
     * Регистрирует слушатель очищения массива
     * @param observer - слушатель
     */
    addClearObserver(observer) {
        return this.addObserver("clear", observer);
    }
    /**
     * Регистрирует слушатель удаления элемента массива
     * @param observer - слушатель
     */
    addRemoveObserver(observer) {
        return this.addObserver("remove", observer);
    }
    /**
     * Добавляет элемент в массив
     * @param item
     */
    push(item) {
        this.value.push(item);
        this.notificate("change", [this.get()]);
        this.notificate("add", [item, this.value.length - 1]);
        return this;
    }
    /**
     * Добавляет элемент в массив по индексу
     * @param index
     * @param items
     */
    insert(index, ...items) {
        this.value.splice(index, 0, ...items);
        this.notificate("change", [this.get()]);
        this.notificate("add", [index, ...items]);
        return this;
    }
    /**
     * Добавляет элемент в массив
     * @param index
     */
    remove(index) {
        const item = this.item(index);
        this.value = this.value.splice(index, 1);
        this.notificate("change", [this.get()]);
        this.notificate("remove", [item]);
        return this;
    }
    /**
     * Возвращает элемент массива
     * @param {number} index
     */
    item(index) {
        return this.value[index];
    }
    /**
     * Возвращает последний элемент
     */
    last() {
        return this.value[this.value.length - 1];
    }
    /**
     * Возвращает длину массива
     */
    length() {
        return this.value.length;
    }
    /**
     * Возвращает true, если существует индекс
     * @param index
     */
    hasIndex(index) {
        return !!this.value[index];
    }
    /**
     * Возвращает индекс элемента в массиве или -1, если
     * элемент не найден
     */
    indexOf(item) {
        return this.value.indexOf(item);
    }
    /**
     * Возвращает true, если массив содержит item
     * @param item
     */
    hasItem(item) {
        return this.indexOf(item) > -1;
    }
    /**
     * Очищает массив
     */
    clear() {
        this.value = [];
        this.notificate("change", [this.get()]);
        this.notificate("clear", []);
        return this;
    }
    items() {
        return this.value;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyListView.ts                                                       +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Список
 */
class elyListView extends elyRebuildableViewProtocol {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(Object.assign({ tag: "ul", class: "ely-list" }, options));
        /**
         * Дополнительный класс для элементов списка
         * @ignore
         */
        this.__listClass = [];
        this.items = new elyObservableArray();
        this.items.addChangeItemsObserver(() => this.rebuild());
        if (options.listItemsClass) {
            if (typeof options.listItemsClass === "string")
                this.__listClass = options.listItemsClass.split(" ");
            else
                this.__listClass = options.listItemsClass;
        }
        if (options.items)
            for (const item of options.items)
                this.add(item);
    }
    /**
     * Устанавливает классы для всех элементов списка
     * @param {...string} className
     * @return {this}
     */
    setListItemsClassName(...className) {
        this.__listClass = className;
        return this;
    }
    /**
     * Добавляет элемент в список
     * @param item
     * @param index
     */
    add(item, index) {
        if (typeof item === "string")
            item = new elyTextView$1({ text: item });
        if (index === undefined)
            this.items.push(item);
        else
            this.items.insert(index, item);
        return this;
    }
    /**
     * Добавляет линюю
     * @param index
     */
    addLine(index) {
        if (index === undefined)
            this.items.push(new elyControl$1({ tag: "hr" }));
        else
            this.items.insert(index, new elyControl$1({ tag: "hr" }));
        return this;
    }
    /**
     * Добавляет наблюдатель отрисовки элементов
     * @param {function(index: number, listItemView: elyView, item: elyView)} o - наблюдатель
     */
    addItemWillDrawObserver(o) {
        this.addObserver("itemWillDraw", o);
        return this;
    }
    /**
     * Выполняет перестроение элементов
     */
    __rebuild() {
        this.removeViewContent();
        this.items.items().forEach((item, index) => {
            const listElement = new elyControl$1({ tag: "li", class: "ely-list-item" });
            if (this.__listClass)
                listElement.addClass(...this.__listClass);
            this.notificate("itemWillDraw", [index, listElement, item]);
            listElement.addSubView(item);
            this.getDocument().appendChild(listElement.getDocument());
        });
        return this;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyUIExt.ts                                                          +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Создает {@link elyTextView} элемент из строки
 * @param options - опции {@link elyTextViewOptions}
 */
String.prototype.textView = function (options) {
    return new elyTextView$1(Object.assign({ text: this }, options));
};
/**
 * Создает {@link elyButton} из строки
 * @param options - опции {@link elyButtonOptions}
 */
String.prototype.button = function (options) {
    return new elyButton$1(Object.assign({ text: this }, options));
};
/**
 * Создает {@link elyIconView} из строки
 * @param options - опции {@link elyIconViewOptions}
 */
String.prototype.iconView = function (options) {
    return new elyIconView$1(Object.assign({ iconName: this }, options));
};
/**
 * Преборазует массив в Flex сетку
 */
Array.prototype.flexGridView = function () {
    const grid = new elyGridView();
    if (this[0] instanceof elyView) {
        grid.add(...this);
    }
    else {
        for (const row of this) {
            grid.add(...row);
        }
    }
    return grid;
};
/**
 * Содает {@link elyListView} из массива строк или элементов
 * @param options - опции {@link elyListViewOptions}
 */
Array.prototype.listView = function (options) {
    return new elyListView(Object.assign({ items: this }, options));
};
/**
 * Создает оповещение
 * @function
 * @param {string} text - текст оповещения
 * @param {string?} title - заголовок оповещения
 * @param {string?} content - контента
 */
Window.prototype.notifi = (text, title, content) => {
    new elyNotificationView({ title, message: text, content }).present();
};

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyStaticGridView.ts                                                 +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var elyStaticGridView_1;
/**
 * Элемент отображения: статичная сетка
 *
 * Обсерверы:
 * - col (colView, location, view)
 * @class elyStaticGridView
 * @augments elyRebuildableViewProtocol
 */
let elyStaticGridView = elyStaticGridView_1 = class elyStaticGridView extends elyRebuildableViewProtocol {
    /**
     * Конструктор
     * @param {{rowsCount?: number, colsCount?: number, flexMap?: *, flexMapValues?: *}} options
     */
    constructor(options = {}) {
        super(options);
        /**
         * Флекс карта
         * @ignore
         */
        this.flexMapProperty = [];
        this.denyRebuild(true);
        this.flexContentView = new elyControl$1();
        this.getDocument().append(this.flexContentView.getDocument());
        this.views = new elyObservableArray();
        this.views.change(() => this.rebuild());
        this.rowsCountProperty = new elyObservableProperty(3);
        this.rowsCountProperty.change(() => this.rebuild());
        this.colsCountProperty = new elyObservableProperty(3);
        this.colsCountProperty.change(() => this.rebuild());
        this.rowsCount(options.rowsCount || 3);
        this.colsCount(options.colsCount || 3);
        this.addClass(this.identifier());
        if (options.flexMapValues)
            this.flexMap(...options.flexMapValues);
        if (options.flexMap)
            this.flexMap(...options.flexMap);
        this.setItemsMargin(options.margin || { top: 5, bottom: 5, left: 5, right: 5 });
        this.denyRebuild(false);
        this.rebuild();
    }
    /**
     * Возвращает позицию элемента
     * @param index
     * @param rowsCount
     * @param colsCount
     */
    static indexIn(index, rowsCount, colsCount) {
        if (index > -1) {
            const rowIndex = Math.floor(index / rowsCount);
            const colIndex = index - (rowIndex * colsCount);
            return { row: rowIndex, col: colIndex, index };
        }
        return { row: -1, col: -1, index: -1 };
    }
    /**
     * Устанавливает внитринний отступ элементов сетки
     * @param margin
     */
    setItemsMargin(margin) {
        margin = Object.assign({ top: 0, bottom: 0, left: 0, right: 0 }, margin);
        const styles = {};
        elyUtils.applySrc(margin, ["top", "bottom", "left", "right"], styles, "margin-", (val) => {
            return typeof val === "string" ? val : val + "px";
        });
        elyStylesheet.global.addClass(this.identifier() + " .item", styles);
        return this;
    }
    /**
     * Возвращает количество flexMap значений
     */
    flexMapValuesCount() {
        return this.colsCount();
    }
    /**
     * Устанавливает или возвращает элементы flexMap
     * @param index
     * @param value
     */
    flexMapValues(index, value) {
        if (index === undefined && value === undefined)
            return this.flexMapProperty;
        if (index !== undefined && index !== null) {
            if (value === undefined)
                return this.flexMapProperty[index] || "auto";
            if (typeof value === "string") {
                value = value.trim();
                if (/-?([0-9.])(px|%|rem)/.test(value)) {
                    this.flexMapProperty[index] = value;
                }
                else {
                    this.flexMapProperty[index] = value + "%";
                }
            }
            else if (typeof value === "number") {
                this.flexMapProperty[index] = `${value}%`;
            }
            else {
                this.flexMapProperty[index] = "auto";
            }
            this.rebuild();
        }
        return this;
    }
    /**
     * Устанавливает флекс карту
     * @param data
     */
    flexMap(...data) {
        if (data !== undefined && data && data.length > 0) {
            data.forEach((value, index) => {
                if (typeof value === "string") {
                    value = value.trim();
                    if (/-?([0-9.])(px|%|rem)/.test(value)) {
                        this.flexMapProperty[index] = value;
                    }
                    else {
                        this.flexMapProperty[index] = value + "%";
                    }
                }
                else if (typeof value === "number") {
                    this.flexMapProperty[index] = `${value}%`;
                }
                else {
                    this.flexMapProperty[index] = "auto";
                }
            });
            this.rebuild();
            return this;
        }
        return this.flexMapProperty;
    }
    /**
     * Возвращает и устанавливает количество строк
     */
    rowsCount(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.rowsCountProperty);
    }
    /**
     * Возвращает и устанавливает количество колонок в строке
     */
    colsCount(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.colsCountProperty);
    }
    /**
     * Добавляет элементы
     * @param views
     */
    add(...views) {
        views.forEach(value => this.views.push(value));
    }
    /**
     * Возвращает позицию элемента
     * @param view
     */
    viewLocation(view) {
        const index = this.views.indexOf(view);
        return elyStaticGridView_1.indexIn(index, this.rowsCount(), this.colsCount());
    }
    __rebuild() {
        this.removeViewContent();
        for (let i = 0; i < this.rowsCount(); i++) {
            const rowView = new elyControl$1();
            rowView.addClass("ef-flex-box", "row");
            for (let j = 0; j < this.colsCount(); j++) {
                const index = i * (this.colsCount()) + j;
                const colView = new elyControl$1({ class: "item" });
                const flexSize = this.flexMapProperty[j] || `${100 / this.colsCount()}%`;
                colView.getStyle().flex = `1 1 ${flexSize}`;
                this[`contentView${index}`] = colView;
                const view = this.views.item(index);
                if (view) {
                    colView.addSubView(this.views.item(index));
                }
                rowView.addSubView(colView);
                this.notificate("col", [colView, { col: j, row: i, index },
                    view]);
            }
            this.getDocument().append(rowView.getDocument());
        }
        this.notificate("rebuild", []);
        return this;
    }
};
elyStaticGridView = elyStaticGridView_1 = __decorate([
    designable("rowsCount", elyDesignableFieldState.GETSET, "number"),
    designable("colsCount", elyDesignableFieldState.GETSET, "number"),
    designable("flexMapValues", elyDesignableFieldState.GETSET, "[string]")
], elyStaticGridView);
var elyStaticGridView$1 = elyStaticGridView;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyLinkTextView.ts                                                   +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Текст ссылкой
 * @version 1.0
 * @class elyLinkTextView
 */
let elyLinkTextView = class elyLinkTextView extends elyTextView$1 {
    /**
     * Конструктор
     * @param {elyTextViewOptions|url:String} options
     */
    constructor(options = {}) {
        super(Object.assign({ tag: "a" }, options));
        this.urlProperty = new elyObservableProperty();
        this.urlProperty.change((newValue) => this.attribute("href", newValue));
        if (options.url)
            this.url(options.url);
        else
            this.url("#");
    }
    /**
     * Устанавливает или возвращает URL
     * @param value
     */
    url(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.urlProperty);
    }
};
elyLinkTextView = __decorate([
    designable("url", elyDesignableFieldState.GETSET, "string"),
    designable("text", elyDesignableFieldState.GETSET)
], elyLinkTextView);
var elyLinkTextView$1 = elyLinkTextView;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyImageView.ts                                                      +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Изображение
 * @version 1.0
 *
 * Events:
 * - loaded: Изображение загружено
 */
let elyImageView = class elyImageView extends elyView {
    /**
     * Конструтор
     * @param options
     */
    constructor(options = {}) {
        super(Object.assign({ tag: "img" }, options));
        this.urlProperty = new elyObservableProperty(null);
        this.getDocument().onload = (e) => this.notificate("loaded", [e]);
        this.urlProperty.change((newValue) => this.getDocument().src = newValue);
        if (options.url)
            this.url(options.url);
    }
    /**
     * Устанавливает или возвращает ссылку на изображение
     * @param str
     */
    url(str) {
        return elyObservableProperty.simplePropertyAccess(this, str, this.urlProperty);
    }
    /**
     * Возвращает корневой элемент
     */
    getDocument() {
        return this.__view;
    }
};
elyImageView = __decorate([
    designable("url", elyDesignableFieldState.GETSET, "string")
], elyImageView);
var elyImageView$1 = elyImageView;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyPanelView.ts                                                      +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Панель
 */
let elyPanelView = class elyPanelView extends elyControl$1 {
    /**
     * Инициилизирует объект
     * @param options
     */
    constructor(options = {}) {
        let subviews = [];
        if (options.subviews) {
            subviews = options.subviews;
            options.subviews = [];
        }
        super(Object.assign({ class: "ef-panel" }, options));
        this.titleView = new elyTextView$1({ class: "ef-panel-title", text: options.title || "Panel" });
        this.contentView = new elyControl$1({ class: "ef-panel-content", subviews });
        this.descriptionView = new elyControl$1({ class: "ef-panel-description" });
        this.panelStyleProperty = new elyObservableProperty();
        this.panelStyleProperty.change((newValue, oldValue) => {
            if (oldValue) {
                this.titleView.removeClass(`bg-${oldValue.value}`);
                this.removeClass(`brd-${oldValue.value}`);
            }
            this.titleView.addClass(`bg-${newValue.value}`);
            this.addClass(`brd-${newValue.value}`);
        });
        this.panelStyle(options.panelStyle || elyStyle.default);
        this.addSubView(this.titleView);
        this.addSubView(this.contentView);
        this.addSubView(this.descriptionView);
        this.titleView.textCenter(true);
    }
    /**
     * Возвращает или устанавливает заголвок
     * @param value
     */
    title(value) {
        if (value === undefined)
            return this.titleView.text();
        this.titleView.text(value);
        return this;
    }
    /**
     * Возвращает и устанавливает стиль панели
     */
    panelStyle(value) {
        if (typeof value === "string")
            value = elyStyle.byName(value);
        return elyObservableProperty.simplePropertyAccess(this, value, this.panelStyleProperty);
    }
};
elyPanelView = __decorate([
    designable("title", elyDesignableFieldState.GETSET, "string"),
    designable("panelStyle", elyDesignableFieldState.GETSET, "string", elyStyle.rawList()),
    designable("contentView", elyDesignableFieldState.VIEW),
    designable("descriptionView", elyDesignableFieldState.VIEW)
], elyPanelView);
var elyPanelView$1 = elyPanelView;

/*
 *
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *   ,--. o                   |    o
 *   |   |.,---.,---.,---.    |    .,---.,---.
 *   |   |||---'|   ||   |    |    ||   ||   |
 *   `--' ``---'`---|`---'    `---'``   '`---|
 *              `---'                    `---'
 *
 * Copyright (C) 2016-2019, Yakov Panov (Yakov Ling)
 * Mail: <diegoling33@gmail.com>
 *
 * Это программное обеспечение имеет лицензию, как это сказано в файле
 * COPYING, который Вы должны были получить в рамках распространения ПО.
 *
 * Использование, изменение, копирование, распространение, обмен/продажа
 * могут выполняться исключительно в согласии с условиями файла COPYING.
 *
 * Файл: elyXLogger* Файл создан: 04.12.2018 07:03:21
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 */
/**
 * elyXLogger - логгер уровня X
 */
class elyXLogger {
    /**
     * Конструктор
     * @param props
     */
    constructor(props = {}) {
        /**
         * Запись логов в файл
         */
        this.writeLogs = false;
        /**
         * Главный префикс
         */
        this.mainPrefix = "";
        this.mainPrefix = props.mainPrefix || "ely";
        this.writeLogs = props.writeLogs || false;
        this.clear = props.clear || false;
    }
    /**
     * Формирует строку `[ OK ]` или `[ NO ]` в зависимости от условия
     * @param {boolean} condition
     * @return {string}
     */
    static getOkNoString(condition) {
        if (condition) {
            return "[ OK ]";
        }
        else {
            return "[ NO ]";
        }
    }
    /**
     * Filters the logger message
     *
     * @param {string} msg - the message
     * @param {boolean} [clearfix = false] - if true: color tags will remove
     *                                       else it will be evaluated
     *
     * @return {string} - evaluated of cleared message
     * @private
     */
    static __loggerFilter(msg, clearfix = false) {
        msg = msg.replace(/&rst/g, clearfix ? "" : elyXLogger.styles.reset);
        msg = msg.replace(/&red/g, clearfix ? "" : elyXLogger.styles.fgRed);
        msg = msg.replace(/&grn/g, clearfix ? "" : elyXLogger.styles.fgGreen);
        msg = msg.replace(/&cyn/g, clearfix ? "" : elyXLogger.styles.fgCyan);
        msg = msg.replace(/&gre/g, clearfix ? "" : elyXLogger.styles.fgGrey);
        msg = msg.replace(/&blu/g, clearfix ? "" : elyXLogger.styles.fgBlue);
        msg = msg.replace(/&ywl/g, clearfix ? "" : elyXLogger.styles.fgYellow);
        msg = msg.replace(/&mgn/g, clearfix ? "" : elyXLogger.styles.fgMagenta);
        msg = msg.replace(/&uns/g, clearfix ? "" : elyXLogger.styles.underscore);
        return msg;
    }
    /**
     * Отображает сообщение в консоль
     * @param {String} msg
     */
    log(msg) {
        if (elyXLogger.loggerLevel >= elyXLogger.loggerLevels.LOG)
            this._sendToConsole(msg, ["Log"]);
    }
    /**
     * Отображает сообщение в консоль от имени модуля module
     *
     * @param {String} module - модуль
     * @param {String} msg - сообщение
     */
    mod(module, msg) {
        if (elyXLogger.loggerLevel >= elyXLogger.loggerLevels.LOG)
            this._sendToConsole(msg, ["Module", [elyXLogger.styles.fgMagenta, module]]);
    }
    /**
     * Отображает сообщение об ошибке
     * @param {String} msg
     */
    error(msg) {
        if (elyXLogger.loggerLevel >= elyXLogger.loggerLevels.DEBUG)
            this._sendToConsole(msg, [[elyXLogger.styles.fgRed, "Error"]]);
    }
    /**
     * Отображает предупреждение
     * @param {String} msg
     */
    warning(msg) {
        if (elyXLogger.loggerLevel >= elyXLogger.loggerLevels.DEBUG)
            this._sendToConsole(msg, [[elyXLogger.styles.fgMagenta, "Warning"]]);
    }
    /**
     * Выводит LOG информацию
     *
     * @param {string} message  - the message
     * @param {Array} prefixes - the array with the prefixes
     *
     * "prefixes" could be like:
     *
     *  1. [ "Log" ]                                - Simple
     *  2. [ "Module", "Test" ]                     - Tree
     *  3. [ "Module", [ "\x1b[32m", "Test" ] ]     - Tree with the color
     *
     *  @private
     */
    _sendToConsole(message, prefixes) {
        if (this.mainPrefix !== "") {
            const _temp = [[elyXLogger.styles.fgCyan, this.mainPrefix]];
            for (const _prefix of prefixes)
                _temp.push(_prefix);
            prefixes = _temp;
        }
        const dateString = new Date().toISOString().replace(/T/, " "). // replace T with a space
            replace(/\..+/, "");
        let _prefixToDisplay = "";
        let _clearPrefix = "";
        for (let _prefix of prefixes) {
            let _color = this.clear ? "" : elyXLogger.styles.fgGreen;
            if (_prefix instanceof Array) {
                _color = _prefix[0];
                _prefix = _prefix[1];
            }
            _prefixToDisplay += "[" + (!this.clear ? _color : "") + _prefix +
                (!this.clear ? elyXLogger.styles.reset : "") + "]";
            _clearPrefix += "[" + _prefix + "]";
        }
        const str = "[" + dateString + "]" + _clearPrefix + ": " + elyXLogger.__loggerFilter(message, true);
        const strToDisplay = "["
            + (!this.clear ? elyXLogger.styles.fgGrey : "")
            + dateString
            + (!this.clear ? elyXLogger.styles.reset : "")
            + "]"
            + _prefixToDisplay
            + (!this.clear ? elyXLogger.styles.reset : "")
            + ": " + elyXLogger.__loggerFilter(message) + (this.clear ? "" : elyXLogger.styles.reset);
        this._saveLogString(str);
        if (this.clear)
            console.log(elyXLogger.__loggerFilter(strToDisplay, true));
        else
            console.log(strToDisplay);
    }
    /**
     * Записывает данные в файл
     *
     * @param {string} str
     * @private
     */
    _saveLogString(str) {
        // if (this.writeLogs)
        //     require("fs").appendFile("./logs/logger0.log", str + "\n", () => { /* Nothing is done. */
        //     });
    }
}
/**
 * Стандартный логгер
 */
elyXLogger.default = new elyXLogger({ mainPrefix: "Default" });
/**
 * Уровни логирования
 */
elyXLogger.loggerLevels = {
    DEBUG: 2,
    LOG: 1,
    NONE: 0,
};
/**
 * Текущий уровень логирования
 */
elyXLogger.loggerLevel = elyXLogger.loggerLevels.DEBUG;
/**
 * Стили
 */
elyXLogger.styles = {
    /**
     * Сбрасывает любой примененный эффект
     * @type {string}
     */
    reset: "\x1b[0m",
    /**
     * Делает цвет ярче
     * @type {string}
     */
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    /**
     * Подчернутый текст
     * @type {string}
     */
    underscore: "\x1b[4m",
    /**
     * Мигающий текст
     * @type {string}
     */
    blink: "\x1b[5m",
    /**
     * Скрытый текст
     */
    hidden: "\x1b[8m",
    /**
     * Развернутый текст
     */
    reverse: "\x1b[7m",
    /**
     * Font color: Black
     * @type {string}
     */
    fgBlack: "\x1b[30m",
    /**
     * Font color: Red
     * @type {string}
     */
    fgRed: "\x1b[31m",
    /**
     * Font color: Green
     * @type {string}
     */
    fgGreen: "\x1b[32m",
    /**
     * Font color: Yellow
     * @type {string}
     */
    fgYellow: "\x1b[33m",
    /**
     * Font color: Blue
     * @type {string}
     */
    fgBlue: "\x1b[34m",
    /**
     * Font color: Magenta
     * @type {string}
     */
    fgMagenta: "\x1b[35m",
    /**
     * Font color: Cyan
     * @type {string}
     */
    fgCyan: "\x1b[36m",
    /**
     * Font color: White
     * @type {string}
     */
    fgWhite: "\x1b[37m",
    /**
     * Font color: Grey
     * @type {string}
     */
    fgGrey: "\x1b[37m",
    /**
     * Background color: Black
     * @type {string}
     */
    bgBlack: "\x1b[40m",
    /**
     * Background color: Red
     * @type {string}
     */
    bgRed: "\x1b[41m",
    /**
     * Background color: Green
     * @type {string}
     */
    bgGreen: "\x1b[42m",
    /**
     * Background color: Yellow
     * @type {string}
     */
    bgYellow: "\x1b[43m",
    /**
     * Background color: Blue
     * @type {string}
     */
    bgBlue: "\x1b[44m",
    /**
     * Background color: Magenta
     * @type {string}
     */
    bgMagenta: "\x1b[45m",
    /**
     * Background color: Cyan
     * @type {string}
     */
    bgCyan: "\x1b[46m",
    /**
     * Background color: White
     * @type {string}
     */
    bgWhite: "\x1b[47m",
};

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
 + Файл: elyAxis                                                              +
 + Файл изменен: 28.12.2018 01:03:22                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Перечисление направлений в измерении
 */
class elyAxis {
}
/**
 * Направление X
 */
elyAxis.x = "x";
/**
 * Направление Y
 */
elyAxis.y = "y";
/**
 * Направление Z
 */
elyAxis.z = "z";

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
 + Файл: elyDirection.ts                                                +
 + Файл изменен: 28.12.2018 01:05:58                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Перечисление направлений
 * @class elyDirection
 * @augments {elyEnum<string>}
 */
class elyDirection extends elyEnum {
    /**
     * Конструктор
     * @ignore
     * @param val
     */
    constructor(val) {
        super(val);
    }
    /**
     * Список
     */
    static rawList() {
        return {
            bottom: elyDirection.bottom.value,
            left: elyDirection.left.value,
            right: elyDirection.right.value,
            top: elyDirection.top.value,
        };
    }
    /**
     * Список
     */
    static list() {
        return {
            bottom: elyDirection.bottom,
            left: elyDirection.left,
            right: elyDirection.right,
            top: elyDirection.top,
        };
    }
}
/**
 * Наверх
 */
elyDirection.up = new elyDirection("top");
/**
 * Наверх
 */
elyDirection.down = new elyDirection("bottom");
/**
 * Наверх
 */
elyDirection.top = new elyDirection("top");
/**
 * Вниз
 */
elyDirection.bottom = new elyDirection("bottom");
/**
 * Налево
 */
elyDirection.left = new elyDirection("left");
/**
 * Направо
 */
elyDirection.right = new elyDirection("right");

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: color.picker.ts                                                      +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
(function (win, doc, NS) {
    var instance = '__instance__', first = 'firstChild', delay = setTimeout;
    function edge(a, b, c) {
        if (a < b)
            return b;
        if (a > c)
            return c;
        return a;
    }
    function num(i, j) {
        return parseInt(i, j || 10);
    }
    function HSV2RGB(a) {
        const rgb = elyColorUtils.hsv2rgb({ hue: +a[0], saturation: +a[1], value: +a[2] });
        return [Math.round(rgb.red * 255), Math.round(rgb.green * 255), Math.round(rgb.blue * 255)];
    }
    function HSV2HEX(a) {
        return RGB2HEX(HSV2RGB(a));
    }
    function RGB2HSV(a) {
        const res = elyColorUtils.rgb2hsv({ red: +a[0], green: +a[1], blue: +a[2] });
        return [res.hue, res.saturation, res.value];
    }
    function RGB2HEX(a) {
        return elyColorUtils.rgb2hex({ red: +a[0], green: +a[1], blue: +a[2] });
    }
    // rrggbb or rgb //ok
    // @ts-ignore
    function HEX2HSV(s) {
        return RGB2HSV(HEX2RGB(s));
    }
    //OK
    function HEX2RGB(s) {
        if (s.length === 3) {
            s = s.replace(/./g, '$&$&');
        }
        return [num(s[0] + s[1], 16), num(s[2] + s[3], 16), num(s[4] + s[5], 16)];
    }
    // convert range from `0` to `360` and `0` to `100` in color into range from `0` to `1`
    function _2HSV_pri(a) {
        return [+a[0] / 360, +a[1] / 100, +a[2] / 100];
    }
    // convert range from `0` to `1` into `0` to `360` and `0` to `100` in color
    function _2HSV_pub(a) {
        return [Math.round(+a[0] * 360), Math.round(+a[1] * 100), Math.round(+a[2] * 100)];
    }
    // convert range from `0` to `255` in color into range from `0` to `1`
    function _2RGB_pri(a) {
        return [+a[0] / 255, +a[1] / 255, +a[2] / 255];
    }
    // *
    function parse(x) {
        if (typeof x === "object")
            return x;
        var rgb = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(x), hsv = /\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(x), hex = x[0] === '#' && x.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
        if (hex) {
            return HEX2HSV(x.slice(1));
        }
        else if (hsv) {
            return _2HSV_pri([+hsv[1], +hsv[2], +hsv[3]]);
        }
        else if (rgb) {
            return RGB2HSV([+rgb[1], +rgb[2], +rgb[3]]);
        }
        return [0, 1, 1]; // default is red
    }
    (function ($) {
        // plugin version
        // @ts-ignore
        $.version = '1.4.0';
        // collect all instance(s)
        // @ts-ignore
        $[instance] = {};
        // plug to all instance(s)
        // @ts-ignore
        $.each = function (fn, t) {
            return delay(function () {
                // @ts-ignore
                var ins = $[instance], i;
                for (i in ins) {
                    fn.call(ins[i], i, ins);
                }
            }, t === 0 ? 0 : (t || 1)), $;
        };
        // static method(s)
        // @ts-ignore
        $.parse = parse;
        // @ts-ignore
        $._HSV2RGB = HSV2RGB;
        // @ts-ignore
        $._HSV2HEX = HSV2HEX;
        // @ts-ignore
        $._RGB2HSV = RGB2HSV;
        // @ts-ignore
        $._HEX2HSV = HEX2HSV;
        // @ts-ignore
        $._HEX2RGB = function (a) {
            return _2RGB_pri(HEX2RGB(a));
        };
        // @ts-ignore
        $.HSV2RGB = function (a) {
            return HSV2RGB(_2HSV_pri(a));
        };
        // @ts-ignore
        $.HSV2HEX = function (a) {
            return HSV2HEX(_2HSV_pri(a));
        };
        // @ts-ignore
        $.RGB2HSV = function (a) {
            return _2HSV_pub(RGB2HSV(a));
        };
        // @ts-ignore
        $.RGB2HEX = RGB2HEX;
        // @ts-ignore
        $.HEX2HSV = function (s) {
            return _2HSV_pub(HEX2HSV(s));
        };
        // @ts-ignore
        $.HEX2RGB = HEX2RGB;
        // @ts-ignore
    })(win[NS] = function (source, events, parent) {
        var b = doc.body, h = doc.documentElement, $ = this, 
        // @ts-ignore
        $$ = win[NS], _ = false, hooks = {}, self = doc.createElement('div'), on_down = "touchstart mousedown", on_move = "touchmove mousemove", on_up = "touchend mouseup", on_resize = "orientationchange resize";
        // return a new instance if `CP` was called without the `new` operator
        if (!($ instanceof $$)) {
            return new $$(source, events);
        }
        // store color picker instance to `CP.__instance__`
        $$[instance][source.id || source.name || elyUtils.count($$[instance])] = $;
        // trigger color picker panel on click by default
        if (!elyGuard.isSet(events) || events === true) {
            events = on_down;
        }
        // add event
        function on(ev, el, fn) {
            ev = ev.split(/\s+/);
            for (var i = 0, ien = ev.length; i < ien; ++i) {
                el.addEventListener(ev[i], fn, false);
            }
        }
        // remove event
        function off(ev, el, fn) {
            ev = ev.split(/\s+/);
            for (var i = 0, ien = ev.length; i < ien; ++i) {
                el.removeEventListener(ev[i], fn);
            }
        }
        // get mouse/finger coordinate
        function point(el, e) {
            var T = 'touches', X = 'clientX', Y = 'clientY', x = !!e[T] ? e[T][0][X] : e[X], y = !!e[T] ? e[T][0][Y] : e[Y], o = offset(el);
            return {
                x: x - o.l,
                y: y - o.t
            };
        }
        // get position
        function offset(el) {
            var left, top, rect;
            if (el === win) {
                // @ts-ignore
                left = win.pageXOffset || h.scrollLeft;
                // @ts-ignore
                top = win.pageYOffset || h.scrollTop;
            }
            else {
                rect = el.getBoundingClientRect();
                left = rect.left;
                top = rect.top;
            }
            return {
                l: left,
                t: top
            };
        }
        // get closest parent
        function closest(a, b) {
            while ((a = a.parentElement) && a !== b)
                ;
            return a;
        }
        // prevent default
        function prevent(e) {
            if (e)
                e.preventDefault();
        }
        // get dimension
        function size(el) {
            return el === win ? {
                w: win.innerWidth,
                h: win.innerHeight
            } : {
                w: el.offsetWidth,
                h: el.offsetHeight
            };
        }
        // get color data
        function get_data(a) {
            return _ || (elyGuard.isSet(a) ? a : false);
        }
        // set color data
        function set_data(a) {
            _ = a;
        }
        // add hook
        function add(ev, fn, id) {
            if (!elyGuard.isSet(ev))
                return hooks;
            // @ts-ignore
            if (!elyGuard.isSet(fn))
                return hooks[ev];
            // @ts-ignore
            if (!elyGuard.isSet(hooks[ev]))
                hooks[ev] = {};
            // @ts-ignore
            if (!elyGuard.isSet(id))
                id = elyUtils.count(hooks[ev]);
            // @ts-ignore
            return hooks[ev][id] = fn, $;
        }
        // remove hook
        function remove(ev, id) {
            if (!elyGuard.isSet(ev))
                return hooks = {}, $;
            // @ts-ignore
            if (!elyGuard.isSet(id))
                return hooks[ev] = {}, $;
            // @ts-ignore
            return delete hooks[ev][id], $;
        }
        // trigger hook
        function trigger(ev, a, id) {
            // @ts-ignore
            if (!elyGuard.isSet(hooks[ev]))
                return $;
            if (!elyGuard.isSet(id)) {
                // @ts-ignore
                for (var i in hooks[ev]) {
                    // @ts-ignore
                    hooks[ev][i].apply($, a);
                }
            }
            else {
                // @ts-ignore
                if (elyGuard.isSet(hooks[ev][id])) {
                    // @ts-ignore
                    hooks[ev][id].apply($, a);
                }
            }
            return $;
        }
        // initialize data ...
        set_data($$.parse(source.getAttribute('data-color') || source.value || [0, 1, 1]));
        // generate color picker pane ...
        self.className = 'color-picker';
        self.innerHTML = '<div class="color-picker-container"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';
        // @ts-ignore
        var c = self[first].children, HSV = get_data([0, 1, 1]), // default is red
        H = c[0], SV = c[1], H_point = H[first], SV_point = SV[first], start_H = 0, start_SV = 0, drag_H = 0, drag_SV = 0, left = 0, top = 0, P_W = 0, P_H = 0, v = HSV2HEX(HSV), 
        // @ts-ignore
        set;
        // on update ...
        function trigger_(k, x) {
            if (!k || k === "h") {
                // @ts-ignore
                trigger("change:h", x);
            }
            if (!k || k === "sv") {
                // @ts-ignore
                trigger("change:sv", x);
            }
            // @ts-ignore
            trigger("change", x);
        }
        // is visible?
        function visible() {
            return self.parentNode;
        }
        // create
        function create(first, bucket) {
            if (!first) {
                // @ts-ignore
                (parent || bucket || b).appendChild(self), $.visible = true;
            }
            function click(e) {
                const t = e.target, is_source = t === source || closest(t, source) === source;
                if (is_source) {
                    // @ts-ignore
                    create();
                }
                else {
                    // @ts-ignore
                    $.exit();
                }
                // @ts-ignore
                trigger(is_source ? "enter" : "exit", [$]);
            }
            P_W = size(self).w;
            P_H = size(self).h;
            var SV_size = size(SV), SV_point_size = size(SV_point), H_H = size(H).h, SV_W = SV_size.w, SV_H = SV_size.h, H_point_H = size(H_point).h, SV_point_W = SV_point_size.w, SV_point_H = SV_point_size.h;
            if (first) {
                self.style.left = self.style.top = '-9999px';
                if (events !== false) {
                    on(events, source, click);
                }
                // @ts-ignore
                $.create = function () {
                    // @ts-ignore
                    return create(1), trigger("create", [$]), $;
                };
                // @ts-ignore
                $.destroy = function () {
                    if (events !== false) {
                        off(events, source, click);
                    }
                    // @ts-ignore
                    $.exit(), set_data(false);
                    // @ts-ignore
                    return trigger("destroy", [$]), $;
                };
            }
            else {
                fit();
            }
            set = function () {
                // @ts-ignore
                HSV = get_data(HSV), color();
                H_point.style.top = (H_H - (H_point_H / 2) - (H_H * +HSV[0])) + 'px';
                SV_point.style.right = (SV_W - (SV_point_W / 2) - (SV_W * +HSV[1])) + 'px';
                SV_point.style.top = (SV_H - (SV_point_H / 2) - (SV_H * +HSV[2])) + 'px';
            };
            // @ts-ignore
            $.exit = function (e) {
                if (visible()) {
                    // @ts-ignore
                    visible().removeChild(self);
                    // @ts-ignore
                    $.visible = false;
                }
                off(on_down, H, down_H);
                off(on_down, SV, down_SV);
                off(on_move, doc, move);
                off(on_up, doc, stop);
                off(on_resize, win, fit);
                return $;
            };
            function color(e) {
                var a = HSV2RGB(HSV), b = HSV2RGB([HSV[0], 1, 1]);
                SV.style.backgroundColor = 'rgb(' + b.join(',') + ')';
                set_data(HSV);
                prevent(e);
            }
            set();
            function do_H(e) {
                var y = edge(point(H, e).y, 0, H_H);
                HSV[0] = (H_H - y) / H_H;
                H_point.style.top = (y - (H_point_H / 2)) + 'px';
                color(e);
            }
            function do_SV(e) {
                var o = point(SV, e), x = edge(o.x, 0, SV_W), y = edge(o.y, 0, SV_H);
                HSV[1] = 1 - ((SV_W - x) / SV_W);
                HSV[2] = (SV_H - y) / SV_H;
                SV_point.style.right = (SV_W - x - (SV_point_W / 2)) + 'px';
                SV_point.style.top = (y - (SV_point_H / 2)) + 'px';
                color(e);
            }
            function move(e) {
                if (drag_H) {
                    do_H(e), v = HSV2HEX(HSV);
                    if (!start_H) {
                        // @ts-ignore
                        trigger("drag:h", [v, $]);
                        // @ts-ignore
                        trigger("drag", [v, $]);
                        trigger_("h", [v, $]);
                    }
                }
                if (drag_SV) {
                    do_SV(e), v = HSV2HEX(HSV);
                    if (!start_SV) {
                        // @ts-ignore
                        trigger("drag:sv", [v, $]);
                        // @ts-ignore
                        trigger("drag", [v, $]);
                        trigger_("sv", [v, $]);
                    }
                }
                start_H = 0,
                    start_SV = 0;
            }
            // @ts-ignore
            function stop(e) {
                var t = e.target, k = drag_H ? "h" : "sv", a = [HSV2HEX(HSV), $], is_source = t === source || closest(t, source) === source, is_self = t === self || closest(t, self) === self;
                if (!is_source && !is_self) {
                    // click outside the source or picker element to exit
                    // @ts-ignore
                    if (visible() && events !== false)
                        $.exit(), trigger("exit", [$]), trigger_(0, a);
                }
                else {
                    if (is_self) {
                        // @ts-ignore
                        trigger("stop:" + k, a);
                        // @ts-ignore
                        trigger("stop", a);
                        trigger_(k, a);
                    }
                }
                drag_H = 0,
                    drag_SV = 0;
            }
            // @ts-ignore
            function down_H(e) {
                start_H = 1,
                    drag_H = 1,
                    move(e), prevent(e);
                // @ts-ignore
                trigger("start:h", [v, $]);
                // @ts-ignore
                trigger("start", [v, $]);
                trigger_("h", [v, $]);
            }
            // @ts-ignore
            function down_SV(e) {
                start_SV = 1,
                    drag_SV = 1,
                    move(e), prevent(e);
                // @ts-ignore
                trigger("start:sv", [v, $]);
                // @ts-ignore
                trigger("start", [v, $]);
                trigger_("sv", [v, $]);
            }
            if (!first) {
                on(on_down, H, down_H);
                on(on_down, SV, down_SV);
                on(on_move, doc, move);
                on(on_up, doc, stop);
                on(on_resize, win, fit);
            }
            // @ts-ignore
        }
        // @ts-ignore
        create(1);
        delay(function () {
            var a = [HSV2HEX(HSV), $];
            // @ts-ignore
            trigger("create", a);
            trigger_(0, a);
        }, 0);
        // fit to window
        // @ts-ignore
        $.fit = function (o) {
            var w = size(win), y = size(h), screen_w = w.w - y.w, // vertical scroll bar
            // @ts-ignore
            screen_h = w.h - h.clientHeight, // horizontal scroll bar
            ww = offset(win), to = offset(source);
            left = to.l + ww.l;
            top = to.t + ww.t + size(source).h; // drop!
            if (typeof o === "object") {
                elyGuard.isSet(o[0]) && (left = o[0]);
                elyGuard.isSet(o[1]) && (top = o[1]);
            }
            else {
                var min_x = ww.l, min_y = ww.t, max_x = ww.l + w.w - P_W - screen_w, max_y = ww.t + w.h - P_H - screen_h;
                left = edge(left, min_x, max_x) >> 0;
                top = edge(top, min_y, max_y) >> 0;
            }
            self.style.left = left + 'px';
            self.style.top = top + 'px';
            // @ts-ignore
            return trigger("fit", [$]), $;
        };
        // for event listener ID
        function fit() {
            // @ts-ignore
            return $.fit();
        }
        // set hidden color picker data
        // @ts-ignore
        $.set = function (a) {
            // @ts-ignore
            if (a === undefined)
                return get_data();
            if (typeof a === "string") {
                a = $$.parse(a);
            }
            // @ts-ignore
            return set_data(a), set(), $;
        };
        // alias for `$.set()`
        // @ts-ignore
        $.get = function (a) {
            return get_data(a);
        };
        // register to global ...
        // @ts-ignore
        $.source = source;
        // @ts-ignore
        $.self = self;
        // @ts-ignore
        $.visible = false;
        // @ts-ignore
        $.on = add;
        // @ts-ignore
        $.off = remove;
        // @ts-ignore
        $.fire = trigger;
        // @ts-ignore
        $.hooks = hooks;
        // @ts-ignore
        $.enter = function (bucket) {
            return create(0, bucket);
        };
        // return the global object
        return $;
    });
})(window, document, 'CP');

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyColorPickerField.ts                                               +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * @class elyColorPickerField
 * @augments {elyField<string>}
 * Поле выблора цвета
 *
 *
 *     // Создаём объект выбора цвета
 *     let pickerField = new ely.colorPickerField();
 *
 *     pickerField.addChangeValueObserver( oldValue, newValue => {
 *         console.log("Выбран цвет: " + newValue.toString());
 *     });
 *
 *
 */
let elyColorPickerField = class elyColorPickerField extends elyFieldView {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super({ accessory: new elyControl$1({ tag: "input", class: "ef-input" }) });
        /**
         * Элемент отображения цвета
         * @type {elyControl}
         */
        this.colorView = new elyControl$1({ class: "ef-color-pict" });
        /**
         * Иконка цвета
         * @type {elyControl}
         */
        this.colorThumbnail = new elyControl$1();
        this.actionIconView = new elyControl$1({ class: "ef-input-status ef-color-pict" });
        const accessory = this.accessoryView.getDocument();
        // this.colorThumbnail.addClass("bg-primary");
        this.colorView.addSubView(this.colorThumbnail);
        this.actionIconView.getDocument().append(this.colorThumbnail.getDocument());
        this.colorThumbnail.getDocument().innerHTML = "&nbsp";
        this.valueProperty.set(elyColor.black());
        this.getDocument().append(this.actionIconView.getDocument());
        this.actionIconView.addObserver("click", () => this.editableProperty.toggle());
        this.valueProperty.change(value => {
            this.picker.set(value.toString());
            accessory.value = (value.toString());
            this.colorThumbnail.css({ "background-color": value.getDarkerColor(0.2).toString() });
            this.accessoryView.css({ color: value.getDarkerColor(0.14).toString() });
        });
        this.editableProperty.change((value) => {
            accessory.disabled = !value;
            if (value) {
                this.picker.create();
                this.picker.enter();
            }
            else
                this.picker.destroy();
        });
        accessory.oninput = () => {
            this.picker.set(accessory.value);
            const ec = new elyColor({ hex: accessory.value });
            accessory.value = ec.toString();
            this.colorThumbnail.css({ "background-color": ec.getDarkerColor(0.2).toString() });
            this.accessoryView.css({ color: ec.getDarkerColor(0.14).toString() });
        };
        // @ts-ignore
        this.picker = new CP(this.accessoryView.getDocument());
        this.picker.on("exit", () => {
            if (this.editable()) {
                const ec = new elyColor({ hex: accessory.value });
                this.value(ec);
                this.editable(false);
            }
        });
        this.picker.on("change", (color) => {
            if ("#" + color === this.value().toString())
                return;
            const ec = new elyColor({ hex: color });
            accessory.value = ec.toString();
            this.colorThumbnail.css({ "background-color": ec.getDarkerColor(0.2).toString() });
            this.accessoryView.css({ color: ec.getDarkerColor(0.14).toString() });
        });
        this.placeholder("#______");
        this.editable(false);
        this.value(options.value || elyColor.black());
    }
    /**
     * Возвращает и устанавливает плейслхолдер для ввода
     * @param {string} [value] - значение
     * @returns {string|this|null}
     */
    placeholder(value) {
        if (value === undefined)
            return this.accessoryView.getDocument().placeholder;
        this.accessoryView.getDocument().placeholder = value;
        return this;
    }
};
elyColorPickerField = __decorate([
    designable("value", elyDesignableFieldState.DENY),
    designable("placeholder", elyDesignableFieldState.DENY)
], elyColorPickerField);
var elyColorPickerField$1 = elyColorPickerField;

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
 + Файл: efProtocol.ts                                                        +
 + Файл изменен: 08.01.2019 00:55:09                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
class efProtocol {
}
/**
 * Возвращает true, если объект obj подчиняется протоколу protocol
 * @param {*} obj
 * @param protocol
 */
function hasProtocol(obj, protocol) {
    for (const name of Object.getOwnPropertyNames(protocol.prototype)) {
        if (name === "constructor")
            continue;
        if (obj[name] === undefined)
            return false;
    }
    return true;
}

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
 + Файл: efErrorDisplayProtocolcol.ts                                         +
 + Файл изменен: 08.01.2019 00:50:08                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Протокол объекта, который может быть помечен, как "объект с ошибкой"
 * @class efErrorDisplayProtocol
 */
class efErrorDisplayProtocol extends efProtocol {
    /**
     * Помечает объект как неисправный
     * @param {boolean} flag
     * @return {this}
     */
    error(flag) {
        throw Error(`Method isValid is not implemented in class ${this}!`);
    }
}

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
 + Файл: efValidatableProtocol.ts                                             +
 + Файл изменен: 08.01.2019 00:36:49                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Протокол валидации данных
 * @class {efValidatableProtocol}
 */
class efValidatableProtocol extends efProtocol {
    /**
     * Возвращает true, если данные валидны
     * @return {boolean}
     */
    isValid() {
        throw Error(`Method isValid is not implemented in class ${this}!`);
    }
    /**
     * Возвращает true, если данные пусты
     * @return {boolean}
     */
    isEmpty() {
        throw Error(`Method isValid is not implemented in class ${this}!`);
    }
}

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
 + Файл: efValueProtocol.ts                                                   +
 + Файл изменен: 07.01.2019 23:36:33                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Протокол элемента ввода
 * @class efValueProtocol
 * @template T
 */
class efValueProtocol extends efProtocol {
    constructor() {
        super(...arguments);
        /**
         * Свойство: значение поля ввода
         * @type {elyObservableProperty<T>}
         */
        this.valueProperty = new elyObservableProperty();
    }
    /**
     * Возвращает и устанавливает значение поля ввода
     * @param {T|null} [value] - значение
     * @returns {T|this|null}
     */
    value(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.valueProperty);
    }
    /**
     * Очищает значение
     * @return {this}
     */
    clearValue() {
        this.value(null);
        return this;
    }
}

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
 + Файл: elyFormView.ts                                                       +
 + Файл изменен: 06.01.2019 20:14:49                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Форма
 * @class elyFormView
 * @augments {elyGridView}
 */
class elyFormView extends elyView {
    /**
     * Конструктор
     * @param {elyFlexGridViewOptions} props - параметры
     */
    constructor(props = {}) {
        super({});
        /**
         * Элементы формы
         * @type {elyObservableDictionary<elyView>}
         */
        this.accessories = new elyObservableDictionary();
        /**
         * Свойство: флаг проверки полей на пустоту
         * @ignore
         * @protected
         */
        this.__checkEmpty = true;
        /**
         * Свойство: флаг автоматического определения кнопки submit
         * @ignore
         * @protected
         */
        this.__detectSubmitButton = true;
        /**
         * Форма в процессе
         * @type {boolean}
         * @protected
         */
        this.__inProgress = false;
        /**
         * Свойство: флаг проверки валидации
         * @ignore
         * @protected
         */
        this.__checkValidation = true;
        this.__gridView = new elyGridView(props);
        this.__checkEmpty = props.checkEmpty === undefined ? true : props.checkEmpty;
        this.__checkValidation = props.checkValidation === undefined ? true : props.checkValidation;
        this.__detectSubmitButton = props.detectSubmitButton === undefined ? true : props.detectSubmitButton;
        this.addClass("ef-form");
        this.getDocument().append(this.__gridView.getDocument());
    }
    /**
     * Добавляет элементы
     * @param {*} items
     */
    add(items) {
        elyUtils.forEach(items, (index, value) => {
            this.accessories.add(index, value);
            if (index === "submit" && value instanceof elyButton$1)
                value.click(() => this.submit());
        });
        this.__gridView.add(...elyUtils.values(items));
        return this;
    }
    /**
     * Подтвержает форму
     * @param callback
     */
    submit(callback) {
        if (this.__inProgress)
            return this;
        this.__inProgress = true;
        const values = {};
        let error = null;
        this.forEachAccessoryField((name, field) => {
            let val = null;
            if (hasProtocol(field, efValidatableProtocol)) {
                if (this.checkEmpty() && field.isEmpty()) {
                    error = { name, field, message: "empty" };
                    if (hasProtocol(field, efErrorDisplayProtocol))
                        field.error(true);
                }
                else if (this.checkValidation() && !field.isValid()) {
                    error = { name, field, message: "invalid" };
                    if (hasProtocol(field, efErrorDisplayProtocol))
                        field.error(true);
                }
                else {
                    val = field.value();
                }
            }
            else {
                val = field.value();
            }
            values[name] = val;
        });
        this.__inProgress = false;
        this.notificate("submit", [error ? null : values, error]);
        if (callback)
            callback(error ? null : values, error);
        return this;
    }
    /**
     * Добавляет наблюдатель: подтверждение формы
     *
     * Имя обсервера: submit
     *
     * @param {{function(values: *, error: {name: string, field: elyFieldProtocol<*>, message: string})}} o
     */
    addSubmitObserver(o) {
        this.addObserver("submit", o);
        return this;
    }
    /**
     * Возвращает и устанавливает флаг автоматического определения кнопки submit
     * @param {boolean} [value] - значение
     * @returns {boolean|this|null}
     */
    detectSubmitButton(value) {
        if (value === undefined)
            return this.__detectSubmitButton;
        this.__detectSubmitButton = value;
        return this;
    }
    /**
     * Возвращает и устанавливает флаг проверки полей на пустоту
     * @param {boolean} [value] - значение
     * @returns {boolean|this|null}
     */
    checkEmpty(value) {
        if (value === undefined)
            return this.__checkEmpty;
        this.__checkEmpty = value;
        return this;
    }
    /**
     * Цикл по всем элементам формы
     * @param {{function(name: string, view: elyView)}} callback
     */
    forEachAccessory(callback) {
        this.accessories.forEach((key, value) => {
            callback(key, value);
        });
    }
    /**
     * Цикл по всем полям формы
     * @param {{function(name: string, field: efValueProtocol<*>)}} callback
     */
    forEachAccessoryField(callback) {
        this.forEachAccessory((name, view) => {
            if (hasProtocol(view, efValueProtocol)) {
                callback(name, view);
            }
        });
    }
    /**
     * Возвращает и устанавливает флаг проверки валидации
     * @param {boolean} [value] - значение
     * @returns {boolean|this|null}
     */
    checkValidation(value) {
        if (value === undefined)
            return this.__checkValidation;
        this.__checkValidation = value;
        return this;
    }
}

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
 + Файл: elyDataPickerField.ts                                                +
 + Файл изменен: 08.01.2019 02:54:40                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Поле: Выбор элемента
 * @class elyDataPickerField
 * @augments {elyField<*>}
 *
 */
class elyDataPickerField extends elyFieldView {
    /**
     * Конструктор
     * @param {elyDataPickerFieldOptions} props - параметры
     */
    constructor(props = {}) {
        super({ accessory: new elyControl$1({ tag: "input", class: "ef-input" }) });
        /**
         * Элементы поля
         * @type {elyObservableDictionary<*>}
         * @readonly
         */
        this.items = new elyObservableDictionary();
        /**
         * Элемент отображения подсказок
         */
        this.tipsView = new elyControl$1({ class: "ef-tips-view" });
        /**
         * Найденные ключи
         * @type {elyObservableArray<string>}
         */
        this.searchResultsKeys = new elyObservableArray();
        /**
         * Иконка
         * @type {elyIconView}
         */
        this.actionIconView = new elyIconView$1({ class: "ef-input-status" });
        /**
         * Максимальное количество подсказок
         * @protected
         * @type {number}
         */
        this.__maxTipsCount = 5;
        this.getDocument().append(this.actionIconView.getDocument());
        const accessory = this.accessoryView.getDocument();
        /**
         * Максимальное кол-во подсказок
         * @protected
         */
        this.__maxTipsCount = props.maxTipsCount || 5;
        this.editableProperty.change(value => {
            accessory.disabled = !value;
            if (value) {
                this.actionIconView.iconName("close");
                accessory.value = "";
                this.accessoryView.makeFirstResponder();
                this.tipsView.hidden(false);
                this.find(accessory.value);
            }
            else {
                this.actionIconView.iconName("search");
                this.tipsView.hidden(true);
                if (this.searchResultsKeys.length() === 0) {
                    if (this.value() !== null) {
                        accessory.value = this.items.keyOf(this.value()) || "";
                    }
                    else {
                        accessory.value = "";
                    }
                }
            }
        });
        this.searchResultsKeys.change(() => {
            const list = new elyListView();
            let index = 0;
            for (const value of this.searchResultsKeys.get()) {
                const listItem = new elyTextView$1({ text: value });
                listItem.getDocument().onclick = () => {
                    this.valueProperty.set(this.items.item(value));
                };
                list.add(listItem);
                index++;
                if (index >= this.maxTipsCount())
                    break;
            }
            this.tipsView.removeViewContent();
            this.tipsView.addSubView(list);
        });
        this.valueProperty.change(value => {
            accessory.value = this.items.keyOf(value) || "";
            this.editable(false);
        });
        this.actionIconView.hidden(false);
        this.editable(false);
        if (props.items)
            this.addItems(props.items);
        accessory.oninput = (e) => {
            this.find(accessory.value, e.inputType === "insertText");
        };
        this.getDocument().append(this.tipsView.getDocument());
        this.actionIconView.addObserver("click", () => this.editableProperty.toggle());
        if (elyGuard.isSet(props.placeholder))
            accessory.placeholder = props.placeholder;
        if (elyGuard.isSet(props.value))
            this.value(props.value);
    }
    /**
     * Выполняет поиск
     * @param {string} str
     * @param {boolean} [completion = false]
     */
    find(str, completion = false) {
        this.searchResultsKeys.clear();
        this.items.forEach(title => {
            if (title.toLowerCase().indexOf(str.toLowerCase()) > -1)
                this.searchResultsKeys.push(title);
        });
        if (this.searchResultsKeys.length() === 1 && completion) {
            const item = this.items.item(this.searchResultsKeys.item(0));
            if (item !== null)
                this.valueProperty.set(item);
        }
    }
    /**
     * Добавляет значение
     * @param {string} title
     * @param {*} value
     * @return {this}
     */
    addItem(title, value) {
        this.items.add(title, value);
        return this;
    }
    /**
     * Лобавляет значения
     * @param {* | string[]} items - значения
     */
    addItems(items) {
        if (items instanceof Array) {
            items.forEach((value, index) => {
                this.addItem(value, index);
            });
        }
        else {
            elyUtils.forEach(items, (index, value) => this.addItem(index, value));
        }
        return this;
    }
    /**
     * Возвращает true, если поле пустое
     * @return {boolean}
     */
    isEmpty() {
        return this.valueProperty.isNull();
    }
    /**
     * Максимальное кол-во подсказок
     * @param {number} [value]
     * @return {this|number}
     */
    maxTipsCount(value) {
        if (value === undefined)
            return this.__maxTipsCount;
        this.__maxTipsCount = value;
        return this;
    }
}

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
 + Файл: elySwitchField.ts                                                    +
 + Файл изменен: 06.01.2019 00:25:54                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Поле: Переключатель
 * @version 1.0
 * @class elySwitchField
 * @augments {elyField<boolean>}
 */
let elySwitchField = class elySwitchField extends elyFieldView {
    /**
     * Конструктор
     * @param {elySwitchFieldOptions} props
     */
    constructor(props = {}) {
        super({ accessory: new elyControl$1({ tag: "input", class: "ef-input" }) });
        /**
         * Отображение заголовка
         * @readonly
         * @type {elyTextView}
         */
        this.titleView = new elyTextView$1({ class: "title" });
        /**
         * Заголовок
         * @readonly
         * @type {elyObservableProperty<string>}
         */
        this.titleProperty = new elyObservableProperty();
        /**
         * Иконка переключателя
         * @readonly
         * @protected
         * @type {elyControl}
         */
        this.switcherView = new elyControl$1({ class: "switcher" });
        /**
         * Элемент с переключателем
         * @readonly
         * @protected
         * @type {elyControl}
         */
        this.switcherBox = new elyControl$1({ tag: "label", class: "ef-switch" });
        const accessory = this.accessoryView.getDocument();
        accessory.type = "checkbox";
        accessory.onchange = () => this.value(accessory.checked);
        this.editableProperty.change((newValue) => accessory.disabled = !newValue);
        this.valueProperty.change((newValue) => accessory.checked = newValue);
        this.titleProperty.change((newValue) => this.titleView.text(newValue));
        this.addClass("ef-input-switch");
        this.removeViewContent();
        this.switcherBox.addSubView(this.accessoryView);
        this.switcherBox.addSubView(this.switcherView);
        this.getDocument().append(this.switcherBox.getDocument());
        this.getDocument().append(this.titleView.getDocument());
        this.editable(true);
        if (props.title)
            this.titleProperty.set(props.title);
        if (props.value)
            this.value(props.value);
    }
    /**
     * Проверка на пустоту значения elySwitchField, которое всегда отрицательно.
     * Иными словами, поле {@link elySwitchField} не может быть пустым!
     * @return {boolean}
     */
    isEmpty() {
        return false;
    }
    /**
     * @ignore
     * @param flag
     */
    error(flag) {
        return this;
    }
    /**
     * Устаналивает или возращает заголовок
     * @param {string} [title]
     * @return {this|string}
     */
    title(title) {
        return elyObservableProperty.simplePropertyAccess(this, title, this.titleProperty);
    }
};
elySwitchField = __decorate([
    designable("value", elyDesignableFieldState.GETSET, "boolean"),
    designable("title", elyDesignableFieldState.GETSET, "string"),
    designable("placeholder", elyDesignableFieldState.DENY)
], elySwitchField);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyFlatApplicationPreloader.ts                                       +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
class elyFlatApplicationPreloader extends elyView {
    /**
     * Конструктор
     */
    constructor() {
        super({ selector: ".eld" });
        this.iconLabel = new elyTextView$1({ selector: ".efm" });
        const selector = document.querySelector(".elm");
        if (selector) {
            selector.innerHTML = "";
            this.messageView = new elyTextView$1({ selector: ".elm" });
            this.messageView.text("Пожалуйста, подождите...");
        }
        else {
            this.messageView = new elyTextView$1({});
            elyXLogger.default.warning("Ошибка обработки экрана загрузки...");
        }
    }
    /**
     * Отображает сообщение
     * @param text
     */
    showScreen(text) {
        this.messageView.text(text);
        this.hidden(false);
    }
    /**
     * Скрывает сообщение
     */
    hideScreen() {
        this.hidden(true);
    }
}
/**
 * Стандартный загрузчик
 */
elyFlatApplicationPreloader.default = new elyFlatApplicationPreloader();

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
 + Файл: efAppColorManager.ts                                                 +
 + Файл изменен: 30.01.2019 01:44:27                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Менеджер цветов приложения
 * @class efAppColorManager
 */
class efAppColorManager {
    /**
     * Конструктор
     * @param props
     */
    constructor(props) {
        /**
         * Цвет приложения
         * @protected
         * @ignore
         */
        this.__appColor = elyColor.black();
        /**
         * Цвет навигации
         * @protected
         * @ignore
         */
        this.__navigationBarColor = elyColor.black();
        this.__app = props.app;
    }
    /**
     * Изменяет цветовую гамму приложения
     * @param color
     */
    applyApplicationColor(color) {
        const darker = color.getDarkerColor(0.1);
        const lighter = color.getLighterColor(0.18);
        elyStylesheet.global.addClass("bg-primary", {
            backgroundColor: color.toString(),
            color: color.isDarker() ? "white" : "black",
        });
        elyStylesheet.global.addClass("brd-primary", {
            borderColor: color.toString(),
        });
        elyStylesheet.global.addClass("text-primary", {
            color: color.toString(),
        });
        elyStylesheet.global.addClass("bg-info", {
            backgroundColor: lighter.toString(),
            color: lighter.isDarker() ? "white" : "black",
        });
        elyStylesheet.global.addClass("brd-info", {
            borderColor: lighter.toString(),
        });
        elyStylesheet.global.addClass("text-info", {
            color: lighter.toString(),
        });
        elyStylesheet.global.add("::-webkit-scrollbar-track", {
            borderColor: "#c2c2c2",
        });
        elyStylesheet.global.add("::-webkit-scrollbar", {
            borderColor: "#c2c2c2",
            width: "5px",
        });
        elyStylesheet.global.add("::-webkit-scrollbar-thumb", {
            backgroundColor: darker.toString(),
        });
        this.__appColor = color;
    }
    /**
     * Изменяет цвет панели нацигации
     * @param color
     */
    applyNavigationBarColor(color) {
        this.__app.navigationView.navigationBarColor(color);
        this.__navigationBarColor = color;
    }
    /**
     * Возвращает текущий цвет приложения
     * @return {elyColor}
     */
    getApplicationColor() {
        return this.__appColor;
    }
    /**
     * Возвращает текущий цвет панели навигации
     * @return {elyColor}
     */
    getNavigatonBarColor() {
        return this.__navigationBarColor;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyFlatSideNavigationView.ts                                         +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Боковая панель навигации
 */
class elyFlatSideNavigationView extends elyView {
    constructor(options = {}) {
        super(options);
        this.addClass("ef-sidenav");
        this.widthProperty = new elyObservableProperty(350);
        this.widthProperty.change(value => {
            this.width(value + "px");
        });
        this.listView = new elyListView();
        this.titleView = new elyControl$1({ class: "ef-sidenav-title" });
        // this.hidden(true);
        this.dismiss();
        const closeIcon = new elyIconView$1({ iconName: "close" });
        this.titleView.getDocument().append(closeIcon.getDocument());
        this.getDocument().append(this.titleView.getDocument());
        this.getDocument().append(this.listView.getDocument());
        this.titleView.addObserver("click", () => {
            this.dismiss();
        });
        this.resize((view, maxWidth) => {
            if (maxWidth > 1600) {
                this.widthProperty.set(350);
            }
            else {
                this.widthProperty.set(260);
            }
            this.dismiss();
        });
    }
    /**
     * Отображает навигацию
     */
    present() {
        // this.hidden(false);
        this.css({ left: `0px` });
    }
    /**
     * Скрывает навигацию
     */
    dismiss() {
        this.css({ left: `-${this.widthProperty.get()}px` });
    }
    /**
     * Переключает отображение навигации
     */
    toggle() {
        if (parseInt((this.getStyle().left || "0").replace("px", ""), 10) < 0) {
            this.present();
        }
        else {
            this.dismiss();
        }
    }
    /**
     * Применяет события мыши
     */
    applyMouseEvents() {
        elyXLogger.default.log("События мыши активированы для боковой панели");
        this.getDocument().onmouseleave = () => {
            this.dismiss();
        };
    }
    /**
     * Добавляет панель навигации в приложение
     */
    apply() {
        document.body.append(this.getDocument());
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyFooterView.ts                                                     +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Подвал приложения
 */
class elyFooterView extends elyControl$1 {
    /**s
     * Констуктор
     */
    constructor() {
        super({ class: "ef-footer" });
        this.titleView = new elyTextView$1({ class: "title" });
        this.subtitleView = new elyTextView$1({ class: "sub-title" });
        this.addSubView(this.titleView);
        this.addSubView(this.subtitleView);
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyNavigationView.ts                                                 +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент верхней навигации
 */
class elyNavigationView extends elyControl$1 {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(options);
        this.itemsView = new elyListView();
        this.titleView = new elyLinkTextView$1({ text: "ely.Flat", url: "#", class: "title" });
        this.imageView = new elyImageView$1();
        this.navigationBarColorProperty = new elyObservableProperty();
        this.addSubView(this.imageView);
        this.addSubView(this.titleView);
        this.addSubView(this.itemsView);
        this.addClass("ely-navigation-view");
        this.imageView.hidden(true);
        this.navigationBarColorProperty.change((newValue) => {
            const backgroundColor = newValue.toString();
            let borderColor = newValue.getLighterColor(0.3).toString();
            if (!newValue.isDarker()) {
                this.addClass("light");
                borderColor = newValue.getDarkerColor(0.05).toString();
            }
            else
                this.removeClass("light");
            this.css({ "background-color": backgroundColor, "border-bottom": "4px solid " + borderColor });
        });
    }
    /**
     * Устанавливает или возвращает цвет бара
     * @param color
     */
    navigationBarColor(color) {
        if (color && typeof color === "string")
            color = new elyColor({ hex: color });
        return elyObservableProperty.simplePropertyAccess(this, color, this.navigationBarColorProperty);
    }
    /**
     * Устанавливает изображение
     * @param image
     */
    navigationBarImage(image) {
        this.imageView.hidden(false);
        this.imageView.url(image);
        this.imageView.height(34);
        this.imageView.css({ "margin-top": "-12px" });
        return this;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyLogger.ts                                                         +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// import figlet from "figlet";
/**
 * Logger
 * @deprecated
 */
class elyLogger {
    /**
     * Логирование отладки
     * @param message
     */
    static debug(message) {
        if (elyLogger.logLevel >= elyLogger.logLevels.debug)
            if (console)
                console.log("[{ " + "Debug" + " }]: " + message.toString());
    }
    /**
     * Логирование предупрждений
     * @param message
     */
    static warning(message) {
        if (elyLogger.logLevel >= elyLogger.logLevels.warning)
            if (console)
                console.trace("@- [{ " + "Warning" + " }]: " + message.toString());
    }
    /**
     * Логирование ошибок
     * @param message
     */
    static error(message) {
        if (elyLogger.logLevel >= elyLogger.logLevels.error)
            if (console)
                console.trace("!- [{ " + "ERROR" + " }]: " +
                    message.toString());
    }
    /**
     * Логирование отладки -- вывод объекта
     * @param obj
     */
    static debugObject(obj) {
        if (elyLogger.logLevel >= elyLogger.logLevels.debug)
            if (console)
                console.log(obj);
    }
    /**
     * Выводит сообщение
     * @param message
     */
    static print(message) {
        if (console)
            console.log("[{ " + "Log" + " }]: " + message.toString());
    }
    /**
     * Выводит текстовое лого желтого цвета
     * @param text
     * @deprecated
     */
    static logoTextYellow(text) {
        console.log(
        // figlet.textSync(text, {horizontalLayout: "full"}),
        );
    }
    /**
     * Выводит текстовое лого цианового цвета
     * @param text
     * @deprecated
     */
    static logoTextCyan(text) {
        console.log(
        // figlet.textSync(text, {horizontalLayout: "full"}),
        );
    }
    /**
     * Очищает консоль
     */
    static clear() {
        console.clear();
    }
}
/**
 * Уровни логирования
 */
elyLogger.logLevels = {
    debug: 10,
    error: 3,
    no: 0,
    warning: 2,
};
/**
 * Уровень логирования
 */
elyLogger.logLevel = elyLogger.logLevels.debug;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyURLDelegate.ts                                                    +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Делегат elyURL
 */
class elyURLDelegate {
    /**
     * Запрос был отправлен
     *
     * @param {elyURL} url - объект elyURL
     * @param {*} status - статус ответа
     * @param {*} response - ответ чистого формата (НЕ JSON)
     */
    elyURLDidSendRequest(url, status, response) {
        // Nothing is done
    }
    /**
     * Метод вызывается перед отправкой запроса, на вход передаются
     * данные, которые будут отправлены.
     *
     * Возвращаемое значение - разрешение на совершение запроса.
     *
     * @param {elyURL} url - URL
     * @param {*} data - данные запроса
     *
     * @return boolean - разрешение на отправку запроса
     */
    elyURLWillSendRequest(url, data) {
        return true;
    }
    /**
     * Запрос был отменен пользователем
     *
     * Данный метод вызывается при отмене запроса.
     *
     * @param {elyURL} url - объект elyURL
     */
    elyURLDidCanseled(url) {
        // Nothing is done
    }
    /**
     * Запрос выполнен с ошибкой
     *
     * @param {elyURL} url - объект elyURL
     * @param {*} error - ошибка
     */
    elyURLRequestDidLose(url, error) {
        // Nothing is done
    }
    /**
     * Запрос выполняется и передается
     *
     * @param {elyURL} url - объект elyURL
     * @param {number} loadedBytes - передано байт
     * @param {number} totalBytes - всего байт
     */
    elyURLProgressChanged(url, loadedBytes, totalBytes) {
        // Nothing is done
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyURL.ts                                                            +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Класс ely.URL
 *
 * Класс, содержащий набор методов для работы с URL
 */
class elyURL {
    /**
     * Конструктор
     *
     * @param {string} url - URL строка
     * @param {*} props - опции
     */
    constructor(url, props = []) {
        /**
         * Ответ обрабатывается как JSON
         */
        this.jsonResponse = true;
        this.absoluteString = url;
        this.delegate = new elyURLDelegate();
    }
    /**
     * Возвращает текущий URL
     */
    static current() {
        return new elyURL(window.location.href);
    }
    /**
     * Возвращает очищенный URL
     */
    getClearURL() {
        return new RegExp("(http[s]?:\\/\\/.+)\\/").exec(this.absoluteString)[1];
    }
    /**
     * Возвращает очищенный URL от GET запроса
     */
    getClearOfRequestURL() {
        return new RegExp("(http[s]?:\\/\\/.+)\\?").exec(this.absoluteString)[1];
    }
    /**
     * Отправляет запрос на URL
     *
     * @param object - объект с данными запроса
     * @param callback - обработчик результатов запроса
     *
     * Метод работает асинхронно!
     * @async
     * @deprecated
     */
    request(object, callback) {
        const xhr = new XMLHttpRequest();
        let fmd = object;
        if (!(object instanceof FormData)) {
            fmd = new FormData();
            for (const index in object)
                if (object.hasOwnProperty(index))
                    fmd.append(index, object[index]);
        }
        xhr.onprogress = ((ev) => {
            this.delegate.elyURLProgressChanged(this, ev.loaded, ev.total);
        });
        xhr.onerror = ((ev) => {
            this.delegate.elyURLRequestDidLose(this, ev);
        });
        xhr.onabort = (() => {
            this.delegate.elyURLDidCanseled(this);
        });
        xhr.onload = () => {
            if (callback) {
                let resp = xhr.response;
                try {
                    if (this.jsonResponse)
                        resp = JSON.parse(resp);
                }
                catch (e) {
                    elyLogger.warning("Ошибка возникла при обработке JSON в elyURL!");
                    resp = null;
                }
                this.delegate.elyURLDidSendRequest(this, xhr.status, xhr.response);
                callback(resp, xhr.status);
            }
        };
        if (this.delegate.elyURLWillSendRequest(this, object)) {
            xhr.open("POST", this.absoluteString);
            xhr.send(fmd);
        }
        return this;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyGetRequest.ts                                                     +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Выполняет GET запрос
 */
class elyGetRequest extends elyObservable {
    /**
     * Конструктор
     * @param options
     */
    constructor(options) {
        super();
        /**
         * Парсинг запроса
         */
        this.useJson = true;
        if (typeof options === "string")
            options = { url: options };
        if (typeof options.url === "string")
            options.url = new elyURL(options.url);
        this.url = options.url;
        this.xhr = new XMLHttpRequest();
        this.applyListeners(this.xhr);
    }
    /**
     * Отправляет запрос
     * @param data
     * @param callback
     */
    send(data, callback) {
        const params = typeof data === "string" ? data : Object.keys(data).map(k => encodeURIComponent(k) + "="
            + encodeURIComponent(data[k])).join("&");
        this.xhr.open("GET", this.url.absoluteString + "?" + params);
        this.xhr.onreadystatechange = () => {
            if (this.xhr.readyState === XMLHttpRequest.DONE) {
                let resp = this.xhr.response;
                try {
                    if (this.useJson)
                        resp = JSON.parse(resp);
                }
                catch (e) {
                    elyLogger.warning("Ошибка возникла при обработке JSON в elyGetRequest! " + this.url.absoluteString);
                    elyLogger.debugObject(this);
                    resp = null;
                }
                if (callback)
                    callback(resp, this.xhr.status);
            }
        };
        this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this.xhr.send();
    }
    /**
     * Добавляет слушатель изменения прогресса
     * @param observer
     */
    addProgressChangedObserver(observer) {
        this.addObserver("progressChanged", observer);
        return this;
    }
    /**
     * Добавляет слушатель ошибки
     * @param observer
     */
    addErrorObserver(observer) {
        this.addObserver("error", observer);
        return this;
    }
    /**
     * Добавляет слушатель прерывания запроса
     * @param observer
     */
    addAbortObserver(observer) {
        this.addObserver("abort", observer);
        return this;
    }
    /**
     * Добавляет слушатели
     * @ignore
     */
    applyListeners(xhr) {
        xhr.onerror = ev => this.notificate("error", [ev]);
        xhr.onprogress = ev => this.notificate("progressChanged", [ev.loaded, ev.total]);
        xhr.onabort = () => this.notificate("abort", []);
    }
}

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
 + Файл: efAppConfig.ts                                                       +
 + Файл изменен: 30.01.2019 00:57:41                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Конфигурация приложения
 * @class efAppConfig
 * @augments {elyObservable}
 * @augments {efAppConfigInterface}
 */
class efAppConfig extends elyObservable {
    constructor() {
        super();
        /**
         * Секция: приложение
         * {@link efConfigSection_app}
         */
        this.app = {
            author: null,
            title: "my.App",
        };
        /**
         * Секция: манифест
         * {@link efConfigSection_manifest}
         */
        this.manifest = {
            useApplicationIcon: true,
            useContentController: true,
            useContentRouter: true,
            useDevelopMode: false,
            useMeta: true,
            useNavigationBar: true,
            useSideNavigationBar: false,
            useViewPort: true,
        };
        /**
         * Секция: контроллер контента
         * {@link efConfigSection_contentController}
         */
        this.contentController = {
            defaultContentId: "index",
            errorContentId: "error",
        };
        /**
         * Секция: панель навигации
         * {@link efConfigSection_navigationBar}
         */
        this.navigationBar = {
            color: null,
            extendedStyle: false,
            imageUrl: null,
            items: [],
            subtitle: null,
            title: "my.App{ }",
        };
        /**
         * Секция: боковая панель навигации
         * {@link efConfigSection_sideNavigationBar}
         */
        this.sideNavigationBar = {
            allowMouseEvents: true,
            items: [],
        };
        /**
         * Секция: шаблон
         * {@link efConfigSection_template}
         */
        this.template = {
            color: "#194d6d",
            footer: {
                subtitle: "My application",
                title: "Works with *ely.Flat* Application Engine",
            },
            maxContainerWidth: 700,
        };
        /**
         * Секция: мета данные
         * {@link efConfigSection_meta}
         */
        this.meta = {
            appleMobile: {
                appCapable: true,
                statusBarStyle: "black-translucent",
            },
            charset: "UTF-8",
            iconPath: "resources/icon",
            viewport: {
                fit: "cover",
                initialScale: 1.0,
                maximumScale: 1.0,
                userScale: "no",
                width: "device-width",
            },
        };
    }
    /**
     * Загружает конфигурацию
     * @param props
     */
    load(props) {
        new elyGetRequest({ url: props.file }).send({}, (response, status) => {
            if (response) {
                elyUtils.mergeDeep(this, response);
                this.notificate("loaded", [true, this]);
            }
            else {
                this.notificate("loaded", [false, this]);
            }
        });
    }
    /**
     * Добавляет наблюдатель: загрузка конфигурации завершена
     *
     * Имя обсервера: loaded
     *
     * @param {function(result: boolean, cfg: efAppConfig)} o - наблюдатель
     */
    addLoadedObserver(o) {
        this.addObserver("loaded", o);
        return this;
    }
    /**
     * Возвращает заголовок приложения
     * @return {string}
     */
    getAppTitle() {
        return this.app.title;
    }
    /**
     * Возвращает строку цвета приложения
     * @return {string}
     */
    getAppColorString() {
        return this.template.color;
    }
    /**
     * Возвращает цвет панели навигации
     * @return {string}
     */
    getNavigationBarColorString() {
        return this.navigationBar.color || this.template.color;
    }
    /**
     * Возвращает цвет панели навигации
     */
    getNavigationBarColor() {
        return new elyColor({ hex: this.getNavigationBarColorString() });
    }
    /**
     * Возвращает основной цвет приложения
     * @return {elyColor}
     */
    getAppColor() {
        return new elyColor({ hex: this.getAppColorString() });
    }
    /**
     * Возвращает true, если используется панель навигации
     */
    isNavigationBarUsed() {
        return this.manifest.useNavigationBar;
    }
    /**
     * Возвращает true, если используется боковая панель навигации
     */
    isSideNavigationBarUsed() {
        return this.manifest.useSideNavigationBar;
    }
}
/**
 * Путь до файла конфигурации
 * @type {string}
 */
efAppConfig.appConfigPath = "app.config.json";
/**
 * Стандратная конфигурация
 * @type {efAppConfig}
 */
efAppConfig.default = new efAppConfig();

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
 + Файл: efAppDocumentHead.ts                                                 +
 + Файл изменен: 30.01.2019 01:54:59                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Документ: Заголовок
 */
class efAppDocumentHead extends elyView {
    /**
     * Конструктор
     */
    constructor() {
        super({ element: document.head });
        /**
         * Мета значения
         * @ignore
         * @protected
         */
        this.__metaValues = [];
        this.__titleElement = document.getElementsByTagName("title")[0];
        this.getDocument().append(this.__titleElement);
        this.getDocument().append(elyStylesheet.global.getDocument());
    }
    /**
     * Возвращает и устанавливает заголовок
     * @param {string} [value] - значение
     * @returns {string|this|null}
     */
    title(value) {
        if (value === undefined)
            return this.__titleElement.innerText;
        this.__titleElement.innerText = value;
        document.title = value;
        return this;
    }
    /**
     * Возвращает мета значения
     * @return {*}
     */
    getMetaValues() {
        return this.__metaValues;
    }
    /**
     * Добавляет мета значение
     * @param {{ name: string, content: string }} props
     */
    addMetaValue(props) {
        const metaElement = document.createElement("meta");
        metaElement.content = props.content;
        metaElement.name = props.name;
        this.getDocument().append(metaElement);
    }
    /**
     * Добавляет viewport
     * @param {{fit?: string, initialScale?: number, maximumScale?: number,
     * userScalable?: string, width?: string}} props
     */
    addViewPort(props) {
        const a = [];
        if (props.fit)
            a.push(`viewport-fit=${props.fit}`);
        if (props.width)
            a.push(`width=${props.width}`);
        if (props.initialScale)
            a.push(`initial-scale=${props.initialScale}`);
        if (props.maximumScale)
            a.push(`maximum-scale=${props.maximumScale}`);
        if (props.userScalable)
            a.push(`user-scalable=${props.userScalable}`);
        this.addMetaValue({ name: "viewport", content: a.join(", ") });
    }
    /**
     * Устанавливает кодировку
     * @param {string} charset
     */
    setCharset(charset) {
        const metaElement = document.createElement("meta");
        metaElement.setAttribute("charset", charset);
        this.getDocument().append(metaElement);
    }
    /**
     * Добавляет ссылку
     * @param {{ rel: string, href: string}|*} props
     */
    addLink(props) {
        const lnk = document.createElement("link");
        for (const key in props)
            if (props.hasOwnProperty(key))
                lnk.setAttribute(key, props[key]);
        this.getDocument().append(lnk);
    }
}

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
 + Файл: efAppDocument.ts                                                     +
 + Файл изменен: 30.01.2019 01:54:33                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Документ приложения
 */
class efAppDocument {
    constructor() {
        /**
         * Заголовок
         */
        this.head = new efAppDocumentHead();
    }
}

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
 + Проект: ely.flat.application                                               +
 +                                                                            +
 + Файл: elyViewController.ts                                                 +
 + Файл изменен: 30.11.2018 00:25:05                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Контроллер элемента отображения
 * @class elyViewController
 * @augments elyObservable
 */
class elyViewController extends elyObservable {
    /**
     * Конструктор
     */
    constructor() {
        super();
        /**
         * Элемент отображения
         * @type {elyControl}
         */
        this.view = elyControl$1.empty();
    }
    /**
     * Делегат окончания инициилизации объекта
     * @param screen - экран
     */
    viewWillAppear(screen) {
        // Nothing is done
    }
    /**
     * Делегат окончания загрузки элемента
     */
    viewDidLoad() {
        // Nothing is done
    }
    /**
     * Делегат окончания отображения элемента
     */
    viewDidAppear() {
        // Nothing is done
    }
}
/**
 * Текущий контроллер
 * @ignore
 */
elyViewController.__thisControllers = [];

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
 + Проект: ely.flat.application                                               +
 +                                                                            +
 + Файл: elyGridViewController.ts                                             +
 + Файл изменен: 30.11.2018 01:48:16                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Контроллер с сеткой в основании
 * @class elyGridViewController
 * @augments {elyViewController}
 */
class elyGridViewController extends elyViewController {
    /**
     * Конструктор
     */
    constructor() {
        super();
        /**
         * Элемент отображения
         * @type {elyGridView|elyView}
         */
        this.view = new elyGridView();
    }
}

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
 + Проект: ely.flat.application                                               +
 +                                                                            +
 + Файл: elySimplePageViewController.ts                                       +
 + Файл изменен: 30.11.2018 01:52:55                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Контроллер с шаблоном макета приложения
 * @class elySimplePageViewController
 * @augments {elyGridViewController}
 */
class elySimplePageViewController extends elyGridViewController {
    /**
     * Конструктор
     */
    constructor() {
        super();
        /**
         * Основной заголовок
         * @type {elyTextView}
         */
        this.titleView = new elyTextView$1({ class: "ef-title" });
        /**
         * Описание страницы
         * @type {elyTextView}
         */
        this.descriptionView = new elyTextView$1({ class: "ef-description" });
        this.view.addClass("ef-simple-content");
        const headerView = new elyControl$1({ class: "ef-content-head" });
        this.titleView.textSize(elySize.large).textWeight(elyWeight.normal).textCenter(true);
        this.descriptionView.textSize(elySize.middle).textCenter(true);
        headerView.addSubView(this.titleView);
        headerView.addSubView(this.descriptionView);
        this.view.add(headerView);
    }
    /**
     * Устанавливает или возвращает заголовок
     * @param {string} [value]
     * @return {this|string}
     */
    title(value) {
        if (value === undefined)
            return this.titleView.text();
        this.titleView.text(value);
        return this;
    }
    /**
     * Устанавливает или возвращает описание контента
     * @param {string} [value]
     * @return {this|string}
     */
    description(value) {
        if (value === undefined)
            return this.descriptionView.text();
        this.descriptionView.text(value);
        return this;
    }
}

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
 + Проект: ely.flat.application                                               +
 +                                                                            +
 + Файл: elyScreenController.ts                                               +
 + Файл изменен: 30.11.2018 00:19:28                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
class __elyScreenIndexViewController extends elySimplePageViewController {
    /**
     * После загрущки
     *
     * + В данном методе рекомендуется выполнять отрисовку, а также программную логику
     *   контроллера элемента отображения.
     */
    viewDidLoad() {
        super.viewDidLoad();
        this.title("ely.Flat *{* Application *}*");
        this.description("Приложение разработано на основе ely.flat framework");
    }
}
/**
 * Контроллер экрана
 * @class elyScreenController
 * @augments elyObservable
 */
class elyScreenController extends elyObservable {
    /**
     * Конструктор
     */
    constructor() {
        super();
        /**
         * Контроллер
         */
        this.controller = new elyObservableProperty();
        /**
         * Элемент отображения
         */
        this.view = new elyControl$1({ class: "ef-screen" });
        /**
         * Элементы контента
         */
        this.items = {};
        this.present(new __elyScreenIndexViewController());
        this.elyScreenControllerDidInit();
    }
    /**
     * Делегат завершения инициилизации контроллера
     */
    elyScreenControllerDidInit() {
        this.notificate("didInit");
    }
    /**
     * Отображает элемент
     * @param controller
     * @param completion
     */
    present(controller, completion) {
        if (typeof controller === "string") {
            if (this.items.hasOwnProperty(controller))
                this.present(this.items[controller].controller, completion);
        }
        else {
            this.view.fadeOut(() => {
                this.controller.set(controller);
                if (elyViewController.__thisControllers.indexOf(controller.constructor.name) === -1) {
                    elyViewController.__thisControllers.push(controller.constructor.name);
                    controller.viewDidLoad();
                }
                controller.viewWillAppear(this);
                this.view.removeViewContent();
                this.view.addSubView(controller.view);
                this.view.addSubView(elyFlatApplication.default.footerView);
                this.view.fadeIn(() => {
                    controller.viewDidAppear();
                    if (completion)
                        completion();
                });
            });
        }
    }
    /**
     * Добавляет контроллер в навигацию
     * @param name
     * @param controller
     * @param canOverwrite
     */
    addControllerName(name, controller, canOverwrite = false) {
        if (this.items.hasOwnProperty(name)) {
            if (!this.items[name].canOverwrite)
                return;
            this.items[name].controller = controller;
            this.items[name].canOverwrite = canOverwrite;
        }
        this.items[name] = { controller, canOverwrite };
    }
}
/**
 * Стандартный контроллер экрана
 */
elyScreenController.default = new elyScreenController();

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyFlatApplication.ts                                                +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Приложение
 */
class elyFlatApplication extends elyObservable {
    /**
     * Конструктор
     */
    constructor() {
        super();
        /**
         * Документ
         */
        this.applicationDocument = new efAppDocument();
        this.applicationColorManager = new efAppColorManager({ app: this });
        this.readySignalsShouldBeReceived = 0;
        this.bodyView = new elyControl$1({ element: document.body });
        this.containerView = new elyControl$1({ class: "ef-cntr" });
        this.wrapperView = new elyControl$1({ class: "ef-wrp" });
        this.navigationView = new elyNavigationView();
        this.footerView = new elyFooterView();
        this.sideNavigationView = new elyFlatSideNavigationView();
        this.preloader = elyFlatApplicationPreloader.default;
        this.bodyView.addSubView(this.wrapperView);
        this.containerView.css({ margin: "0 auto" });
        this.containerView.css({ width: "100%" });
        this.wrapperView.addSubView(this.containerView);
        this.containerView.addSubView(elyScreenController.default.view);
        this.wrapperView.addObserver("click", () => {
            if (this.config.isSideNavigationBarUsed())
                this.sideNavigationView.dismiss();
        });
        this.bodyView.getDocument().onmousemove = (e) => {
            if (e.pageX <= 20) {
                this.sideNavigationView.present();
            }
        };
    }
    /**
     * Возвращает стандартный объект приложения
     * @param closure
     */
    static loadApplication(closure) {
        elyXLogger.default.log("Загрузка приложения...");
        efAppConfig.default.addLoadedObserver((result, cfg) => {
            console.log(cfg);
            if (!result)
                elyXLogger.default.error("Файл конфигурации не найден. " +
                    "Будет использована стандратная конфигурация.");
            else
                elyXLogger.default.log("Файл конфигурации успешно загружен.");
            elyFlatApplication.default.init(cfg);
        });
        efAppConfig.default.load({ file: efAppConfig.appConfigPath });
    }
    /**
     * Возвращает конфигурацию приложения
     */
    getConfig() {
        return this.config;
    }
    /**
     * Добавляет слушатель окончания загрузки приложения
     * @param observer
     */
    addReadyObserver(observer) {
        this.readySignalsShouldBeReceived++;
        this.addObserver("ready", observer);
        return this;
    }
    /**
     * Инициилизирует приложение
     * @param {efAppConfig} config
     */
    init(config) {
        this.config = config;
        this.applyConfiguration(config);
        this.notificate("ready", [(flag, message) => {
                elyLogger.debug(`---> Запуск загрузчика ${this.readySignalsShouldBeReceived}`);
                elyLogger.debug(`[~~] Загрузчик передал флаг ${flag ? "true" : "false"} (${message})`);
                if (!flag) {
                    this.preloader.iconLabel
                        .removeClass("fa-refresh")
                        .addClass("fa-times")
                        .removeClass("fa-spin");
                    this.preloader.messageView.text(message || "Загрузка была остановлена...");
                    throw Error("Остановка приложения...");
                    return;
                }
                this.readySignalsShouldBeReceived--;
                elyLogger.debug("[OK] Загрузчик обработан. Осталось: " + this.readySignalsShouldBeReceived);
                if (this.readySignalsShouldBeReceived === 0) {
                    if (this.config.manifest.useContentController) {
                        __applyElyOneActions(this);
                    }
                    elyScreenController.default.present("index");
                    this.preloader.hidden(true);
                }
            }]);
    }
    /**
     * Применяет конфигурацию
     * @param config
     */
    applyConfiguration(config) {
        elyXLogger.default.log("~~~> Применение конфигурации");
        //
        // App
        //
        this.applicationDocument.head.title(config.getAppTitle());
        //
        // Manifest
        //
        //
        //  Template
        //
        this.containerView.getStyle().maxWidth = typeof config.template.maxContainerWidth === "number" ?
            config.template.maxContainerWidth + "px" : config.template.maxContainerWidth;
        this.applicationColorManager.applyApplicationColor(config.getAppColor());
        this.footerView.titleView.text(config.template.footer.title);
        this.footerView.subtitleView.text(config.template.footer.subtitle);
        //
        //  Navigation config
        //
        if (config.isNavigationBarUsed()) {
            this.bodyView.addSubView(this.navigationView);
            this.navigationView.titleView.text(config.navigationBar.title);
            if (config.manifest.useContentController)
                this.navigationView.titleView.addObserver("click", () => {
                    elyScreenController.default.present(config.contentController.defaultContentId);
                });
            config.navigationBar.items.forEach(value => {
                value.item = value.item || "elyLinkTextView";
                this.navigationView.itemsView.add(elyControl$1.fromObject(value));
            });
            if (config.navigationBar.imageUrl) {
                this.navigationView.navigationBarImage(config.navigationBar.imageUrl);
                if (config.manifest.useContentController)
                    this.navigationView.imageView.addObserver("click", () => {
                        elyScreenController.default.present(config.contentController.defaultContentId);
                    });
            }
            this.applicationColorManager.applyNavigationBarColor(config.getNavigationBarColor());
        }
        //
        //  Side Navigation config
        //
        if (config.isSideNavigationBarUsed()) {
            if (config.isNavigationBarUsed()) {
                const showButton = new elyControl$1({
                    class: "ef-sidenav-toggle",
                    subviews: [new elyIconView$1({ iconName: "bars" })],
                });
                showButton.addObserver("click", () => {
                    this.sideNavigationView.toggle();
                });
                this.navigationView.addSubView(showButton);
            }
            this.sideNavigationView.apply();
            if (config.sideNavigationBar.allowMouseEvents)
                this.sideNavigationView.applyMouseEvents();
            config.sideNavigationBar.items.forEach(value => {
                value.item = value.item || "elyLinkTextView";
                this.sideNavigationView.listView.add(elyControl$1.fromObject(value));
            });
        }
        //
        // Meta
        //
        if (config.manifest.useMeta) {
            this.applicationDocument.head.setCharset(config.meta.charset);
            this.applicationDocument.head.addMetaValue({ name: "apple-mobile-web-app-title", content: config.app.title });
            this.applicationDocument.head.addMetaValue({
                content: config.meta.appleMobile.statusBarStyle,
                name: "apple-mobile-web-app-status-bar-style",
            });
            this.applicationDocument.head.addMetaValue({
                content: config.meta.appleMobile.appCapable ? "yes" : "no",
                name: "apple-mobile-web-app-capable",
            });
            this.applicationDocument.head.addMetaValue({
                content: config.getNavigationBarColorString(),
                name: "theme-color",
            });
        }
        if (config.manifest.useViewPort)
            this.applicationDocument.head.addViewPort(config.meta.viewport);
        if (config.manifest.useApplicationIcon) {
            this.applicationDocument.head.addLink({
                href: config.meta.iconPath + "/apple-touch-icon.png",
                rel: "apple-touch-icon",
                sizes: "180x180",
            });
            this.applicationDocument.head.addLink({
                href: config.meta.iconPath + "/favicon-32x32.png",
                rel: "icon",
                sizes: "32x32",
                type: "image/png",
            });
            this.applicationDocument.head.addLink({
                href: config.meta.iconPath + "/favicon-16x16.png",
                rel: "icon",
                sizes: "16x16",
                type: "image/png",
            });
            this.applicationDocument.head.addLink({
                href: config.meta.iconPath + "/favicon.ico",
                rel: "shortcut icon",
            });
            this.applicationDocument.head.addLink({
                color: config.getNavigationBarColorString(),
                href: config.meta.iconPath + "/safari-pinned-tab.svg",
                rel: "mask-icon",
            });
        }
    }
}
/**
 * Паттерн синглтон
 */
elyFlatApplication.default = new elyFlatApplication();
function __applyElyOneActions(app) {
    elyOneActionEval.default.actionsRules.content = (arg) => {
        switch (arg) {
            case "back":
                // cc.back();
                break;
            case "*index":
                elyScreenController.default.present("index");
                break;
            default:
                elyScreenController.default.present(arg);
        }
    };
}

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
 + Проект: ely.flat.application                                               +
 +                                                                            +
 + Файл: elyFileWatcher.ts                                                    +
 + Файл изменен: 23.11.2018 23:19:03                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Отслеживание изменения файла
 */
class elyFileWatcher extends elyObservable {
    /**
     * Конструктор
     * @param options
     */
    constructor(options) {
        super();
        /**
         * Последний размер файла
         */
        this.lastFileSize = -1;
        /**
         * Стартовое значение на первой итерации
         */
        this.startValue = null;
        /**
         * Поток
         */
        this.thread = null;
        this.filePath = options.filePath;
        const view = new elyControl$1();
        view.getStyle().backgroundColor = "rgb(110, 136, 73)";
        view.getStyle().textAlign = "center";
        view.getStyle().position = "fixed";
        view.getStyle().bottom = "0";
        view.getStyle().left = "0";
        view.getStyle().right = "0";
        view.getStyle().zIndex = "1000";
        view.getStyle().padding = "15px";
        const iconView = new elyIconView$1({ iconName: "refresh" });
        iconView.iconSpinning(true);
        iconView.getStyle().marginLeft = "15px";
        const textView = new elyTextView$1({ text: "Develop file watching" });
        textView.getStyle().display = "inline-block";
        view.addSubView(textView);
        view.addSubView(iconView);
        document.body.append(view.getDocument());
        this.addListener((size) => {
            textView.text(`Develop file watching. Size: *${size}* bytes`);
        });
    }
    /**
     * Добавляет слушатель изменения файла
     * @param observer
     */
    addListener(observer) {
        this.addObserver("changed", observer);
        return this;
    }
    /**
     * Добавляет слушатель изменения файла по отношению к первоначальной стадии
     * @param observer
     */
    addUpdateListener(observer) {
        this.addObserver("updated", observer);
        return this;
    }
    /**
     * Запускает систему прослушивания
     */
    start() {
        this.thread = setInterval(() => {
            const xhr = new XMLHttpRequest();
            xhr.open("HEAD", this.filePath, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === xhr.DONE) {
                    const size = Math.round(parseInt(xhr.getResponseHeader("Content-Length") || "0", 10)
                        / (1024) * 100) / 100;
                    if (this.lastFileSize === -1)
                        this.lastFileSize = size;
                    if (size !== this.lastFileSize)
                        this.notificate("changed", [size]);
                    this.lastFileSize = size;
                    if (this.startValue === null)
                        this.startValue = size;
                    if (this.startValue !== size)
                        this.notificate("updated", [size]);
                }
            };
            xhr.send();
        }, 1000);
        return this;
    }
    stop() {
        if (this.thread)
            clearInterval(this.thread);
        return this;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyFieldProtocol.ts                                                  +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Протокол поля ввода данных
 * @class elyFieldProtocol
 * @template T
 * @augments elyView
 * @version 1.2
 *
 * #Лог важных изменений:
 */
class elyFieldProtocol extends elyView {
    /**
     * Конструктор
     */
    constructor(options = {}) {
        super(options);
        /**
         * Переменная изменения значения
         * @type {elyObservableProperty<boolean>}
         */
        this.editableProperty = new elyObservableBoolean(true);
        /**
         * Значение
         * @type {elyObservableProperty<{T}>}
         */
        this.valueProperty = new elyObservableProperty();
    }
    /**
     * Возвращает значение поля или устанавливает его
     * @param {T} [value] - значение
     * @return {this}
     */
    value(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.valueProperty);
    }
    /**
     * Вовращает значение доступности поля или устанавливает его
     * @param {boolean} [flag] - флаг доступности редактирования
     * @return {elyFieldProtocol|boolean}
     */
    editable(flag) {
        return elyObservableProperty.simplePropertyAccess(this, flag, this.editableProperty);
    }
    /**
     * Сравнивает значения.
     * Возвращает true, если значения одинаковые.
     *
     * @param {T} value - значения для сравнения
     * @return {boolean}
     */
    compare(value) {
        return this.value() === value;
    }
    /**
     * Очищает значение
     * @return {elyFieldProtocol}
     */
    clearValue() {
        return this.value(this.defaultValue());
    }
    /**
     * Отмечает поле, как поле с ошибкой
     * @param flag
     * @return {this}
     */
    error(flag) {
        // Nothing is done.
        return this;
    }
    /**
     * Возвращает true, если value идентично стандартному значению.
     *
     * Такой метод необходим в проверке изменения значения, ведь, когда вызывается метод
     * elyField.clearValue(), он активирует изменения valueProperty поля.
     *
     *
     *     let field = new ely.textField();
     *     field.change( (value) => {
     *        if(field.isValueDefault(value) === false){
     *            // Теперь мы уверены, что значение было
     *            // изменено, а не сброшено.
     *        }
     *     });
     *
     *
     *
     * Метод {@link elyFieldProtocol.change} имеет параметр clearanceSafe.
     * Подробнее смотрите {@link elyFieldProtocol.change}.
     * @param {T} value
     * @return {boolean}
     */
    isValueDefault(value) {
        return value === this.defaultValue();
    }
    /**
     * Добавляет слушатель изменения значения поля
     * @param {function(val: T, oldVal: T | null)} o
     * @param {boolean} clearanceSafe - защита от сброса
     *
     * Из примера, указанного в методе {@link elyFieldProtocol.isValueDefault} известно,
     * что сброс значения активирует слушатель. Утсановите параметр clearanceSafe в true, тогда
     * добавленный наблюдатель observer будет немного модифицирован
     * (как описано в {@link elyFieldProtocol.isValueDefault}).
     */
    change(o, clearanceSafe = false) {
        if (!clearanceSafe)
            this.valueProperty.change(o);
        else
            this.valueProperty.change((nv, ov) => {
                if (this.isValueDefault(nv))
                    return;
                o(nv, ov);
            });
        return this;
    }
    /**
     * Устанавливает строку для преложения ввода
     * @param {string} [text]
     * @return {this|string}
     */
    placeholder(text) {
        if (text === undefined)
            return this.attribute("placeholder");
        return this.attribute("placeholder", text);
    }
    /**
     * Применяет стандартные опции протокола
     * @param options
     * @protected
     */
    applyProtocolOptions(options = {}) {
        this.value((options.value === undefined || options.value === null) ? this.defaultValue() : options.value);
        if (options.placeholder)
            this.placeholder(options.placeholder);
        if (options.editable)
            this.editable(options.editable);
        if (options.hint)
            this.hint(options.hint);
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyInput.ts                                                          +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент: Элемент ввода текст
 * @version 1.0
 * @class elyInput
 */
class elyInput extends elyFieldProtocol {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(Object.assign({ tag: options.tag || "input", class: "ef-input" }, options));
        this.valueProperty.change((newValue) => this.getDocument().value = newValue);
        this.getDocument().onchange = () => this.value(this.getDocument().value);
        this.editableProperty.change((newValue) => this.getDocument().disabled = !newValue);
        if (options.type)
            this.attribute("type", options.type.toString());
        this.applyProtocolOptions(options);
        this.getDocument().oninput = () => this.notificate("input", [this.getDocument().value]);
        if (options.fieldIcon) {
            this.elyViewWillDraw(() => {
                this.getDocument().before(new elyIconView$1({
                    class: "ef-input-status",
                    iconName: options.fieldIcon,
                }).getDocument());
            });
        }
    }
    /**
     * Возвращает исходной элемент
     */
    getDocument() {
        return this.__view;
    }
    /**
     * Возвращает значение по умолчанию
     */
    defaultValue() {
        return "";
    }
    /**
     * Возвращает true, если значение пустое
     */
    isEmpty() {
        return this.value() === "";
    }
    /**
     * Добавляет слушатель изменения поля
     * @param observer
     */
    addInputObserver(observer) {
        this.addObserver("input", observer);
        return this;
    }
    isValidData() {
        return true;
    }
}

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
 + Файл: efSize.ts                                                            +
 + Файл изменен: 28.12.2018 01:18:31                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Прослушиываемый размер
 */
class efSize extends elyObservable {
    /**
     * Конструктор
     * @param {{width: number, height: number}} props
     */
    constructor(props = { width: 0, height: 0 }) {
        super();
        /**
         * Свойство: ширина
         */
        this.widthProperty = new elyObservableProperty(0);
        /**
         * Свойство: высота
         */
        this.heightProperty = new elyObservableProperty(0);
        if (props.d !== undefined) {
            this.width(props.d || 0);
            this.height(props.d || 0);
        }
        else {
            this.width(props.width || 0);
            this.height(props.height || 0);
        }
        this.widthProperty.change(value => this.notificate("changed", ["width", value, this.height()]));
        this.heightProperty.change(value => this.notificate("changed", ["height", this.width(), value]));
    }
    /**
     * Возвращает нулевой размер
     * @return {efSize}
     */
    static zero() {
        return new efSize({ width: 0, height: 0 });
    }
    /**
     * Возвращает и устанавливает ширина
     * @param {number} [value] - значение
     * @returns {number|this|null}
     */
    width(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.widthProperty);
    }
    /**
     * Возвращает и устанавливает высота
     * @param {number} [value] - значение
     * @returns {number|this|null}
     */
    height(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.heightProperty);
    }
    /**
     * Изменяет размер
     *
     * @param {number} sW   - ширина или общее значение
     * @param {number} [sH] - высота
     * @return {this}
     */
    scale(sW, sH) {
        if (sH === undefined) {
            this.width(this.width() * sW);
            this.height(this.height() * sW);
        }
        else {
            this.width(this.width() * sW);
            this.height(this.height() * (sH || 0));
        }
        return this;
    }
    /**
     * Добавляет наблюдатель: изменение размера
     *
     * Имя обсервера: changed
     *
     * @param o - наблюдатель
     */
    addChangeObserver(o) {
        this.addObserver("changed", o);
        return this;
    }
    /**
     * Преобразует объект в строку
     * @return {string}
     */
    toString() {
        return `efSize{w: ${this.width()}, h: ${this.height()}}`;
    }
}

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
 + Файл: ef2DVectorValues.ts                                                  +
 + Файл изменен: 04.01.2019 22:39:06                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Векторные константные значения
 * @class ef2DVectorValues
 */
class ef2DVectorValues {
    /**
     * Создает и возвращает нулевой вектор
     * @return {ef2DVectorValues}
     */
    static zero() {
        return new ef2DVectorValues({ x: 0, y: 0 });
    }
    /**
     * Конструктор
     * @param {{ point?: ef2DVector, x?: number, y?: number }} props - параметры
     */
    constructor(props) {
        if (props.point) {
            this.x = props.point.x();
            this.y = props.point.y();
        }
        else {
            this.x = props.x || 0;
            this.y = props.y || 0;
        }
    }
    /**
     * Создает вектор из значений
     * @return {ef2DVector}
     */
    getVector() {
        return new ef2DVector({ values: this });
    }
    /**
     * Возвращает true, если векторные значения идентичны
     * @param {ef2DVectorValues} vector - вектор сравнения
     */
    equals(vector) {
        return this.x === vector.x && this.y === vector.y;
    }
    /**
     * Преобразует объект в строку
     */
    toString() {
        return `{x: ${this.x}, y: ${this.y}}`;
    }
    /**
     * Возвращает новые значения, умноженные на x,y или на xy
     * @param {{ x?: number, y?: number, xy?: number }} props
     * @return {ef2DVectorValues}
     */
    getMultiplied(props) {
        if (props.x && props.y)
            return new ef2DVectorValues({ x: this.x * props.x, y: this.y * props.y });
        if (props.xy)
            return new ef2DVectorValues({ x: this.x * props.xy, y: this.y * props.xy });
        return new ef2DVectorValues({ x: this.x, y: this.y });
    }
    /**
     * Возвращает новые значения, сумированные с x,y или с xy
     * @param {{ x?: number, y?: number, xy?: number }} props
     * @return {ef2DVectorValues}
     */
    getAdd(props) {
        if (props.x && props.y)
            return new ef2DVectorValues({ x: this.x + props.x, y: this.y + props.y });
        if (props.xy)
            return new ef2DVectorValues({ x: this.x + props.xy, y: this.y + props.xy });
        return new ef2DVectorValues({ x: this.x, y: this.y });
    }
}

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
 + Файл: ef2DVector.ts                                                        +
 + Файл изменен: 06.01.2019 05:03:43                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Прослушиваемый вектор.
 *
 * Используйте метод {@link ef2DVector::addChangeObserver} для прослушивания изменений вектора.
 * @class ef2DVector
 * @augments {elyObservable}
 */
class ef2DVector extends elyObservable {
    /**
     * Конструктор
     * @param props
     */
    constructor(props = { x: 0, y: 0 }) {
        super();
        /**
         * Свойство: ось x
         */
        this.xProperty = new elyObservableProperty(0);
        /**
         * Свойство: ось y
         */
        this.yProperty = new elyObservableProperty(0);
        if (props.values) {
            this.x(props.values.x);
            this.y(props.values.y);
        }
        else {
            this.x(props.x || 0);
            this.y(props.y || 0);
        }
        this.xProperty.change(value => this.notificate("changed", [elyAxis.x, value, this.y()]));
        this.yProperty.change(value => this.notificate("changed", [elyAxis.y, this.x(), value]));
    }
    /**
     * Нулевой вектор
     * @return {ef2DVector}
     */
    static zero() {
        return new ef2DVector();
    }
    /**
     * Возвращает и устанавливает ось x
     * @param {number} [value] - значение
     * @returns {number|this|null}
     */
    x(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.xProperty);
    }
    /**
     * Возвращает и устанавливает ось y
     * @param {number} [value] - значение
     * @returns {number|this|null}
     */
    y(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.yProperty);
    }
    /**
     * Добавляет наблюдатель: изменение координат
     *
     * Имя обсервера: changed
     *
     * @param o - наблюдатель
     *
     *
     *     vc.addChangeObserver( (dir, nX, nY) => {
     *        if( dir === elyAxis.x){
     *          // Изменился X
     *        } else {
     *          // Изменился Y
     *        }
     *     });
     *
     *
     */
    addChangeObserver(o) {
        this.addObserver("changed", o);
        return this;
    }
    /**
     * Преобразует объект в строку
     * @return {string}
     */
    toString() {
        return `ef2DVector{x: ${this.x()}, y: ${this.y()}}`;
    }
    /**
     * Возвращает true, если векторы идентичны
     * @param vector
     */
    equals(vector) {
        return this.x() === vector.x() && this.y() === vector.y();
    }
    /**
     * Возвращает константные значения вектора
     */
    getValues() {
        return new ef2DVectorValues({ point: this });
    }
}

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
 + Файл: efContextElement.ts                                                  +
 + Файл изменен: 04.01.2019 21:55:41                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент контекста `ef.cnv`
 */
class efContextElement {
    /**
     * Конструктор
     * @param {{ rect: ef2DRect, angle?: number, filter?: string }} props - параметры
     */
    constructor(props) {
        this.rect = props.rect;
        this.angle = props.angle || undefined;
        this.filter = props.filter || undefined;
    }
}

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
 + Файл: efContextImage.ts                                                    +
 + Файл изменен: 04.01.2019 22:07:06                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Изображение `ef.cnv`
 */
class efContextImage extends efContextElement {
    /**
     * Конструктор
     * @param {{ rect: ef2DRect, image: CanvasImageSource, subImage?:
     * ef2DRect, angle?: number, filter?: string}} props - параметры
     */
    constructor(props) {
        super(props);
        this.image = props.image;
        this.subImage = props.subImage || undefined;
    }
}

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
 + Файл: efContextRect.ts                                                     +
 + Файл изменен: 04.01.2019 21:53:18                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Прямоугольник `ef.cnv`
 */
class efContextRect extends efContextElement {
    /**
     * Конструктор
     * @param {{rect: ef2DRect, fillColor?: elyColor,
     * strokeColor?: elyColor, strokeWidth?: number, angle?: number}} props - параметры
     */
    constructor(props) {
        super(props);
        /**
         * Толщина линии обводки
         * @type {number}
         */
        this.strokeWidth = 1;
        this.strokeColor = props.strokeColor || undefined;
        this.fillColor = props.fillColor || undefined;
        this.strokeWidth = props.strokeWidth === undefined ? 1 : props.strokeWidth;
    }
}

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
 + Файл: ef2DRect.ts                                                          +
 + Файл изменен: 06.01.2019 05:09:28                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Прямоугольник
 */
class ef2DRect {
    /**
     * Конструктор
     * @param {{ position: ef2DVectorValues, size: efSize }} props
     */
    constructor(props) {
        this.size = props.size;
        this.position = props.position;
    }
    /**
     * Возвращает вторую точку прямоугольника
     * @return {ef2DVectorValues}
     */
    getSecondPosition() {
        return new ef2DVectorValues({
            x: this.position.x + this.size.width(),
            y: this.position.y + this.size.height(),
        });
    }
    /**
     * Возвращает центральную позицию прямоугольника
     * @return {ef2DVectorValues}
     */
    getCenterPosition() {
        return new ef2DVectorValues({
            x: this.position.x + (this.size.width() / 2),
            y: this.position.y + (this.size.height() / 2),
        });
    }
    /**
     * Возвращает true, если точка находится в квадрате
     * @param {ef2DVectorValues} point
     * @return {boolean}
     */
    isPointInRect(point) {
        const x = point.x;
        const y = point.y;
        const pos = this.position;
        return y >= pos.y && y < pos.y + this.size.height()
            && x >= pos.x && x < pos.x + this.size.width();
    }
}

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
 + Файл: efContextText.ts                                                     +
 + Файл изменен: 04.01.2019 22:16:14                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Текст `ef.cnv`
 */
class efContextText extends efContextElement {
    /**
     * Конструктор
     * @param {{ text: string, vector: ef2DVectorValues, font?: { size: number, fontName: string },
     * fillColor?: elyColor, strokeColor?: elyColor, strokeWidth?: number, alignCenter?: number, maxWidth?: number,
     * lineSpacing?: number }} props
     */
    constructor(props) {
        super(Object.assign({}, props, { rect: new ef2DRect({ position: props.vector, size: efSize.zero() }) }));
        /**
         * Шрифт
         */
        this.font = { size: 14, fontName: "Arial" };
        /**
         * Толщина линии обводки текста
         */
        this.strokeWidth = 1;
        /**
         * Вырванивание по центру
         */
        this.alignCenter = false;
        /**
         * Расстояние между линиями
         */
        this.lineSpacing = 5;
        this.text = props.text;
        this.fillColor = props.fillColor || undefined;
        this.strokeColor = props.strokeColor || undefined;
        this.strokeWidth = props.strokeWidth === undefined ? 1 : props.strokeWidth;
        this.alignCenter = props.alignCenter || false;
        this.maxWidth = props.maxWidth || undefined;
        this.lineSpacing = props.lineSpacing === undefined ? 5 : props.lineSpacing;
    }
}

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
 + Файл: efCanvasLayer.ts                                                     +
 + Файл изменен: 28.12.2018 01:10:41                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
class efCanvasLayer extends elyView {
    /**
     * Конструктор
     */
    constructor() {
        super({ tag: "canvas" });
        /**
         * Размеры
         */
        this.size = efSize.zero();
        this.addClass("ef-cnv-layer");
        this._ctx = this.getDocument().getContext("2d");
    }
    /**
     * Возвращает контекст
     * @return {CanvasRenderingContext2D}
     */
    getContext() {
        return this._ctx;
    }
    /**
     * Возвращает DOM объект
     */
    getDocument() {
        return super.getDocument();
    }
    /**
     * Отрисовывает объект {@link efContextElement}
     * @param {efContextElement|efContextRect|efContextImage} e
     */
    draw(e) {
        this.getContext().save();
        if (e.angle)
            this.rotateCanvas({ vector: e.rect.position, size: e.rect.size, angle: e.angle });
        if (e.filter)
            this.getContext().filter = e.filter;
        if (e instanceof efContextRect) {
            if (e.fillColor) {
                this.getContext().fillStyle = e.fillColor.getHexString();
                this.getContext().fillRect(e.rect.position.x, e.rect.position.y, e.rect.size.width(), e.rect.size.height());
            }
            if (e.strokeColor) {
                this.getContext().strokeStyle = e.strokeColor.getHexString();
                this.getContext().lineWidth = e.strokeWidth;
                this.getContext().strokeRect(e.rect.position.x, e.rect.position.y, e.rect.size.width(), e.rect.size.height());
            }
        }
        else if (e instanceof efContextImage) {
            if (e.subImage) {
                this.getContext().drawImage(e.image, e.rect.position.x, e.rect.position.y, e.rect.size.width(), e.rect.size.height(), e.subImage.position.x, e.subImage.position.y, e.subImage.size.width(), e.subImage.size.height());
            }
            else {
                this.getContext().drawImage(e.image, e.rect.position.x, e.rect.position.y, e.rect.size.width(), e.rect.size.height());
            }
        }
        else if (e instanceof efContextText) {
            if (e.font)
                this.getContext().font = `${e.font.size}px ${e.font.fontName}`;
            if (e.alignCenter)
                this.getContext().textAlign = "center";
            if (e.strokeWidth)
                this.getContext().lineWidth = e.strokeWidth;
            const pieces = e.text.split("\n");
            let y = e.font.size;
            for (const str of pieces) {
                if (e.fillColor) {
                    this.getContext().fillStyle = e.fillColor.getHexString();
                    this.getContext().fillText(str, e.rect.position.x, e.rect.position.y + y, e.maxWidth);
                }
                if (e.strokeColor) {
                    this.getContext().strokeStyle = e.strokeColor.getHexString();
                    this.getContext().strokeText(str, e.rect.position.x, e.rect.position.y + y, e.maxWidth);
                }
                y += (e.font.size + e.lineSpacing);
            }
        }
        this.getContext().restore();
    }
    /**
     * Поворачивает холст относительно координаты и размера
     * @param {{ vector: ef2DVectorValues, size: efSize, angle: number }} props - параметры
     */
    rotateCanvas(props) {
        const pos = props.vector;
        const size = props.size;
        const angle = props.angle;
        this.getContext().translate(pos.x + (size.width() / 2), pos.y + (size.height() / 2));
        this.getContext().rotate(angle * Math.PI / 180);
        this.getContext().translate(-(pos.x + (size.width() / 2)), -(pos.y + (size.height() / 2)));
    }
    /**
     * Очищает слой
     */
    clear() {
        const size = this.size;
        this.getContext().clearRect(0, 0, size.width(), size.height());
        return this;
    }
}

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
 + Файл: efCanvas.ts                                                          +
 + Файл изменен: 28.12.2018 01:10:10                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Холст
 */
class efCanvas extends elyView {
    /**
     * Конструктор
     * @param {{size: efSize, layers?: efCanvasLayer[]}} props
     */
    constructor(props) {
        super();
        /**
         * Размер холста
         */
        this.size = new efSize();
        /**
         * Слои
         */
        this.layers = new elyObservableArray();
        this.addClass("ef-cnv");
        this.size.heightProperty.change(value => this.forEachLayer(layer => {
            layer.getDocument().height = value;
            layer.getStyle().height = value + "px";
            layer.size.height(value);
        }));
        this.size.widthProperty.change(value => this.forEachLayer(layer => {
            layer.getDocument().width = value;
            layer.getStyle().width = value + "px";
            layer.size.width(value);
        }));
        this.size.width(props.size.width());
        this.size.height(props.size.height());
        this.layers.change(() => {
            this.removeViewContent();
            this.layers.get().forEach((layer, i) => {
                this.getDocument().append(layer.getDocument());
                layer.getStyle().zIndex = String(i + 1);
            });
            this.size.width(this.size.width());
            this.size.height(this.size.height());
        });
    }
    /**
     * Цикл по слоям
     * @param cb
     */
    forEachLayer(cb) {
        this.layers.get().forEach((value, index) => {
            cb(value, index);
        });
        return this;
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyProgressView.ts                                                   +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент управления: Прогресс бар
 * @version 1.0
 */
let elyProgressView = class elyProgressView extends elyRebuildableViewProtocol {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(options);
        /**
         * Уровень отображения данных
         */
        this.displayInfoLevel = 0;
        this.displayInfoLevel = options.displayInfoLevel || 0;
        this.maxProperty = new elyObservableProperty();
        this.minProperty = new elyObservableProperty();
        this.currentProperty = new elyObservableProperty();
        this.barStyleProperty = new elyObservableProperty(elyStyle.default);
        this.barStyleProperty.change((newValue, oldValue) => {
            if (!oldValue)
                oldValue = elyStyle.default;
            this.barView.removeClass(`bg-${oldValue.value}`).addClass(`bg-${newValue.value}`);
        });
        this.currentProperty.change((newValue) => {
            if (newValue < this.min()) {
                this.current(this.min());
                return;
            }
            else if (newValue > this.max()) {
                this.current(this.max());
                return;
            }
            this.rebuild();
        });
        this.maxProperty.change((newValue) => {
            if (newValue < this.min()) {
                this.max(this.min());
                return;
            }
            else if (newValue < this.current()) {
                this.current(newValue);
                return;
            }
            this.rebuild();
        });
        this.minProperty.change((newValue) => {
            if (newValue > this.max()) {
                this.min(this.max());
                return;
            }
            else if (newValue > this.current()) {
                this.current(this.min());
            }
            this.rebuild();
        });
        this.addClass("ef-pb");
        this.barView = new elyControl$1();
        this.barView.addClass("bar");
        this.getDocument().appendChild(this.barView.getDocument());
        this.denyRebuild(true);
        this.min(options.min || 0);
        this.max(options.max || 100);
        this.denyRebuild(false);
        this.current(options.current || 0);
        this.barStyle(elyStyle.primary);
    }
    /**
     * Возвращает и устанавливает стиль полосы бара
     */
    barStyle(value) {
        if (typeof value === "string")
            value = elyStyle.byName(value);
        return elyObservableProperty.simplePropertyAccess(this, value, this.barStyleProperty);
    }
    /**
     * Устанавливает текущее значение
     * @param value
     */
    current(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.currentProperty);
    }
    /**
     * Устанавливает текущее значение как минимальное
     */
    reset() {
        this.current(this.min());
        return this;
    }
    /**
     * Устанавливает или возвращает максимальное значение
     * @param value
     */
    max(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.maxProperty);
    }
    /**
     * Устанавливает минимальное значение
     * @param value
     */
    min(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.minProperty);
    }
    /**
     * Вовзаращет процент заполненности
     * @param {boolean} flex - сглаживание значения процента до
     * digits значений после запятой
     *
     * @param {number} digits - количество значение после запятой
     */
    getPercentage(flex = false, digits = 2) {
        let pc = (this.current() === 0 || this.current() < this.min()) ?
            0 : this.current() / this.max();
        pc *= 100;
        if (flex) {
            digits *= 10;
            pc = Math.round(pc * digits) / digits;
        }
        return pc;
    }
    /**
     * @ignore
     * @private
     */
    __rebuild() {
        this.barView.width(this.getPercentage() + "%");
        if (this.displayInfoLevel === 1) {
            this.hint(this.getPercentage(true) + "%");
        }
        else if (this.displayInfoLevel === 2) {
            this.hint(`${this.current()} / ${this.max()} [ ${this.getPercentage(true)}% ]`);
        }
        return this;
    }
};
elyProgressView = __decorate([
    designable("barStyle", elyDesignableFieldState.GETSET, "string", elyStyle.list()),
    designable("current", elyDesignableFieldState.GETSET)
], elyProgressView);
var elyProgressView$1 = elyProgressView;

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
 + Проект: ely.flat.application                                               +
 +                                                                            +
 + Файл: elyDataGridView.ts                                                   +
 + Файл изменен: 27.11.2018 22:06:16                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
let elyDataGridView = 
/**
 * Элемент отображения: Таблица элементов
 *
 * @author Diego Ling
 */
class elyDataGridView extends elyView {
    /**
     * Конструктор
     * @param props
     */
    constructor(props = {}) {
        super(Object.assign({}, props, { tag: "table" }));
        /**
         * Запрещает обновление
         */
        this.denyUpdate = false;
        /**
         * Делегат
         * @ignore
         */
        this.itemDelegateProperty = ((rowIndex, colIndex) => {
            return (this.sourceData[rowIndex] || [])[colIndex] || "";
        });
        /**
         * Делегат заголвков
         * @ignore
         */
        this.headersDelegateProperty = (colIndex => {
            return (this.headers || [])[colIndex] || "";
        });
        /**
         * Исходные данные
         * @ignore
         */
        this.sourceData = [];
        /**
         *  Заголовки
         *  @ignore
         */
        this.headers = null;
        /**
         * Делегат запроса на разрешение редактировании ячейки
         * @ignore
         */
        this.allowEditDelegateProperty = (() => false);
        /**
         * Делегат обработки сохранения значения
         * @ignore
         */
        this.shouldSaveDelegateProperty = (() => true);
        this.addClass("ef-dgv");
        this.denyUpdate = true;
        this.sourceData = props.sourceData || [];
        this.headers = props.headers || null;
        this.rowsCountProperty = new elyObservableProperty(props.rowsCount || 0);
        this.colsCountProperty = new elyObservableProperty(props.colsCount || 0);
        this.firstColumnIsHeaderProperty = new elyObservableProperty(props.firstColumnIsHeader || false);
        this.borderedStyleProperty = new elyObservableProperty(false);
        this.titleProperty = new elyObservableProperty("");
        this.rowsCountProperty.change(() => this.update());
        this.colsCountProperty.change(() => this.update());
        this.firstColumnIsHeaderProperty.change(() => this.update());
        this.titleProperty.change(() => this.update());
        this.borderedStyleProperty.change(value => {
            if (value)
                this.addClass("bordered");
            else
                this.removeClass("bordered");
        });
        if (props.title)
            this.title(props.title);
        this.borderedStyle(props.borderedStyle || false);
        this.dataGridViewAllowEdit(() => false);
        this.dataGridShouldSave(() => true);
        if (props.sourceData && (!props.rowsCount && !props.colsCount)) {
            this.rowsCount(props.sourceData.length || 0);
            this.colsCount((props.sourceData.length || 0) > 0 ? props.sourceData[0].length : 0);
        }
        this.denyUpdate = false;
        this.update();
    }
    /**
     * Возвращает и устанавливает заголовок таблицы
     */
    title(value) {
        const val = elyObservableProperty.simplePropertyAccess(this, value, this.titleProperty);
        return val instanceof elyView ? "" : val;
    }
    /**
     * Возвращает и устанавливает флаг - рамка вокруг таблицы
     */
    borderedStyle(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.borderedStyleProperty);
    }
    /**
     * Устанавливает данные
     * @param sourceData
     */
    setData(sourceData) {
        this.sourceData = sourceData;
        return this.update();
    }
    /**
     * Устанавливает заголовки
     * @param headers
     */
    setHeaders(headers) {
        this.headers = headers;
        return this.update();
    }
    /**
     * Возвращает и устанавливает флаг - первая колонка - колонка заголовков
     */
    firstColumnIsHeader(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.firstColumnIsHeaderProperty);
    }
    /**
     * Возвращает и устанавливает количество колонок в таблице
     */
    colsCount(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.colsCountProperty);
    }
    /**
     * Возвращает и устанавливает количество строк таблицы
     */
    rowsCount(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.rowsCountProperty);
    }
    /**
     * Устанавливает делегат для установки элементов
     * @param delegate
     */
    dataGridViewItem(delegate) {
        this.itemDelegateProperty = delegate;
        return this.update();
    }
    /**
     * Устанавливает делегат для установки заголовков
     * @param delegate
     */
    dataGridViewHeader(delegate) {
        this.headersDelegateProperty = delegate;
        return this.update();
    }
    /**
     * Устанавливает делегат запроса на разрешение редактировании ячейки
     * @param delegate
     */
    dataGridViewAllowEdit(delegate) {
        this.allowEditDelegateProperty = delegate;
        return this.update();
    }
    /**
     * Устанавливает делегат обработки сохранения значения
     * @param delegate
     */
    dataGridShouldSave(delegate) {
        this.shouldSaveDelegateProperty = delegate;
        return this.update();
    }
    /**
     * Добавляет наблюдатель: отрисовка строки элемента
     *
     * Имя обсервера: rowDraw
     * @param o
     */
    addRowDrawObserver(o) {
        this.addObserver("rowDraw", o);
        return this;
    }
    /**
     * Добавляет наблюдатель: отрисовка элемента
     *
     * Имя обсервера: cellDraw
     *
     * @param o - наблюдатель
     */
    addCellDrawObserver(o) {
        this.addObserver("cellDraw", o);
        return this;
    }
    /**
     * Добавляет наблюдатель: отрисовка строки заголовков таблицы
     *
     * Имя обсервера: headerRowDraw
     *
     * @param o - наблюдатель
     */
    addHeaderRowDrawObserver(o) {
        this.addObserver("headerRowDraw", o);
        return this;
    }
    /**
     * Добавляет наблюдатель: отрисовка элемента заголовка
     *
     * Имя обсервера: headerCellDraw
     *
     * @param o - наблюдатель
     */
    addHeaderCellDrawObserver(o) {
        this.addObserver("headerCellDraw", o);
        return this;
    }
    /**
     * Обновляет таблицу
     */
    update() {
        if (this.denyUpdate)
            return this;
        this.removeViewContent();
        //
        // Отрисовка заголовка
        //
        if (this.titleProperty.get()) {
            const cap = new elyControl$1({ tag: "caption" });
            cap.addSubView(elyControl$1.tryMutateToView(this.titleProperty.get()));
            this.getDocument().append(cap.getDocument());
        }
        //
        // Отрисовка заголовков таблицы
        //
        if (this.headers) {
            const row = new elyControl$1({ tag: "tr" });
            this.notificate("headerRowDraw", [row]);
            for (let j = 0; j < this.colsCount(); j++) {
                const col = new elyControl$1({ tag: "th" });
                const cell = elyControl$1.tryMutateToView(this.headersDelegateProperty(j));
                this.notificate("headerCellDraw", [j, col, cell]);
                col.addSubView(cell);
                row.addSubView(col);
            }
            this.getDocument().append(row.getDocument());
        }
        //
        //  Отрисовка элементов таблицы
        //
        for (let i = 0; i < this.rowsCount(); i++) {
            const row = new elyControl$1({ tag: "tr" });
            this.notificate("rowDraw", [i, row]);
            for (let j = 0; j < this.colsCount(); j++) {
                const col = new elyControl$1({ tag: (j === 0 && this.firstColumnIsHeader()) ? "th" : "td" });
                let view = elyTextView$1.tryMutateToView(this.itemDelegateProperty(i, j));
                if (this.allowEditDelegateProperty(i, j)) {
                    if (view instanceof elyTextView$1) {
                        view = elyTextView$1.editable(view);
                        view.textViewEditableShouldSaveValue((value, res) => {
                            this.shouldSaveDelegateProperty(i, j, value, shouldSave => {
                                res(shouldSave);
                            });
                        });
                    }
                }
                this.notificate("cellDraw", [i, j, col, view]);
                col.addSubView(view);
                row.addSubView(col);
            }
            this.getDocument().append(row.getDocument());
        }
        return this;
    }
};
elyDataGridView = __decorate([
    designable("title", elyDesignableFieldState.GETSET, "string"),
    designable("rowsCount", elyDesignableFieldState.GETSET, "number"),
    designable("colsCount", elyDesignableFieldState.GETSET, "number")
    /**
     * Элемент отображения: Таблица элементов
     *
     * @author Diego Ling
     */
], elyDataGridView);
var elyDataGridView$1 = elyDataGridView;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyProgressNotificationView.ts                                       +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Шаблон прогресса
 */
class elyProgressNotificationView extends elyNotificationView {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(options);
        /**
         * Индексация строки
         * @ignore
         */
        this.__currentStringIndex = 1;
        if (!options.strings || options.strings.length === 0)
            options.strings = ["Пожалуйста, полождите..."];
        this.iconView = new elyIconView$1({ iconName: "refresh", iconSize: 60, iconSpinning: true });
        this.progressTitleView = new elyTextView$1({
            text: options.progressTitle || "Загрузка...", textSize: elySize.middle,
        });
        this.textView = new elyTextView$1({ text: options.strings[0] });
        const timer = setInterval(() => {
            if (this.__currentStringIndex === options.strings.length) {
                clearInterval(timer);
                return;
            }
            this.textView.fadeOut(() => {
                this.textView.text(options.strings[this.__currentStringIndex]);
                this.textView.fadeIn();
                this.__currentStringIndex++;
            });
        }, elyProgressNotificationView.STRINGS_TIME * this.__currentStringIndex);
        this.closable(false);
        this.contentView.getStyle().textAlign = "center";
        this.contentView.addSubView(this.iconView);
        this.contentView.addSubView(this.progressTitleView);
        this.contentView.addSubView(this.textView);
    }
    /**
     * Устанавливает заголовок загрузки
     * @param text
     */
    progressTitle(text) {
        this.progressTitleView.text(text);
        return this;
    }
}
/**
 * Коэффициент времени, необходимы для переключения строки
 */
elyProgressNotificationView.STRINGS_TIME = 3000;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyModalView.ts                                                      +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var elyModalView_1;
/**w
 * Элемент отображения: Модальное окно
 * @version 1.0
 * @class elyModalView
 * @augments {elyView}
 */
let elyModalView = elyModalView_1 = class elyModalView extends elyView {
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(options);
        /**
         * Элемент модального окна
         * @readonly
         * @type {elyControl}
         */
        this.modalContainerView = new elyControl$1({ class: "ef-modal-container" });
        /**
         * Элемент заголовка
         * @readonly
         * @type {elyTextView}
         */
        this.modalTitleView = new elyTextView$1({ class: "title" });
        /**
         * Кнопка закрытия
         * @type {elyIconView}
         * @readonly
         */
        this.modalCloseButtonView = new elyIconView$1({ iconName: "close", class: "close" });
        /**
         * Элемент контента
         * @type {elyView}
         * @readonly
         * @protected
         */
        this.modalContentView = new elyControl$1({ class: "content" });
        /**
         * Свойство: заголовок окна
         * @ignore
         * @protected
         * @type {elyObservableProperty<string>}
         * @readonly
         */
        this.modalTitleProperty = new elyObservableProperty();
        /**
         * Свойство: флаг возможности скрытия окна
         * @ignore
         * @protected
         * @type {elyObservableProperty<boolean>}
         * @readonly
         */
        this.modalClosableProperty = new elyObservableProperty(true);
        /**
         * Свойство: содержимое модального окна
         * @ignore
         * @protected
         * @type {elyObservableProperty<elyView>}
         * @readonly
         */
        this.modalContentProperty = new elyObservableProperty();
        /**
         * Свойство: стиль модального окна
         * @ignore
         * @protected
         * @type {elyObservableProperty<elyStyle>}
         * @readonly
         */
        this.modalStyleProperty = new elyObservableProperty();
        this.addClass("ef-modal");
        // Observe
        this.modalTitleProperty.change((newValue) => this.modalTitleView.text(newValue));
        this.modalContentProperty.change((newValue) => {
            this.modalContentView.removeViewContent();
            this.modalContentView.getDocument().append(newValue.getDocument());
        });
        this.modalStyleProperty.change((newValue, oldValue) => {
            if (oldValue)
                this.modalTitleView.removeClass(`bg-${oldValue.value}`);
            this.modalTitleView.addClass(`bg-${newValue.value}`);
        });
        this.modalClosableProperty.change((newValue) => this.modalCloseButtonView.hidden(!newValue));
        this.modalCloseButtonView.addObserver("click", () => this.dismiss());
        this.modalTitleView.getDocument().append(this.modalCloseButtonView.getDocument());
        this.modalContainerView.addSubView(this.modalTitleView);
        this.modalContainerView.addSubView(this.modalContentView);
        this.getDocument().append(this.modalContainerView.getDocument());
        // Set
        this.modalTitle(options.modalTitle || "Modal");
        this.modalContent(options.modalContent || elyControl$1.empty());
        this.modalStyle(options.modalStyle || elyStyle.primary);
        if (options.modalClosable === undefined)
            this.modalClosable(true);
        else
            this.modalClosable(options.modalClosable);
    }
    /**
     * Открывает следующее модальное окно из стэка
     * @protected
     * @static
     */
    static next() {
        if (elyModalView_1.queue.length > 0 && elyModalView_1.currentModal === null) {
            elyModalView_1.currentModal = elyModalView_1.queue.pop();
            elyBodyView.default.addSubView(elyModalView_1.currentModal);
            elyModalView_1.currentModal.fadeIn();
        }
    }
    /**
     * Отображает модальное окно
     * @return
     */
    present() {
        this.notificate("present", [this]);
        elyModalView_1.queue.push(this);
        elyModalView_1.next();
    }
    /**
     * Скрывает модальное окно
     * @param {boolean} [force = false]
     * @return
     *
     * Модальное окно может быть "незакрываемым", тогда
     * удалить его можно только используя параметр `force`.
     *
     *
     *     myModal.dismiss(true); // Force dismiss modal
     *
     *
     */
    dismiss(force = false) {
        if (this.modalClosable() || force) {
            this.notificate("dismiss", [this]);
            this.fadeOut(() => {
                elyBodyView.default.removeSubView(this);
                elyModalView_1.currentModal = null;
                elyModalView_1.next();
            });
        }
    }
    /**
     * Возвращает и устанавливает заголовок окна
     * @param {string} [value]
     * @return {this|string}
     */
    modalTitle(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.modalTitleProperty);
    }
    /**
     * Возвращает и устанавливает содержимое модального окна
     * @param {elyView|string} [value]
     * @return {elyView|null|this}
     */
    modalContent(value) {
        if (typeof value === "string")
            value = new elyTextView$1({ text: value });
        return elyObservableProperty.simplePropertyAccess(this, value, this.modalContentProperty);
    }
    /**
     * Возвращает и устанавливает флаг возможности скрытия окна
     * @param {boolean} [value]
     * @return {boolean|this}
     */
    modalClosable(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.modalClosableProperty);
    }
    /**
     * Возвращает и устанавливает стиль модального окна
     * @param {elyStyle|string} [value]
     * @return {this|elyStyle}
     */
    modalStyle(value) {
        if (typeof value === "string")
            value = elyStyle.byName(value);
        return elyObservableProperty.simplePropertyAccess(this, value, this.modalStyleProperty);
    }
};
/**
 * Текущее окно
 * @type {elyModalView|null}
 */
elyModalView.currentModal = null;
/**
 * Очередь из объектов
 * @protected
 * @type {elyModalView[]}
 */
elyModalView.queue = [];
elyModalView = elyModalView_1 = __decorate([
    designable("modalTitle", elyDesignableFieldState.GETSET, "string"),
    designable("modalContent", elyDesignableFieldState.GETSET, "string"),
    designable("modalClosable", elyDesignableFieldState.GETSET, "boolean")
], elyModalView);
var elyModalView$1 = elyModalView;

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyScrollView.ts                                                     +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент с прокруткой
 */
class elyScrollView extends elyControl$1 {
    /**
     * Конструктор
     * @param option
     */
    constructor(option = {}) {
        super({ class: "ef-scroll-view" });
        this.scrollHorizontalProperty = new elyObservableProperty();
        this.scrollVerticalProperty = new elyObservableProperty();
        this.scrollSnapCenterProperty = new elyObservableProperty();
        this.scrollHorizontalProperty.change((newValue) => {
            if (newValue)
                this.addClass("horizontal");
            else
                this.removeClass("horizontal");
        });
        this.scrollVerticalProperty.change((newValue) => {
            if (newValue)
                this.addClass("vertical");
            else
                this.removeClass("vertical");
        });
        this.scrollSnapCenterProperty.change((newValue) => {
            if (newValue)
                this.addClass("mnd-center");
            else
                this.removeClass("mnd-center");
        });
        this.scrollHorizontal(option.scrollHorizontal || false);
        this.scrollVertical(option.scrollVertical || false);
        this.scrollSnapCenter(option.scrollSnapCenter || false);
    }
    /**
     * Возвращает и устанавливает скроллинг по вертикали
     */
    scrollVertical(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.scrollVerticalProperty);
    }
    /**
     * Возвращает и устанавливает скроллинг по горизонтали
     */
    scrollHorizontal(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.scrollHorizontalProperty);
    }
    /**
     * Возвращает и устанавливает флаг фиксации элементов прокрутки в центре блока
     */
    scrollSnapCenter(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.scrollSnapCenterProperty);
    }
    /**
     * Прокручивает объект элементы
     * @param h
     * @param v
     */
    scrollBy(h, v = 0) {
        this.getDocument().scrollBy({ top: h, left: v, behavior: "smooth" });
        return this;
    }
    /**
     * Прокручивает объект горизонтально
     * @param value
     */
    scrollHorizontalBy(value) {
        return this.scrollBy(value, 0);
    }
    /**
     * Прокручивает объект вертикально
     * @param value
     */
    scrollVerticalBy(value) {
        return this.scrollBy(value, 0);
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
 + Файл: elyTableView.ts                                                      +
 + Файл создан: 23.11.2018 23:03:37                                           +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Элемент отображения: Таблица
 * @version 1.0
 * @deprecated
 */
class elyTableView extends elyRebuildableViewProtocol {
    /**
     * Создает строку
     */
    static createTableRowView() {
        return new elyControl$1({ tag: "tr" });
    }
    /**
     * Создает колонку
     * @param isHeader
     */
    static createTableColumnView(isHeader = false) {
        return new elyControl$1({ tag: isHeader ? "th" : "td" });
    }
    /**
     * Конструктор
     * @param options
     */
    constructor(options = {}) {
        super(Object.assign({ tag: "table" }, options));
        this.rows = [];
        this.headerRow = [];
        this.titleView = new elyTextView$1({ tag: "caption" });
        this.headView = new elyControl$1({ tag: "thead" });
        this.bodyView = new elyControl$1({ tag: "tbody" });
        this.titleProperty = new elyObservableProperty();
        this.titleProperty.change((newValue) => this.titleView.text(newValue));
        if (options.title)
            this.title(options.title);
        this.rebuild();
    }
    /**
     * Устанавливает или возвращает заголовок
     * @param value
     */
    title(value) {
        return elyObservableProperty.simplePropertyAccess(this, value, this.titleProperty);
    }
    /**
     * Добавляет строку
     * @param columns
     */
    addRow(...columns) {
        this.rows.push(columns);
        this.rebuild();
        return this;
    }
    /**
     * Добавляет строку и индекс
     * @param index
     * @param columns
     */
    addRowIndex(index, ...columns) {
        this.rows.splice(index, 0, columns);
        this.rebuild();
        return this;
    }
    /**
     * Устанавливает заголовочную строку
     * @param columns
     */
    setHeaderRow(...columns) {
        this.headerRow.splice(0, this.headerRow.length);
        this.headerRow.splice(0, 0, ...columns);
        this.rebuild();
        return this;
    }
    /**
     * Добавляет колонку в заголовчную строку
     * @param column
     */
    addHeaderColumn(column) {
        this.headerRow.push(column);
        this.rebuild();
        return this;
    }
    /**
     * Реализация перестроения
     * @ignore
     * @private
     */
    __rebuild() {
        this.removeViewContent();
        this.getDocument().appendChild(this.titleView.getDocument());
        this.getDocument().appendChild(this.headView.getDocument());
        this.headView.removeViewContent();
        this.getDocument().appendChild(this.bodyView.getDocument());
        this.bodyView.removeViewContent();
        const rowView = elyTableView.createTableRowView();
        for (const hview of this.headerRow) {
            rowView.addSubView(elyTableView.createTableColumnView(true).addSubView(hview));
        }
        this.headView.addSubView(rowView);
        for (const row of this.rows) {
            const rowView = elyTableView.createTableRowView();
            for (const item of row) {
                rowView.addSubView(elyTableView.createTableColumnView().addSubView(item));
            }
            this.bodyView.addSubView(rowView);
        }
        return this;
    }
}

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
 + Файл: ely.flat.ts                                                          +
 + Файл изменен: 02.01.2019 14:04:43                                          +
 +                                                                            +
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * @interface elyViewOptions
 */
/**
 * @typedef {Object} IPosition
 * @property {number|string} [top]
 * @property {number|string} [right]
 * @property {number|string} [bottom]
 * @property {number|string} [left]
 */
/**
 * @typedef {Object} elyFlexGridViewOptions
 * @property {number[][]} [flex]
 * @property {IPosition} [margin]
 */
/**
 * @typedef {elyFlexGridViewOptions} elyFormViewOptions
 * @property {boolean} [checkEmpty = true] - проверка на пустоту
 * @property {boolean} [detectSubmitButton = true] - автоопределение кнопки submit
 * @property {boolean} [checkValidation = true] - проверка валидации
 */
/**
 * @typedef {Object} elyFieldViewOptions
 * @property {string} [placeholder]
 * @property {boolean} [editable]
 * @property {string} [hint]
 */
/**
 * @typedef {elyFieldViewOptions} elySwitchFieldOptions
 * @property {string} [title]
 * @property {boolean} [value]
 */
/**
 * @typedef {elyFieldOptions} elyDataPickerFieldOptions
 * @property {number} [maxTipsCount]
 * @property {Object|string[]} [items]
 * @property {*} [value]
 */
/**
 * @typedef {elyFieldOptions} elyTextFieldOptions
 * @property {elyFieldType} [fieldType]
 * @property {boolean} [encrypted]
 * @property {string} [fieldIcon]
 * @property {string} [value]
 */
/**
 *
 * @param result
 */
const elyOnReady = (result) => {
    elyFlatApplication.default.addReadyObserver(result);
};
/**
 *
 * @param name
 * @param viewController
 * @param canOverwrite
 */
const addController = (name, viewController, canOverwrite = true) => {
    elyScreenController.default.addControllerName(name, viewController, canOverwrite);
};
/**
 * Возвращает тело приложения
 */
const getBodyView = () => {
    return elyBodyView.default;
};
const developMode = (bool) => {
    if (bool) {
        elyOnReady(next => {
            new elyFileWatcher({ filePath: "js/index.js" }).start().addUpdateListener(() => {
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            });
            next(true);
        });
    }
};
window.onload = () => {
    elyXLogger.default.clear = true;
    elyFlatApplication.loadApplication(() => {
        //
    });
};
window.elyflatobjects = {
    elyView,
    elyBodyView,
    elyControl: elyControl$1,
    elyButton: elyButton$1,
    elyIconView: elyIconView$1,
    elyTextViewEditable,
    elyProgressView: elyProgressView$1,
    elyLinkTextView: elyLinkTextView$1,
    elyTextView: elyTextView$1,
    elyGridView,
    elyStaticGridView: elyStaticGridView$1,
    elyPanelView: elyPanelView$1,
    elyImageView: elyImageView$1,
    elyFormView,
    elyDataGridView: elyDataGridView$1,
    elyNotificationView,
    elyProgressNotificationView,
    elyListView,
    elyModalView: elyModalView$1,
    elyScrollView,
    elyTableView,
    elyInput,
    elyTextField,
    elySwitchField,
    elyDataPickerField,
    elyColorPickerField: elyColorPickerField$1,
};

export { getBodyView, elyOnReady, addController, developMode, elyStylesheet, elyFlatApplication, elyView, elyBodyView, elyControl$1 as elyControl, elyButton$1 as elyButton, elyIconView$1 as elyIconView, elyTextViewEditable, elyProgressView$1 as elyProgressView, elyLinkTextView$1 as elyLinkTextView, elyTextView$1 as elyTextView, elyGridView, elyStaticGridView$1 as elyStaticGridView, elyPanelView$1 as elyPanelView, elyImageView$1 as elyImageView, elyFormView, elyDataGridView$1 as elyDataGridView, elyNotificationView, elyProgressNotificationView, elyListView, elyModalView$1 as elyModalView, elyScrollView, elyTableView, elyInput, elyTextField, elySwitchField, elyDataPickerField, elyColorPickerField$1 as elyColorPickerField, elyScreenController, elyViewController, elySimplePageViewController, elyGridViewController, elyXLogger, elyUtils, elyFileWatcher, elySize, elyStyle, elyFieldType, efSize, elyAxis, elyDirection, ef2DVector, ef2DVectorValues, efCanvas, efCanvasLayer };
//# sourceMappingURL=ely.flat.js.map
