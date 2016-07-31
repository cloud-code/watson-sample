/**
 * A wrapper for Watson API to simplify its usage in StrongLoop applications
 * 
 * author: Serjik Dikaleh
 */
var watsonSdkWrapper = require('../../server/boot/watson-sdk-wrapper');

module.exports = function(Watsonapi) {
	Watsonapi.textToSpeach = function (req, res, cb) {
		var transcript = watsonSdkWrapper.watsonApi.textToSpeech.synthesize(req.query);
		// cb(null, transcript, 'application/octet-stream');
		cb(null, transcript);
	}

	Watsonapi.remoteMethod("textToSpeach", {
		isStatic: true,
		// http: {"path":"/custompath", "verb": "post" },
		http: {verb: "get" },
		accepts: [
			{arg: 'req', type: 'object', 'http': {source: 'req'}},
			{arg: 'res', type: 'object', 'http': {source: 'res'}}
     	],
		returns: {type: 'file', root: true}
	});
};
