const fs = require('fs');
// const words_dictionary = require('./words_dictionary.json');
// const words_array = require('./words_array.json');

//const raw_words = Object.keys(words_dictionary);

// quick-and-dirty attempt to remove plurals while maintaining
// singular forms that end in -s, e.g. 'grass', 'chess' etc
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

const hasSevenUniqueChars = (word) => {
    // arrange letters in alphabetical order
    // remove dupes
    // if length === 7, return true
    return true;
    // else return false
}

/*
const wordle_words = raw_words.filter(word => word.length === 5).filter(removePlural);
writeToFile('./wordle_clone_words_old.json', JSON.stringify(wordle_words));

const spelling_bee_base_words = words_array.filter(word => word.length >= 7).filter(hasSevenUniqueChars);
writeToFile('./spelling_bee_clone_base_words.json', JSON.stringify(spelling_bee_base_words));
*/

const allowed_answers_array = fs.readFileSync('wordle_allowed_answers_plain.txt').toString().toUpperCase().split("\n");
const allowed_guesses_array = fs.readFileSync('wordle_allowed_guesses_plain.txt').toString().toUpperCase().split("\n");
const final_guesses = allowed_guesses_array.concat(allowed_answers_array).sort();

writeToFile('./allowed_guesses.json', JSON.stringify(final_guesses));
writeToFile('./allowed_answers.json', JSON.stringify(allowed_answers_array));


function writeToFile(file_name, json) {
    try {
        fs.writeFileSync(file_name, json);
    } catch(e) {
        console.log("error writing file:", e);
    }
}


