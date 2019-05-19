const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', () => {
	if (message.author.bot === true) return;
	if (message.content === ":verify") {
		message.delete()
		if (!message.channel.name === "потверждение") return;
		message.channel.send('Потверждаю...').then(msg => {
			msg.delete(1000)
		})
		let sor = message.guild.roles.find('name','непотвержден')
		let ser = message.guild.roles.find('name','Игрок')
		message.guild.member(message.author).removeRole(sor)
		message.guild.member(message.author).addRole(ser).then(() => {
			message.channel.send('Потверждены!').then(msg => {
				msg.delete(1000)
			})
		} ).catch(err => {
			message.channel.send('Че-то пошло не так').then(msg => {
				msg.delete(2000)
			})
		})
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
