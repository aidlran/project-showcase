#!/usr/bin/env node

import { readFile } from 'fs/promises';

// Read config file
let config = await readFile('project-explorer-config.json', 'utf8')
	.catch(error => {
		console.error(`Couldn't read config file. (Reason: ${error.message})`);
		console.error("Did you run 'npm exec web-project-explorer init' yet?");
		process.exit(1);
	})
	.then(JSON.parse)
	.catch(error => {
		console.error(`Couldn't parse config file. (Reason: ${error.message})`);
		process.exit(1);
	});

if (typeof config.projects === 'object') {
	// TODO: parse projects
}
