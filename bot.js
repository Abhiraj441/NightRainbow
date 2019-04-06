const Discord = require("discord.js") 
const settings = require("./your_settings.json")
const bot = new Discord.Client()
const talkedRecently = new Set();
bot.on('ready', async => {
console.log("Rainbow bot is ready!" + "\n" + bot.user.tag + "\n" + "Server Count: "  + bot.guilds.size + "\n" + "Cached users: " + bot.users.size + "\n" + "Enjoy!")
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rainbowcommand) {
        const delay = args.shift().toLowerCase();
        const members = bot.guild.members
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 4 minutes before using this command again. - " + msg.author);
        } else {
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
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(members);
        }, 240000);
    }
    
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rgbcommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
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
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.romaniancommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
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
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.germanycommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
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
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];    
    if(command === settings.prefix + settings.helpcommand) {
        let embed = new Discord.RichEmbed()  
        
.setAuthor(bot.user.tag)
.setColor("#DCA741")
.setDescription("Here you can see the commands for " + bot.user.username + "!")
.addField("^color time @rolename", "Classic Rainbow effect.", true)
.addField("^rgb time @rolename", "Awesome RGB effect.", true)
.addField("^roc time @rolename", "Awesome Romanian flag effect.", true)
.addField("^germ time @rolename", "Awesome Germany flag effect.", true)

message.channel.send(embed);
    }
});
bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.trollcommand) {
        const delay = args.shift().toLowerCase();
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
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
    if(command === settings.prefix + settings.rainbowstop) {
       if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
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

bot.login(settings.token).catch(err=> console.log("Incorrect Token was provided"))
