// let test = async()=> {
//     await new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("da het 3 s");
//             resolve(null);
//         }, 3000);
//     });
//     setTimeout(() => {
//         console.log("da het 1 s")
//     }, 1000);
//     console.log("da het thoi gian");
//     ;
    
// }
// test();

let db = require('./database');
console.log(db);

db.query("SELECT * FROM user WHERE userID = 16021031", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});