let fs = require("fs");
let path = require("path");
function organizeFn(dirPath){
    // console.log("organize command implemented for", dirPath);
    // 1. input -> directory path 
    let destPath;
    if(dirPath==undefined){
        // console.log("kindly enter the path");
        destPath = process.cwd();
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        
        if(doesExist){
            //2 create -> organized files folder
             destPath = path.join(dirPath, "organized_files");
            if(fs.existsSync(destPath)==false){
                 fs.mkdirSync(destPath);
                  }
        } else{
            console.log("kindly enter the correct name");
            return;
        }
    }
    //3. check all files - > category 
    //4. copy files to that organized directory inside of any of category of folder
organizeHelper(dirPath,destPath)

    
}
function organizeHelper(src,dest){
    //3. check all files - > category 
    let childNames =fs.readdirSync(src);
   // console.log(childNames);
   for(let i = 0;i<childNames.length;i++){
    let childAddress = path.join(src,childNames[i]);
    let isFile = fs.lstatSync(childAddress).isFile();
    if(isFile){
        // console.log(childNames[i]);
        let category = getCategory(childNames[i]);
        // console.log(childNames[i], "belongs to -->", category);
        sendFiles(childAddress,dest,category);
       


    }
   }


}
function sendFiles(srcFilePath,dest,category){
    let categorypath = path.join(dest,category);
    if(fs.existsSync(categorypath)==false){
        fs.mkdirSync(categorypath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categorypath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to", category);

}
function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    // console.log(ext);
    for(let type in types){
        // console.log(types[type]);
        let cTypeArray = types[type];
        //console.log(cTypeArray);
        for(let i=0; i<cTypeArray.length;i++){
            if(ext==cTypeArray[i]){
                return type;
             }
        }
       
    
    }
    return "others";


}
module.exports = {
    organizeKey: organizeFn
}