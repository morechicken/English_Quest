const fs = require('fs');

// 既存の単語データを読み込む
const dataFile = fs.readFileSync('./data/word_data.js', 'utf8');
const startIndex = dataFile.indexOf('[');
const endIndex = dataFile.lastIndexOf(']');
const jsonString = dataFile.substring(startIndex, endIndex + 1);
const WORD_DATABASE = JSON.parse(jsonString);

// 生成された例文ファイルを読み込む
const generatedFile = fs.readFileSync('./scripts/generated_sentences.txt', 'utf8').trim();
// "WORD: "で各単語のブロックに分割する
const sections = generatedFile.split('WORD: ').filter(s => s.length > 0);

const generatedData = {};

sections.forEach(section => {
    // 最初の単語と残りの文章部分に分ける
    const firstSpaceIndex = section.indexOf(' ');
    const word = section.substring(0, firstSpaceIndex).trim();
    const restOfLine = section.substring(firstSpaceIndex).trim();
    
    const sentences = [];
    // "EN: "で各例文に分割する
    const sentenceBlocks = restOfLine.split('EN: ').filter(s => s.length > 0);

    sentenceBlocks.forEach(block => {
        // "JP: "で英文と和文に分割
        const parts = block.split('JP:');
        if (parts.length < 2) return;

        const enText = parts[0].trim();
        const jpText = parts[1].trim();

        const fullSentence = enText.replace('___', word);
        const sentenceParts = enText.split('___');

        sentences.push({
            parts: sentenceParts,
            full: fullSentence,
            jp: jpText,
            is_correct: true // 正解データとして追加
        });
    });

    if (sentences.length > 0) {
        generatedData[word] = sentences;
    }
});

// WORD_DATABASEを更新
WORD_DATABASE.forEach(wordObj => {
    if (generatedData[wordObj.word]) {
        // 既存の例文のテキストをSetに格納して、重複チェックを高速化する
        const existingSentences = new Set(wordObj.contexts.map(c => c.full));

        // 生成された例文をループし、重複がないものだけを追加する
        generatedData[wordObj.word].forEach(newSentence => {
            if (!existingSentences.has(newSentence.full)) {
                wordObj.contexts.push(newSentence);
                console.log(`Added: [${wordObj.word}] "${newSentence.full}"`);
            }
        });
    }
});

// 新しいデータファイルの内容を生成
const newFileContent = 'const WORD_DATABASE = ' + JSON.stringify(WORD_DATABASE, null, 2) + ';';

// 元のファイルをバックアップ
fs.renameSync('./data/word_data.js', './data/word_data.js.bak');
// 新しいファイルを書き出す
fs.writeFileSync('./data/word_data.js', newFileContent);

console.log('word_data.js を更新しました。元のファイルは word_data.js.bak としてバックアップされています。');