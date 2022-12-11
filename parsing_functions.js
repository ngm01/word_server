/* 
    TODO:
        - So the idea is this file lives on an AWS lambda...
        - requests come in from Wordle and Spelling Clones...
        - what requests?
            - WORDLE clone:
                - get a 5 letter word
                - ensure word is not plural
                    - how to distinguish b/t plurals and singular words that end in 's'?
                        - e.g. 'brass', 'grass', vs 'brews', 'grips' etc
                        - could say if last letter === 's' and next-to-last letter != 's'
            - SPELLING BEE clone:
                - get a word where word.length >= 7 && uniqueChars(word) === 7
*/
const words = require('./words_dictionary.json');

const fakeWords = {
    "batch": 1,
    "stare": 1,
    "free": 1,
    "grimace": 1,
    "wonder": 1,
    "funky": 1
}

const get5LetterWord = () => {

}

const getSpellingBeeWord = () => {

}

module.exports = { pruneWordList }