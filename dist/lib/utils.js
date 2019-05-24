"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var TEMP_FILE_PATH = "_temp/temp_file.jpg";
function deleteTemp() {
    return new Promise(function (resolve, reject) {
        try {
            fs.exists(TEMP_FILE_PATH, function () { return fs.unlinkSync(TEMP_FILE_PATH); });
        }
        catch (e) {
            reject(e);
        }
        resolve();
    });
}
module.exports = deleteTemp;
//# sourceMappingURL=utils.js.map