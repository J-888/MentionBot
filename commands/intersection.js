module.exports = {
	name: 'intersection',
	description: '',
	aliases: ['subrole', 'roleintersection'],
	guildOnly: true,
	args: false,
	async execute(message, args) {
		if(message.member.hasPermission("MENTION_EVERYONE")){

			var roles = args.map(function(arg) {
				var res = message.guild.roles.find("id", arg);
				return res !== null ? res : message.guild.roles.find("name", arg);
			});

			if(roles.every(role => role !== null)) {
				message.reply("valid roles");
				var users = roles[0].members.map(function(member) {
					var currentID= member.id;
					if(roles.every(role => role.members.exists("id", currentID)))
						return member.toString();
				});

				var usersStr = "";
				users.forEach(function(user) {
					if(user !== undefined)
						usersStr += user + ' ';
				});

				message.channel.send(usersStr);

			}
			else {
				message.reply("invalid roles");
			}
		}
		else{
			message.reply("you don't have permission to mention everyone")
		}
	},
};