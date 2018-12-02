const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./../Resume_coverLetters/TrevorResume.pdf');
let pdfTextArray = [];
pdf(dataBuffer).then(function(data) {
    // console.log("This is the data", data)
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    // console.log(data.info);
    // PDF metadata
    // console.log(data.metadata); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // PDF text
    // console.log(data.text); 
    
    const re = /[a-z] | [A-Z]/
    let text = data.text
    let letters = []
    let array = ['apple','butter']      //array.includes('string')  returns true or false
    let count = 0
    // console.log(array.match(re))
    // for (var i = 0; i < array.length; i++) {
        if (array.includes('apple')) {
            let index = array.indexOf('apple')
            console.log(array[index + 1])
            return array[index];
        }
        // console.log(array[i].match(re))
    // }
    console.log(count);
    //reg ex for [a-z][A-Z]
    // for (var i = 0; i < text.length; i++){
    //         if (text[i] == re) {
    //             letters.push(text[i]);
    //         } else {
    //             let word = letters.join("");
    //             pdfTextArray.push(word);
    //             letters = []
    //         }
    //     }
    //     console.log(pdfTextArray)
    // function arrayContains(needle, arrhaystack){
    //     return (arrhaystack.indexOf(needle) > -1);
    // }
    // arrayContains('Trevor', pdfTextArray);
        // console.log(pdfTextArray);
        // (function() {
        //     let pdfWrite;
        //     pdfWrite = require ('pdf-write-page');
        //     pdfWrite({
        //         "in": 'test-unmodified.pdf',
        //         'out': 'test_modified.pdf',
        //         pageNumber: 0
        //     }).write(10,0,'A').write(10,14,'B').cfg({
        //         size:60
        //     }).write(10,28, 'C').restoreCfg().write(100,100, 'D').end()
        // }).call(this)
});
// let array = ["trev", "sny", "@gmail", " "]

// pdf =  {"in":'test_unmodified.pdf', out:'test_modified.pdf', pageNumber:0}
// .write 10, 0, 'A'
// .write 10, 14, 'B'
// .cfg {size:60}
// .write 10, 28, 'C'
// .restoreCfg()
// .write 100, 100, 'D'
// .end()


//NOTES
//.includes
//.indexOf
//.match    returns what matched in an array