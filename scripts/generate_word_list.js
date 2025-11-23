const fs = require('fs');
// word_data.jsをテキストとして読み込みます
const dataFile = fs.readFileSync('./data/word_data.js', 'utf8');

// JSON部分だけを抽出します (簡易的な方法)
const startIndex = dataFile.indexOf('[');
const endIndex = dataFile.lastIndexOf(']');
const jsonString = dataFile.substring(startIndex, endIndex + 1);
const WORD_DATABASE = JSON.parse(jsonString); 

let output = '';
WORD_DATABASE.forEach(word => {
  output += `${word.word}: ${word.meaning_core}\n`;
});

fs.writeFileSync('./scripts/word_list_for_ai.txt', output);

console.log('word_list_for_ai.txt を生成しました。');
