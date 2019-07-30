const fs = require('fs');
const filename = 'personal_infomation.csv';

fs.readFile(path = filename, options = {
    encoding: 'utf8'
}, (err,data) => {
    if(err){
        console.log(err);
        return;
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
    console.log(personalList);

});

console.log('2');

