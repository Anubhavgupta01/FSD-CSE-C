const fs = require('fs');
// // fs.writeFile("./a.txt","abes college", () => { });
// fs.readFile("./a.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else {
//         console.log(result);
//     }
// });
// const fs = require('fs');

// fs.writeFile("./a.txt", "abes college", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });
// fs.appendFileSync("./a.txt",`good`);
// fs.cpSync("./a.txt","./b.txt");


// fs.cp("./a.txt", "./b.txt", (err) => {
//   if (err) {
//     console.error("Error copying file:", err);
//   } else {
//     console.log("File copied successfully!");
//   }
// });
fs.unlinkSync("./a.txt");