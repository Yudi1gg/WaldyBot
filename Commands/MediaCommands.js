const mediaObjects = require('../Objects/MediaObjects.js');
const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');


var waldyBot = globalVarsObjs.globalVarObject.waldyBot;
var waldyBotBeta = globalVarsObjs.globalVarObject.waldyBotBeta;

// On Join (Discord Server) ## Under Construction ##
var onJoin = function(client) {
    // On WaldyBot Join
    client.on('message', message => {
        if(message.content.toLowerCase() === 'kys') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.appear
            });
        }
    });
    // On New User Join
    client.on('message', message => {
        if(message.content.toLowerCase() === 'kys') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.yournotallowedtoleave
            });
        }
    });    
}

// General Media Responses
var mediaResponses = function(client) {
    client.on('message', message => {
        if(message.content.toLowerCase() === 'kys') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kms') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'suicide') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kill myself') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kill me') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kill you') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'suicided') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'ded') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'dead') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'de\'d') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'dead\'d') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'deaded') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'ded\'ed') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kill yourself') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'die') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kill') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === ':skull:') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === ':skull_crossbones:') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'high ground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'highground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'high_ground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'high' + 'ground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'star wars') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'prequel memes') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'dank wars') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'star memes') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'weeb') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'weebs') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'weed') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'dank weed') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'cush') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'snoop') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'snoop dog') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === '420') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'blaze it') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'blaze') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'itblaze') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'music') {
            var randomNum = mediaObjects.mediaObject.music.method();
            message.channel.send(mediaObjects.mediaObject.music[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'tunes') {
            var randomNum = mediaObjects.mediaObject.music.method();
            message.channel.send(mediaObjects.mediaObject.music[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'skeleton') {
            var randomNum = mediaObjects.mediaObject.skeleton.method();
            message.channel.send(mediaObjects.mediaObject.skeleton[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'spooky skeleton') {
            var randomNum = mediaObjects.mediaObject.skeleton.method();
            message.channel.send(mediaObjects.mediaObject.skeleton[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'spooky scary skeleton') {
            var randomNum = mediaObjects.mediaObject.skeleton.method();
            message.channel.send(mediaObjects.mediaObject.skeleton[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'spooky') {
            var randomNum = mediaObjects.mediaObject.skeleton.method();
            message.channel.send(mediaObjects.mediaObject.skeleton[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'overwatch') {
            var randomNum = mediaObjects.mediaObject.overwatch.method();
            message.channel.send(mediaObjects.mediaObject.overwatch[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'overmeme') {
            var randomNum = mediaObjects.mediaObject.overwatch.method();
            message.channel.send(mediaObjects.mediaObject.overwatch[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'over watch') {
            var randomNum = mediaObjects.mediaObject.overwatch.method();
            message.channel.send(mediaObjects.mediaObject.overwatch[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'dark souls') {
            var randomNum = mediaObjects.mediaObject.darksouls.method();
            message.channel.send(mediaObjects.mediaObject.darksouls[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'dank souls') {
            var randomNum = mediaObjects.mediaObject.darksouls.method();
            message.channel.send(mediaObjects.mediaObject.darksouls[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'fashion souls') {
            var randomNum = mediaObjects.mediaObject.darksouls.method();
            message.channel.send(mediaObjects.mediaObject.darksouls[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'souls borne') {
            var randomNum = mediaObjects.mediaObject.darksouls.method();
            message.channel.send(mediaObjects.mediaObject.darksouls[randomNum]
            );
        }
    });    
}

// WaldyBot @mentions Responses # Under Construction #
var waldyBotMentionsResponses = function(client) {
    client.on('message', message => {
        if ((message.isMemberMentioned(waldyBot) === true) || (message.content.toLowerCase().split(' ') === 'hi')) { 
            message.author.createDM(message.author.send('this is a TEST'));
        };
        if (message.content.toLowerCase().split(' ').forEach(string => {
                let x = 0;
                if (string === 'hi') {
                    return x++;
                }
                console.log(string);
                console.log(x);
                return x;
        }) > 0) { 
            message.author.createDM(message.author.send('this is a TEST'));
        };
    });
}

// Objects
var mediaResponsesObject = {
    mediaResponses: mediaResponses,
    onJoin: onJoin,
    waldyBotMentionsResponses: waldyBotMentionsResponses 
}

var exportobject = {
    mediaResponsesObject: mediaResponsesObject
}

module.exports = exportobject;