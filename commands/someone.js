module.exports = {
	name: 'someone',
	description: 'Selects someone randomly (from the users in that channel)',
	aliases: ['randomuser', 'randommember'],
	guildOnly: true,
	args: false,
	async execute(message, args) {
		if(message.member.hasPermission("MENTION_EVERYONE")){
			message.channel.send(message.channel.members.random(1).toString()+' was randomly chosen');
		}
		else{
			message.reply("you don't have permission to mention everyone")
		}
	},
};