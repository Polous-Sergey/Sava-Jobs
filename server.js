// const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const passport = require('passport');
// const config = require('./config');

const TextNow = require('./text');

// janslederscoup@gmail.com:Guo3q6AN1i
// agojlipe@yahoo.com:dN9RT3L5sr


TextNow.login('janslederscoup@gmail.com', 'Guo3q6AN1i', function(success, token, username){
    if(success){
        TextNow.getInfoAboutUser(token, username, function(result){
            console.log(username, 'have', result.credits, 'credits!');
        });
        TextNow.getMessages(token, username, function(result){
            console.log(username + '\'s messages:\n');
            console.log(result.messages);
            console.log(result);
            result.messages.forEach(function(message){
                console.log('Message from +' + message.contact_value + ':\n' + message.message + '\n')
            });
        });
    } else {
        console.log('Invalid credentials!')
    }
});