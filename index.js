const discord = require('discord.js')
const client = new discord.Client()
const { prefix,token } = require('./config.json')
const fs = require('fs')

client.commands = new discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.user.setActivity('!help', { type: 'LISTENING' })
	console.log('Doge is Online!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	switch(command) {

	case 'ping' , 'test': 
	    client.commands.get('ping').execute(message,args)
	    break;
	case 'help':
	    client.commands.get('help').execute(message,args)
	    break;
	case 'kick': client.commands.get('kick')
	    client.commands.get('kick').execute(message,args)
	    break;
	case 'ban':
	    client.commands.get('ban').execute(message,args)
	    break;
	case 'grrole' , 'grantrole':
		client.commands.get('grrole').execute(message, args)
		break;

}
});

client.login(token)

