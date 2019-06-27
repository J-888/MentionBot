module.exports = {
	name: 'someonehere',
	description: 'Selects someone online randomly (from the users in that channel)',
	aliases: ['someoneonline', 'randomuseronline', 'randommemberonline', 'randomuserhere', 'randommemberhere'],
	guildOnly: true,
	args: false,
	async execute(message, args) {
		if(message.member.hasPermission("MENTION_EVERYONE")){
			message.channel.send(message.channel.members.filter(member => member.presence.status == 'online').random(1).toString());
		}
		else{
			message.reply("you don't have permission to mention everyone")
		}
	},
};