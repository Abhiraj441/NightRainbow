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
    console.log('Resetting...')
    bot.destroy()
    .then(bot => {
    bot.login("NTY3NzU1MjI3ODgxNzk5Njkw.XLYJUg.Y7fXv20SZbWFrmLRRN6PsCbf2vY")(5000)
			   message.channel.send("Reloaded !")
        })
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
	  
if (message.content === '^restart') {
    if(!message.author.id === database.owner) return message.reply("You are not my owner !")
};
    
        if(command === settings.prefix + 'tempmute'){
let reason = args.slice(2).join(' ');
let time = args[1]
let member = message.mentions.members.first();
if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
var muterole = message.guild.roles.find(role => role.name === "muted")
if(!member) return message.reply("Please mention a member to mute!")
if(member === message.author) return message.channel.send("You can't mute yourself")
if(member === bot.user) return message.channel.send("I can't mute myself !")
if(!time) return message.channel.send("Please input a mute time !")
if(!reason) return message.channel.send("Please input a reason for this mute !")
if(isNaN(time)) {
  message.channel.send("Please input a valid mute time !")
}else{
if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I can't do that because i don't have 'manage roles' permission !")
if(!message.guild.member(message.author.id).hasPermission("MANAGE_ROLES")) return message.channel.send("To use that command you need to have 'manage roles' permission !")
 if(!muterole){
     muterole = message.guild.createRole({
       name: "muted",
       color: "#000000",
       permissions:[]
     })
      message.guild.channels.forEach.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ATTACH_FILES: false
      })
   }
  let mutee = new Discord.RichEmbed()

.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor("#3A41C6")
.setDescription("Mute Embed !")
.addField("User muted : ", member.tag)
.addField("Muted for : ", time)
.addField("Muted with reason: ", reason)
.addField("Muted by : ", message.author.tag)
.setFooter("Mute user " + bot.user.tag)
.setTimestamp();
message.channel.send(mutee);
  
member.addRole(muterole);
 setTimeout(() => {
   member.removeRole(muterole);
 }, time);
  message.channel.send(member + "unmuted succesfully !" )
}
}
    if(command === settings.prefix + 'kick'){
if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
const reason = args.slice(1).join(' '); // Reason of the ban 
const userole = message.guild.member(message.author.id).highestRole;
const user = message.mentions.users.first() || message.guild.members.find(r=> r.name === args [0])
const member = message.guild.member(user);
if(user === message.author) return message.channel.send("You can't kick yourself")
if(user === bot.user) return message.channel.send("I can't kick myself !")
if (!reason) return message.reply('You forgot to enter a reason for this ban!')
if(!message.guild.member(bot.user.id).hasPermission("KICK_MEMBERS")) return message.channel.send("I can't do that because i don't have 'kick members' permission !")
if(!message.guild.member(message.author.id).hasPermission("KICK_MEMBERS")) return message.channel.send("To use that command you need to have 'kick members' permission !")
if(!user) return message.channel.send("I can't find that user !")
member.kick({
      reason: reason,
})
let kickm = new Discord.RichEmbed()

.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor("#3A41C6")
.setDescription("Kick Embed !")
.addField("User kicked : ", user.tag)
.addField("Kicked with reason: ", reason)
.addField("Kicked by : ", message.author.tag)
.addField(message.author.username + "highest role is : ", userole)
.setFooter("Kick user " + bot.user.tag)
.setTimestamp();
message.channel.send(kickm);
}
    
    if(command === settings.prefix + 'ban'){
  if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
  const reason = args.slice(1).join(' '); // Reason of the ban 
  const userole = message.guild.member(message.author.id).highestRole;
  const user = message.mentions.users.first() || message.guild.members.find(r=> r.name === args [0])
  const member = message.guild.member(user);
  if(user === message.author) return message.channel.send("You can't ban yourself")
  if(user === bot.user) return message.channel.send("I can't ban myself !")
  if (!reason) return message.reply('You forgot to enter a reason for this ban!')
  if(!message.guild.member(bot.user.id).hasPermission("BAN_MEMBERS")) return message.channel.send("I can't do that because i don't have ban members permission !")
  if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send("To use that command you need to have 'ban members' permission !")
  if(!user) return message.channel.send("I can't find that user !")
  member.ban({
          reason: reason,
  })
  let banC = new Discord.RichEmbed()

.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor("#3A41C6")
.setDescription("Ban Embed !")
.addField("User banned : ", user.tag, true)
.addField("Banned with reason: ", reason, true)
.addField("Banned by : ", message.author.tag, true)
.addField(message.author.username + "highest role is : ", userole, true)
.setFooter("Ban user " + bot.user.tag)
.setTimestamp();
message.channel.send(banC);
}
    
if(command === settings.prefix + 'clear'){
  if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
  const amount = args[0]
  if(isNaN(amount)) {
    message.reply("Please input a valid number of messages to delete !")
  }else{
  if(!message.guild.member(bot.user.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send("I can't do that because i don't have manage messages permission !")
  if(!message.guild.member(message.author.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send("To use that command you need to have 'manage messages' permission !")
  if(amount < 0) return message.reply("Plea imput a number higher than _0_ ")
  if(amount > 100) return message.reply("Please input a number lower than _100")
  message.channel.bulkDelete(amount)
    let embed = new Discord.RichEmbed()  
        
.setAuthor("Discord Api")
.setColor("#3A41C6")
.setDescription("Message Deletion")
.addField("i have deleted :", amount + "messages", true)
.addField("In channel :", message.channel, true)
.addField("Command used by :", message.author.username, true)
.addField("This message will be deleted after 5 seconds !", "**  **", true)
.setFooter("Message delete " + bot.user.tag)
.setTimestamp()
const mess = message.channel.send(embed)
async function msg() {
  const msg = await mess();
  console.log('Message:', msg);
}
    mess
  .then(msg => {
    msg.delete(5000)
  })
  .catch();
}
}

         	if(command === settings.prefix + settings.helpcommand) {
	let embed = new Discord.RichEmbed()  
        
.setAuthor(message.author.tag)
.setColor("#DCA741")
.setDescription("Hellow , i am " + bot.user.username + " and this is my help page , you can see more commands using the commands: ")
.addField(" You can use ^owner to see the bot owner", "**  **", true)
.addField(" You can use ^supp to see the bot supporter", "**  **", true)
.addField("If you are a supporter , please use ^suppcommands", "**  **", true)
.addField(" You can use ^skip to see rainbow commands :wink:", "This command will show you the available rainbow commands !", true)
.addField(" You can use ^skip1 to see rainbow name commands :tools:", "This command will show you the available rainbow name commands !", true)
.addField("I was created on" + bot.user.createdAt + " by Cristi Petrut#6533 !", "With Love ", true)
.addField("Links", "Invite me [Here](https://discordapp.com/api/oauth2/authorize?client_id=567755227881799690&permissions=8&scope=bot)", true)
.setThumbnail("https://cdn.discordapp.com/attachments/563959615709118503/564383924600438785/giphy.gif")
.setFooter("nCover Mixed Help Menu")
.setTimestamp()
message.channel.send(embed);
    
	}
          	if(command === settings.prefix + settings.skipcommand) {
        let rembed = new Discord.RichEmbed()

.setAuthor(message.author.tag) 
.setColor("##00FFBF")
.setDescription("Here you can see my rainbow role commands !", true)
.addField("^rainbow time @rolename", "_Rainbow effect_", true)
.addField("^color time @rolename", "_Random Color effect_", true)
.addField("^rgb time @rolename", "_RGB effect_", true)
.addField("^romanian time @rolename", "_Romanian flag effect_", true)
.setImage("https://cdn.discordapp.com/attachments/563959615709118503/564383924600438788/giphy_1.gif")
.setFooter("Rainbow roles section")
.setTimestamp()
message.channel.bulkDelete(2).then(() => {
  message.channel.send(rembed)
});
    
	}  
    if(command === settings.prefix + settings.skip1command) {
		let cembed = new Discord.RichEmbed()

.setAuthor(message.author.tag) 
.setColor("##00FFBF")
.setDescription("Here you can see my Names changer commands !")
.addField("^channel time channelname1 channelname2 #channel", "**Channel name changer**", true)	
.addField("^server time servername1 servername2", "**Server name changer**", true)
.addField("^topic time topicname1 topicname2 #channel", "**Channel Topic changer**", true)	
.addField("^rolename time rolename1 rolename2 @rolename ", "**Role name changer**", true)	
.addField("^nick nick1 nick2 @user", "**Nickname Changer**", true)
.setImage("https://cdn.discordapp.com/attachments/567263109916524544/567615474171379712/names.gif")
.setFooter("Rainbow names section")
.setTimestamp()
message.channel.bulkDelete(2).then(() => {
  message.channel.send(cembed)
});
    
	}

if(message.content === '^suppcommands') {
  if(supporter.includes(message.author.id)) {
  let supporterc = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#bf00ff")
.setDescription("**Here are listed the supporter commands !**")
.addField("^adminlog", "With this command you can see the bot updates !", true)
.setFooter(bot.user.tag)
.setTimestamp();
  message.author.send(supporterc)
  }else{
    message.reply("You can't use that command because you are not a supporter !")
  }
}
    if(message.content === '^adminlog') {
      if(supporter.includes(message.author.id)) {
        let updatelog = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#bf00ff")
.setDescription("There has been made some changes so here is the **update log**")
.addField("Germany command has been removed because ", "I got mad on someone what gives me the germany command suggestion",)
.addField("Succes command used update", "The message is with embed now !",)
.addField("Added ^suppcommands !", "**  **",)
.addField("Moderation commands added : ", "| ^kick @user reason" +"\n" + "| ^ban @user reason" +"\n" + "| ^tempmute @user time reason")
.setFooter("We hope you like me and my owner (Cristi Petrut) ! ")
.setTimestamp();
message.author.send(updatelog);
      }else{
        message.channel.send("You can't view this because you are not a official bot supporter !")
      }
  
    }
if(command === settings.prefix + settings.supportercommand) {
    let embz = new Discord.RichEmbed()
    
.setAuthor(message.author.username)
.setColor("#A9F36A")
.addField("__The bot supporter and owner friend is :__" , "**₳ɄⱤɆⱠł₳₦ (#7439)**", true)
.setFooter(bot.user.tag)
message.author.send(embz);
  }
if(command === settings.prefix + settings.ownercommand) {
    let embez = new Discord.RichEmbed()
    
.setAuthor(message.author.username)
.setColor("#4a21fd")
.addField("**The bot owner is**:", "_Cristi Petrut (#6533)_", true)
.setFooter(bot.user.tag)
message.author.send(embez);
    }	
    if(command === settings.prefix + settings.channelcommand) {
    	const delay = args [0]
	    const name1 = args [1]
	    const name2 = args [2] 
	    const names = name1 + " " + name2
        var items = Array(name1,name2);
	    const channel = message.mentions.channels.first() || message.guild.channels.find(channel => channel.name === args [3])
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	      if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minutes before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        if(!name1) return message.channel.send("Please input a first name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	      if(!name2) return message.channel.send("Please input a second name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	      if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!channel) return message.channel.send("I haven't found the mentioned channel").catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I need permission 'manage_channels' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var channelstart = setInterval(function() {
            var channelz = items[Math.floor(Math.random() * items.length)];
            channel.setName(channelz)
        }, delay); 
        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#f4a341")
        .addField("Command name : ", "Channel", true)
        .addField("Channel activated by : ", message.author.username, true)
        .addField("Channel activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On Channel : ", channel, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/563959615709118503/564809023640174592/giphy_2.gif")
        .setFooter("Channel command ... " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
        }
      if(command === settings.prefix + settings.nick) {
    const nick1 = args [0]
    const nick2 = args[1]
    var nicks = Array(nick1,nick2);
    const user = message.mentions.users.first() || message.guild.members.find(r=> r.name === args [3])
    if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	  if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minutes before using this commmand again. - " + message.author);
        }else{
        if(!nick1) return message.channel.send("Please input a first name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	      if(!nick2) return message.channel.send("Please input a second name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
        if(!user) return message.channel.send("I haven't found the mentioned user").catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_NICKNAMES")) return message.channel.send("I need permission 'manage_nicknames' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        var nickstart = setInterval(function() {
            var nicker = nicks[Math.floor(Math.random() * nicks.length)];
            message.guild.members.get(user.id).setNickname(nicker);
        }, 2000); 

        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#f4a341")
        .addField("Command name : ", "Nick", true)
        .addField("Nickname activated by : ", message.author.username, true)
        .addField("Nickname activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", "2000", true)
        .addField("On Member : ", user, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/567263109916524544/567610864295870475/nick.gif")
        .setFooter("Nickname command ... " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        }
  }
      if(command === settings.prefix + settings.servercommand) {
    	const delay = args [0]
	      const serv1 = args [1]
	      const serv2 = args [2] 
	      const names = serv1 + " " + serv2
        var serversx = Array(serv1,serv2);
	      const guild = message.guild
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	      if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minutes before using this commmand again. - " + message.author);
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
            let enable = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Command used succesfully ! ")
            .setColor("#268eef")
            .addField("Command name : ", "Server", true)
            .addField("Server activated by : ", message.author.username, true)
            .addField("On Server : ", message.guild.name, true)
            .addField("With randomize delay : ", delay, true)
            .setThumbnail("https://cdn.discordapp.com/attachments/567263109916524544/567613256013971461/Guild.gif")
            .setFooter("Server command ... " + bot.user.tag)
            .setTimestamp();
                message.channel.send(enable)
                
        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
    	}
    if(command === settings.prefix + settings.topiccommand) {
    	const delay = args [0]
	const topic1 = args [1]
	const topic2 = args [2] 
	const names = topic1 + " " + topic2
        var itemz = Array(topic1,topic2);
	const channel = message.mentions.channels.first() || message.guild.channels.find(channel => channel.name === args [3])
        if(!members.includes(message.author.id)) return message.reply("You are not in my database ! ")
	if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before using this commmand again. - " + message.author);
        }else{
        if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        if(!topic1) return message.channel.send("Please input a first name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!topic2) return message.channel.send("Please input a second name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!channel) return message.channel.send("I haven't found the mentioned channel").catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I need permission 'manage_channels' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1400) return message.reply('Please input a number higher than 1400.')
        var channelstart = setInterval(function() {
            var channelx = itemz[Math.floor(Math.random() * itemz.length)];
            channel.setTopic(channelx)
        }, delay); 

        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#4245f4")
        .addField("Command name : ", "Topic ", true)
        .addField("Topic activated by : ", message.author.username, true)
        .addField("Topic activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On Channel : ", channel, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/567263109916524544/567605923049242634/topic.gif")
        .setFooter("Topic command ... " + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
    	}

      	if(command === settings.prefix + settings.gamecommand) {
        if(!owner.includes(message.author.id)) return message.reply("You are not my owner!")
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
bot.on('ready', async => {
              bot.user.setActivity("My Owner And My Owner Friend Aurelian ✅", {
  type: "STREAMING",
  url: "https://www.twitch.tv/cristipetrut"
		      })
console.log("Connected to Discord Api !" + "\n" + bot.user.tag + "\n" + "Currently in (servers): "  + bot.guilds.size + "\n" + "Users who have me: " + bot.users.size + "\n" + "Just enjoy me !")
});
bot.login("NTY3NzU1MjI3ODgxNzk5Njkw.XLYJUg.Y7fXv20SZbWFrmLRRN6PsCbf2vY")
