const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/review', (req, res) => {
    const feedbackRating = req.body;
    console.log('Hello');
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        feedbackRating.feelingRating, 
        feedbackRating.understandingRating,
        feedbackRating.supportRating,
        feedbackRating.commentsRating,
    ];
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
        console.log('Error completing SELECT post feedback query', error);
        res.sendStatus(500);
    });
});


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});