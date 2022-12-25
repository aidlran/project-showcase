#!/usr/bin/env node

const VERBS = [
	'build',
	'init'
];

if (process.argv.length < 3) {
	console.log("No verb provided.");
	console.log("Possible verbs:", VERBS);
	process.exit(1);
}

switch (process.argv[2]) {
	case 'build':
	case 'init':
		import(`./${process.argv[2]}.mjs`);
		break;
	default:
		console.log(`Unrecognised verb: ${process.argv[2]}`);
		process.exit(1);
}
