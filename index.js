const restify = require('restify');
const builder = require('botbuilder');

var server = restify.createServer();
var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();

server.listen(process.env.port || process.env.PORT || 3798, function () {

    console.log('%s listening to %s', server.name, server.url);

});

var connector = new builder.ChatConnector({

    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD

});

var bot = new builder.UniversalBot(connector);

server.post('/api/messages', connector.listen());

var count = 0;
// var interval = setInterval(() => {


//     var date = new Date();
//     var hour = date.getHours();
//     var minutes = date.getMinutes();

//     if (hour == 19 && minutes == 47) {

//         var customMessage = new builder.Message(session)
//     .text("Hello!")
//     .textFormat("plain")
//     .textLocale("en-us");
//     bot.send(customMessage);


//     }

// }, 55000);


bot.dialog('/', function (session) {

    
    if (session.message.text == 'Good Night Team' && count < 4) {

        count++;
        console.log(count);

    }

    if (count == 3) {
        session.send('Good Night Team');
    }

});