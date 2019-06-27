module.exports = {
	name: 'atat',
	description: '@@ a role',
	aliases: ['@@', 'noping', 'nomention'],
	guildOnly: true,
	args: true,
	usage: '[role]',
	async execute(message, args) {

		var roleStr = args.join(' ');
		role = message.guild.roles.find(val => val.id === roleStr || val.name === roleStr);
		
		if(role !== null)
			message.channel.send('<@&'+role.id+'>');
		else
			message.reply("invalid role");
	},
};