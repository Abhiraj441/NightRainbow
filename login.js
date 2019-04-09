const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
	const email = args.shift().toLowerCase();
	const password = args [0]
	const emails = database.emails;
	const passwords = database.passwords;
	if(!emails.includes(email)) return message.channel.send("Email is wrong ! Please try again")
	if(!passwords.includes(password)) return message.channel.send("Password is wrong ! Please try again")
    }
    
});
