const fs = require('fs');
const filename = 'personal_infomation.csv';

const readPromise = (path) => {
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


const read = async () => {
    const data = await readPromise(filename);
    console.log('3');
    console.log(data);
    return data;
};

const value = read();

console.log('2');
console.log(value);




