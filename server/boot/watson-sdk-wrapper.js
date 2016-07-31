/**
 * A wrapper for Watson API to simplify its usage in StrongLoop applications
 * 
 * author: Serjik Dikaleh
 */
var watson = require('watson-developer-cloud');
var textToSpeech = watson.text_to_speech({
	version: 'v1',
	username: '<your-watson-user-id>',
	password: '<your-watson-password>'
});
module.exports = {
	watsonApi: {
		textToSpeech: textToSpeech
	}
};