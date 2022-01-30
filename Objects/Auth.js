// Returns link to authenticate WaldyBot on a new server.
function discordServerAuthenticate(client_id, username) {
    var address = 'https://discordapp.com/oauth2/authorize?&client_id=' + client_id + '&scope=bot&permissions=0';
    function addressObj() {
        return this[username] = address;
    }
    return addressObj();
}

// Objects
// Discord Token Object
var discordTokensObject = {
    DiscordToken: 'OTM3Mjc2NTEyNzcwNjA5MTkz.YfZYxg.v54AygfmVlVSHvDfjwm9bLU2z6c', // Your Auth Token (String) Goes HERE <------------
    DiscordTokenBeta: 'OTM3Mjc2NTEyNzcwNjA5MTkz.YfZYxg.v54AygfmVlVSHvDfjwm9bLU2z6c' // Your local/testing bot's auth (string) token goes HERE <------------ 
}
// WaldyBot User Objects
var waldyBot = {
  id: '884044657774960710',
  username: 'FamilyBot',
  discriminator: '5871'
}
var waldyBotBeta = {
  id: '937276512770609193',
  username: 'Family Beta',
  discriminator: '7163'
}
// Address Objects
var waldyBotAuthUrlString = discordServerAuthenticate(waldyBot.id, waldyBot.username); 
var waldyBotAuthUrlObj = {waldyBotAuthUrlString}

// Export Object
var exportobject = {
    discordTokensObject, 
    waldyBot, 
    waldyBotBeta, 
    waldyBotAuthUrlObj
}
module.exports = exportobject;
