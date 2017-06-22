'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Daily 2Chainz";
var GET_FACT_MESSAGE = "";
var HELP_MESSAGE = "You can say tell me my daily two chains quote, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "I got a California king in my condo, got a mother fucking big screen by my front door",
		"They say I run the streets, I tell them no wonder, the cheapest thing I got on is my belt and it's four hundred",
		"Crib the same size as the walmart, yard so big I got a golf cart",
		"When I die, bury me beside the Cuban links",
		"Might use the legs for a necklace",
		"Oh, talking tequila for the pipe up, oh, I hope you got a clean vagina, yeah",
		"Used to treat my mattress like the a. t. m., bond number nine that's my favorite scent",
		"Can't forget the kush I'm talking o. g., rest in peace to pop he was an o. g.",
		"Today I'm in a Maybach, and that car came with some drapes",
		"Pretty girls like trap music, man I used to want a condo, started off in the basement, ended up on the top floor",
		"o. k., I've been the guy, look in the sky, rain hit my building, make my window cry",
		"I said take that shit off, bend over. Ten soldiers, we're the opposite of being sober",
		"Girls don't eat soda! Codene and cream soda, different weed odors, California, you can smell it in a coma!",
		"They say the world is finna end, so I made me a bucket list, all I wanna do is just fuck, so this my fucking list!",
		"My uncle on that gin, it's like genocide, we kept them pillows sex we can have a pillow fight",
		"Titty boy back, Louie bandana, tall ass nigga look like I play for Atlanta",
		"Blame it on fame, blame it on whatever you wanna blame, I'm smart and insane, imagine a genius that don't have a brain",
		"I'm fresher than detergent, I'm fresher than each person, I walk out and eat Church's, gig without rehearsing",
		"Used to drive a Porsche until I found out it was made by Volkswagen"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewTwoChainz');
    },
    'GetNewTwoChainz': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};