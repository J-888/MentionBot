module.exports = {
	name: 'mentiononce',
	description: 'Makes a role @able, mentions it, and makes it not @able once again',
	aliases: ['pingonce', 'forcemention', 'forceping', 'fmention', 'fping'],
	guildOnly: true,
	args: true,
	usage: '<role>',
	async execute(message, args) {
		if(message.member.hasPermission("MENTION_EVERYONE")){

			var roleStr = args.join(' ');
			var role = message.guild.roles.find(val => val.id === roleStr || val.name === roleStr);

			if(role !== null) {
			  role.setMentionable(true, 'mention once (temp enable)')
			  .then(updated1 => message.channel.send(updated1.toString())
			      .then(role.setMentionable(false, 'mention once (temp disable)'))
			      .catch(console.error))
			  .catch(console.error);
			}
			else {
			 message.reply("invalid role");
			}
		}
		else{
			message.reply("you don't have permission to mention everyone")
		}
	},
};