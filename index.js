const express = require('express');
const answers = require('./allowed_answers.json');

const app = express();
app.use()
const port = 5000;
let today = new Date().toDateString();
let todaysWord = "";

function getTodaysWord() {
    dateCheck = new Date().toDateString();
    const rando = Math.floor(Math.random() * (answers.length - 0) + 0)
    if(dateCheck !== today || todaysWord === "") {
        today = dateCheck;
        todaysWord = answers[rando];
    }
    return todaysWord;
}

app.get('/word', (req, res) => {
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.json({word: getTodaysWord()})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})