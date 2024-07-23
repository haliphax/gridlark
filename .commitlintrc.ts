export default {
	extends: ["gitmoji"],
	parserPreset: "./.commitlintparser.mjs",
	rules: {
		"type-empty": [0, "always"],
	},
};
