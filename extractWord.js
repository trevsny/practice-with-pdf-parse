let letters = ['s','t','r','e','e','t']

let newWord = ['b','a','d']

let array = []
let word = letters.join('')
array.push(word)
console.log(array)

const pdfWrite = require('pdf-write-page')
pdfWrite({'in':'./../Resume_coverLetters/TrevorResume.pdf', 'out': './../Resume_coverLetters/Modified.pdf', 'pageNumber': 0}).write({'x': 1, 'y': 1, 'txt': 'Hello World'}).cfg({'size': 40}).end();

