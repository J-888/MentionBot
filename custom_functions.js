module.exports = (client) => {

	client.custom = { };

	/* LOAD COMMAND */

	client.custom.loadCommand = (commandName) => {
		try {
			//client.logger.log(`Loading Command: ${commandName}`);
			const props = require(`./commands/${commandName}`);
			/*if (props.init) {
				props.init(client);
			}*/
			client.commands.set(props.name, props);

			return false;
		} catch (e) {
			return `Unable to load command ${commandName}: ${e}`;
		}
	};

	/* UNLOAD COMMAND */

	client.custom.unloadCommand = async (commandName) => {
		let command;
		if (client.commands.has(commandName)) {
			command = client.commands.get(commandName);
		}
		else
			return `The command \`${commandName}\` doesn"t seem to exist, nor is it an alias. Try again!`;

		/*if (command.shutdown) {
			await command.shutdown(client);
		}*/

		const mod = require.cache[require.resolve(`./commands/${commandName}`)];
		delete require.cache[require.resolve(`./commands/${commandName}.js`)];
		for (let i = 0; i < mod.parent.children.length; i++) {
			if (mod.parent.children[i] === mod) {
				mod.parent.children.splice(i, 1);
				break;
			}
		}
		return false;
	};

};
