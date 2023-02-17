let fs = require("fs");
let path = require("path");
function helpFn(dirPath){
    console.log(`
    list of all the commands:
                node main.js tree "directorypath"
                node main.js organize "directory path";
                node main.js help
             `);
    
}
module.exports = {
    helpKey: helpFn
}