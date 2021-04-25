const fs = require('fs');
const events = require('./events.json').sampleEvents.filter((event) => event.group !== 'Common');

try {
	fs.mkdirSync(`events`);
} catch (e) {
}

const grouped = {};
for (const event of events) {
	const template = JSON.parse(event.template);
	if (!(event.group in grouped)) {
		grouped[event.group] = [];
	}
	grouped[event.group].push(event);
	try {
		fs.mkdirSync(`events/${event.group.toLowerCase()}`);
	} catch (e) {
	}
	fs.writeFileSync(
		`events/${event.group.toLowerCase()}/${event.id}.json`,
		JSON.stringify(template, null, 2),
		'utf8'
	);
}

const indexFile = `module.exports = {${events.map((event) => `
	${JSON.stringify(event.id)}: require("events/${event.group.toLowerCase()}/${event.id}.json")`)}
};`;
fs.writeFileSync(`index.js`, indexFile, 'utf8');

let readmeFile = fs.readFileSync('README.md', 'utf8').split('<!-- Note for editors: everything below this comment is auto-generated. -->')[0];
readmeFile += `<!-- Note for editors: everything below this comment is auto-generated. -->
${Object.entries(grouped).map(([group, events]) =>
	`\n### ${group}\n\n${events.map((event) =>
		`* [${event.name.replace(/^AWS /, '').replace(/^Amazon /, '')} - \`${event.id}\`](events/${event.group.toLowerCase()}/${event.id}.json)`
	).sort().join('\n')}`
).join('\n')}\n`;
fs.writeFileSync(`README.md`, readmeFile, 'utf8');
