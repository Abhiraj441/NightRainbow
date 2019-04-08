const Discord = require("discord.js") 
const settings = require("./your_settings.json")
const bot = new Discord.Client()
const talkedRecently = new Set();
require('events').EventEmitter.defaultMaxListeners = 90;
bot.on('ready', async => {
console.log("Rainbow bot is ready!" + "\n" + bot.user.tag + "\n" + "Server Count: "  + bot.guilds.size + "\n" + "Cached users: " + bot.users.size + "\n" + "Enjoy!")
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.randomcommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minutes before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolez.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
        if(delay === rolez) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var colors = settings.randomrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, delay); 
            message.channel.send(settings.messageresponse.random).catch(err=> message.channel.send("No response"))
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
    
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rgbcommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minute before using this command again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolez.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
        if(delay === rolez) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var colors = settings.rgbrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, delay); 
            message.channel.send(settings.messageresponse.rgbstart).catch(err=> message.channel.send("No response"))
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.romaniancommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minute before using this command again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolez.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
        if(delay === rolez) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 900) return message.reply('Please input a number higher than 900.')
        var colors = settings.romrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, delay); 
            message.channel.send(settings.messageresponse.flagstart).catch(err=> message.channel.send("No response"))     
        } 
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.germanycommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minute before using this command again. - " + message.author);
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolez.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
        if(delay === rolez) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 900) return message.reply('Please input a number higher than 900.')
        var colors = settings.germrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, delay); 
            message.channel.send(settings.messageresponse.flagstart).catch(err=> message.channel.send("No response"))
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];    
    if(command === settings.prefix + settings.helpcommand) {
        let embed = new Discord.RichEmbed()  
        
.setAuthor(bot.user.tag)
.setColor("#DCA741")
.setDescription("Hellow , i am" + bot.user.username + "and this is my help page , you can see more commands by reacting !")
.addField("I was created on" + bot.user.createdAt + "by" + bot.owner, "With Love :Heart:", true
.setThumbnail("https://cdn.discordapp.com/attachments/563959615709118503/564383924600438785/giphy.gif")
.setFooter(bot.user.tag)
.setTimestamp(),
message.channel.send(embed))
        
	    let rembed = new Discord.RichEmbed()

.setAuthor(bot.user.tag) 
.setColor("##00FFBF")
.setDescription("Here you can see my rainbow role commands !"
.addField("^rainbow time @rolename", "Classic Rainbow effect.", true)
.addField("^color time @rolename", "Random Color effect.", true)
.addField("^rgb time @rolename", "Awesome RGB effect.", true)
.addField("^roc time @rolename", "Awesome Romanian flag effect.", true)
.addField("^germ time @rolename", "Awesome Germany flag effect.", true)
.setImage("https://cdn.discordapp.com/attachments/563959615709118503/564383924600438788/giphy_1.gif")
.setFooter("Rainbow roles section")
.setTimestamp())
	
		let cembed = new Discord.RichEmbed()

.setAuthor(bot.user.tag) 
.setColor("##00FFBF")
.setDescription("Here you can see my channel rainbow commands !"
.addField("^channel time channelname1 channelname2 #channel", "Awesome Channel Name rainbow effect.", true)	
.addField("^server time servername1 servername2", "Awesome Server rainbow effect.", true)
.addField("^topic time topicname1 topicname2 #channel", "Awesome Channel Topic rainbow effect.", true)	
.setImage("https://cdn.discordapp.com/attachments/563959615709118503/564809023640174592/giphy_2.gif")
.setFooter("Channel rainbow section")
.setTimestamp())
		
message.react(':arrow_forward:').then(() => message.react(':track_next:'));

const filter = (reaction, user) => {
    return [':arrow_forward:', ':track_next:'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 8, time: 300000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === ':arrow_forward:') {
            message.edit(rembed);
			message.react(':arrow_backward:');
        }
        if (reaction.emoji.name === ':track_next:') {
            message.edit(cembed);
			message.react(':track_previous:');
	}
	if (reaction.emoji.name === ':arrow_backward:') {
            message.edit(rembed);
	}
	if (reaction.emoji.name === ':track_previous:') {
            message.edit(embed);
		
    }
	
    })
	
    }
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.trollcommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minute before using this command again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolez.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
        if(delay === rolez) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 100) return message.reply('Please input a number higher than 100.(Because that is a troll command')
        var colors = settings.troll
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, delay); 
            message.channel.send(settings.messageresponse.trollstart).catch(err=> message.channel.send("No response"))
            
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
        
    }
    if(command === settings.prefix + settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
                       }
});
bot.on('message', message => { 
    let messageArray = message.content.split(" "); 
    let command = messageArray[0]; 
    let args = messageArray.slice(1); 
    if(command === settings.prefix + settings.statuscommand) {
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        const stde = settings.statusdelay
        var status = settings.statusrainbow
        var statusstart = setInterval(function() { 
            var statusz = status[Math.floor(Math.random() * status.length)]; 
            bot.user.setStatus(statusz) 
        }, stde); 
            message.channel.send("Status rainbow has started !").catch(err=> message.channel.send("No response"))
        }
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rainbowcommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minutes before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolez.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
        if(delay === rolez) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, delay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
    
});
bot.on('message', message => { 
    let messageArray = message.content.split(" "); 
    let command = messageArray[0]; 
    let args = messageArray.slice(1); 
    if(command === settings.prefix + settings.gamecommand) {
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        var game = settings.gamerainbow
        var gamestart = setInterval(function() { 
            var gamez = game[Math.floor(Math.random() * game.length)]; 
            bot.user.setActivity(gamez, {
  type: "STREAMING",
  url: "https://www.twitch.tv/cristipetrut"
});
        }, 1400); 
            message.channel.send("Game rainbow has started !").catch(err=> message.channel.send("No response"))
        }
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.channelcommand) {
        const delay = args.shift().toLowerCase();
	const name1 = args [0]
	const name2 = args [1] 
	const names = name1 + " " + name2
        var items = Array(name1,name2);
	const channel = message.mentions.channels.first() || message.guild.channels.find(channel => channel.name === args [2])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minutes before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        if(!name1) return message.channel.send("Please input a first name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!name2) return message.channel.send("Please input a second name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!channel) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I need permission 'manage_channels' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var channelstart = setInterval(function() {
            var channelz = items[Math.floor(Math.random() * items.length)];
            channel.setName(channelz)
        }, delay); 
            message.channel.send("Channel rainbow has started !").catch(err=> message.channel.send("No response"))
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
    
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.servercommand) {
        const delay = args.shift().toLowerCase();
	const serv1 = args [0]
	const serv2 = args [1] 
	const names = serv1 + " " + serv2
        var serversx = Array(serv1,serv2);
	const guild = message.guild
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minutes before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        if(!serv1) return message.channel.send("Please input a first name to rainbow the server").catch(err=> message.channel.send("No response"))
	if(!serv2) return message.channel.send("Please input a second name to rainbow the server").catch(err=> message.channel.send("No response"))
	if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_GUILD")) return message.channel.send("I need permission 'manage_server' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var serverstart = setInterval(function() {
            var serverz = serversx[Math.floor(Math.random() * serversx.length)];
            guild.setName(serverz)
        }, delay); 
            message.channel.send("Server rainbow has started !").catch(err=> message.channel.send("No response"))
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
    
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.topiccommand) {
        const delay = args.shift().toLowerCase();
	const topic1 = args [0]
	const topic2 = args [1] 
	const names = topic1 + " " + topic2
        var itemz = Array(topic1,topic2);
	const channel = message.mentions.channels.first() || message.guild.channels.find(channel => channel.name === args [2])
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 minutes before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        if(!topic1) return message.channel.send("Please input a first name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!topic2) return message.channel.send("Please input a second name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!channel) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I need permission 'manage_channels' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var channelstart = setInterval(function() {
            var channelx = itemz[Math.floor(Math.random() * itemz.length)];
            channel.setTopic(channelx)
        }, delay); 
            message.channel.send("Channel Topic rainbow has started !").catch(err=> message.channel.send("No response"))
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
    }
    
});
bot.login(settings.token).catch(err=> console.log("Incorrect Token was provided"))
