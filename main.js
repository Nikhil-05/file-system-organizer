#!/usr/bin/env node  
// above line is shabang syantax
//taking input

let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./help");
let organizeObj = require("./organize");
let treeObj = require("./tree");


// console.log(inputArr);
//node main.js tree "directorypath"
//node main.js organize "directory path";
// node main.js help
let command = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
switch(command){
    case "tree":
        // treeFn(inputArr[1]);
        treeObj.treeKey();
        break;
    case "organize":
        // organizeFn(inputArr[1]);
        organizeObj.organizeKey();
        break;
    case "help":
        // helpFn();
        helpObj.helpKey();
        break;
    default:
        console.log("please input right command");
        break;  
}





