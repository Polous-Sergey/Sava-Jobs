const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

// const TextNow = require('./text');
//
// // janslederscoup@gmail.com:Guo3q6AN1i
// // agojlipe@yahoo.com:dN9RT3L5sr
//
//
// TextNow.login('janslederscoup@gmail.com', 'Guo3q6AN1i', function(success, token, username){
//     if(success){
//         TextNow.getInfoAboutUser(token, username, function(result){
//             console.log(username, 'have', result.credits, 'credits!');
//         });
//         TextNow.getMessages(token, username, function(result){
//             console.log(username + '\'s messages:\n');
//             console.log(result.messages);
//             console.log(result);
//             result.messages.forEach(function(message){
//                 console.log('Message from +' + message.contact_value + ':\n' + message.message + '\n')
//             });
//         });
//     } else {
//         console.log('Invalid credentials!')
//     }
// });

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

let questions = [
    {
        "qId": 123,
        "type": "text",
        "name": "test1",
        "title": "What do you want?1",
        "placeHolder": "money"
    },
    {
        "qId": 124,
        "type": "text",
        "name": "test2",
        "title": "What do you want?2",
        "placeHolder": "money"
    },
    {
        "qId": 125,
        "type": "text",
        "name": "test3",
        "title": "What do you want?3",
        "placeHolder": "money"
    }
];

let surveys = [
    {
        "qId": 123,
        "type": "text",
        "name": "test1",
        "title": "What do you want?1",
        "placeHolder": "money"
    }
];

router.get('/question', getQ);
router.post('/question', postQ);
router.put('/question/:id', putQ);
router.delete('/question/:id', deleteQ);

function getQ(req, res) {
    res.status(200);
    res.json({
        data: questions,
        success: true
    });
}

function postQ(req, res) {
    if (!req.body.question) return res.json({success: false});
    req.body.question.qId = Date.now();
    questions.push(req.body.question);
    res.status(200);
    res.json({
        data: req.body.question,
        type: 'create',
        success: true
    });
}

function putQ(req, res) {
    if (!req.body.question) return res.json({success: false});
    let questionIndex = questions.findIndex((item) => {
        return item.qId === req.params.id;
    });
    questions[questionIndex] = req.body.question;
    res.status(200);
    res.json({
        data: questions[questionIndex],
        type: 'update',
        success: true
    });
}

function deleteQ(req, res) {
    if (!req.params.id) return res.json({success: false});
    let questionIndex = questions.findIndex((item) => {
        return item.qId === +req.params.id
    });
    if(questionIndex === -1) return res.json({success: false, message: 'cant find'});
    questions.splice(questionIndex, 1);
    res.status(200);
    res.json({
        data: {qId: req.params.id},
        type: 'delete',
        success: true
    });
}

app.use('/api', router);

app.listen(2222, () => {
    console.log('API Started on port ' + 2222);
});


