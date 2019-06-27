module.exports = {
	name: 'about',
	description: 'Info about this bot',
	guildOnly: true,
	async execute(message, args) {
		const string1 = `${message.client.user} is a productivity bot developed by`;
		const string2 = ` for the Discord Hack Week 2019 that extends the Discord default mention funcionality.\nMake sure to submit to him any feedback (suggestions, issues, bugs, etc.).\n\nMore info at https://github.com/J-888/MentionBot.`;
		
		const msg = await message.channel.send(string1 + 'J-888' + string2);
		msg.edit(string1 + `<@217735332236492800>` + string2);
	},
};