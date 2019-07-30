const fs = require('fs');
const filename = 'personal_infomation.csv';

const readPromse = (path) => {
    return new Promise( (resolve,reject) => {
        fs.readFile(path = path, options = {
            encoding: 'utf8'
        }, (err,data) => {
            if(err){
                console.log(err);
                reject(err);
            }
            console.log('1');
        
            const dataItemList = data.split(/\r\n|\r|\n/);
            const personalList = dataItemList.map((value) => {
                const person = value.split(',');
                return {
                    familyname: person[1],
                    firstname: person[2],
                    mailaddress: person[10]
                };
        
            });
            return resolve(personalList);
        
        });
    });
};

const promise = readPromse(filename);

console.log('2');

promise.then((value) => {
    console.log('3');

    console.log('User:',value);
});

