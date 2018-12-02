let letters = ['s','t','r','e','e','t']

let newWord = ['b','a','d']

// console.log(word.join(''));
let array = []
let word = letters.join('')
array.push(word)
console.log(array)

const pdfWrite = require('pdf-write-page')
pdfWrite({
    'in': './../Resume_coverLetters/TrevorResume.pdf',
    'out': './../Resume_coverLetters/TrevorResume.pdf',
    'pagenumber': 0
}).write(1,1,'A');

