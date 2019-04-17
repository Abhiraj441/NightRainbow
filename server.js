const Discord = require("discord.js") 
const bot = new Discord.Client()
const settings = require("./your_settings.json")
const database = require("./Database.json")
const talkedRecently = new Set();
var supporter = database.supporter;
const owner = database.owner;
const members = database.members;

  bot.on('message', message => {
	let messageArray = message.content.split(" ");
  let command = messageArray[0];
	let args = messageArray.slice(1);
           if(command === `^reload`) {
		   if(!owner.includes(message.author.id)) return message.reply("You are not my owner !")
		   process.exit()
               bot.destroy()
               bot.login(settings.token);
             message.channel.send("Reloaded");
         return;
        }
        if(command === settings.prefix + settings.rainbowcommand) {      
	      const delay = args [0]
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [1])
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before using a command again. - " + message.author);
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
        }

        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#c7f441")
        .addField("Command name : ", "Rainbow ", true)
        .addField("Rainbow activated by : ", message.author.username, true)
        .addField("Rainbow activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On role : ", rolez, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/567263109916524544/567599869791961088/rainbow.gif")
        .setFooter("Rainbow command ... " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
        }
    if(command === settings.prefix + settings.randomcommand) {
	const delay = args [0]
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [1])
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	      if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minutes before using a commmand again. - " + message.author);
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
          
        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used with succes ! ")
        .setColor("#6242f4")
        .addField("Command name : ", "Color ", true)
        .addField("Color activated by : ", message.author.username, true)
        .addField("Color activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On role : ", rolez, true)
        .setThumbnail("https://media.discordapp.net/attachments/567263109916524544/567598467824746497/1015533ec56d0241810429280d868daf.gif")
        .setFooter("Color command ! " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
        }
         	if(command === settings.prefix + settings.rgbcommand) {
        const delay = args [0]
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [1])
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	      if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before using a command again. - " + message.author);
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

        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#41f4b5")
        .addField("Command name : ", "RGB ", true)
        .addField("RGB activated by : ", message.author.username, true)
        .addField("RGB activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On role : ", rolez, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/567263109916524544/567601032583184384/Rgb.gif")
        .setFooter("RGB command ... " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
        }
    if(command === settings.prefix + settings.romaniancommand) {
        const delay = args [0]
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [1])
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	      if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before using this command again. - " + message.author);
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

        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#41e2f4")
        .addField("Command name : ", "Romanian ", true)
        .addField("Romanian activated by : ", message.author.username, true)
        .addField("Romanian activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On role : ", rolez, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/567263109916524544/567601988448157696/Ro.gif")
        .setFooter("Romanian command ... " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        } 
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
        }
          	if(command === settings.prefix + settings.rolenamecommand) {
    	const delay = args [0]
	const name1 = args [1]
	const name2 = args [2] 
	const namez = name1 + " " + name2
        var itemx = Array(name1,name2);
	const rolex = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [3])
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	      if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        if(!name1) return message.channel.send("Please input a first name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
    	if(!name2) return message.channel.send("Please input a second name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
		let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolex.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
		if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolex) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I need permission 'manage_roles' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var namesstart = setInterval(function() {
            var rolx = itemx[Math.floor(Math.random() * itemx.length)];
            rolex.setName(rolx)
        }, delay); 

        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#4af441")
        .addField("Command name : ", "Rolename", true)
        .addField("Rolename activated by : ", message.author.username, true)
        .addField("Rolename activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On role : ", rolex, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/567263109916524544/567607939934846976/Change.gif")
        .setFooter("Rolename command ... " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
  });
bot.on('ready', async => {
console.log("Connected to Discord Api !" + "\n" + bot.user.tag + "\n" + "Currently in (servers): "  + bot.guilds.size + "\n" + "Users who have me: " + bot.users.size + "\n" + "Just enjoy me !")
});
bot.login("NTY3NzU1MjI3ODgxNzk5Njkw.XLYJUg.Y7fXv20SZbWFrmLRRN6PsCbf2vY")
