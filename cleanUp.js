const fs = require('fs');
const words_dictionary = require('./words_dictionary.json');

const raw_words = Object.keys(words_dictionary);

// quick-and-dirty attempt to remove plurals while maintaining singular forms
// that end in -s, e.g. 'grass', 'chess' etc
const removePlural = (word) => {
    const length = word.length;
    if(word[length - 1] === 's') {
        if(word[length - 2] === 's') {
            return true;
        }
        return false;
    }
    return true;
}

const wordle_words = raw_words.filter(word => word.length === 5).filter(removePlural);
writeToFile('./wordle_clone_words.json', JSON.stringify(wordle_words));

function writeToFile(file_name, json) {
    try {
        fs.writeFileSync(file_name, json);
    } catch(e) {
        console.log("error writing file:", e);
    }
}


