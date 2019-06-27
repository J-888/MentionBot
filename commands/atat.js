module.exports = {
	name: 'atat',
	description: '@@ a role',
	aliases: ['@@'],
	guildOnly: true,
	args: true,
	usage: '[role]',
	async execute(message, args) {
		if(message.member.hasPermission("MENTION_EVERYONE")){

			var roleStr = args.join(' ');

			role = message.guild.roles.find(val => val.id === roleStr || val.name === roleStr);
			
			if(role !== null)
				message.channel.send('<@&'+role.id+'>');
			else
				message.reply("invalid role");
		}
		else{
			message.reply("you don't have permission to mention everyone")
		}
	},
};