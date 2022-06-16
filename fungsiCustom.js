// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let index1 = "";
  let index2 = "";
  let index3 = "";
  let temp = [];
  
  fs.readFile(file1, 'utf-8', (err, data1) => {
    fs.readFile(file2, 'utf-8', (err, data2) => {
      fs.readFile(file3, 'utf-8', (err, data3) => {
        data = [
          index1 = JSON.parse(data1)['message'].split(" ")[1],
          index2 = JSON.parse(data2)[0]['message'].split(" ")[1],
          index3 = JSON.parse(data3)[0]['data']['message'].split(" ")[1]
          ];
        
        temp.push(index1);
        temp.push(index2);
        temp.push(index3);
        
        fnCallback(err, temp);
      });
    });
  });
};
  
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
