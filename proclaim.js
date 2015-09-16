var whisper = function (message) {
	console.log('proclaiming: ' + message);
};

exports.softly = whisper;

exports.loudly = function (message) {
	console.log('PROCLAIMING: ' + message);
};


function logger(req, res, next) {
	console.log(req.method, req.url);
}

var routes = {
	GET : {
		'/test' : function() {
			res.end('Krishna Rajji, Talli');
		},
		'/user/:id' : function() {
			res.end('User Id '+id);
		}
	},
	DELETE : {
		'/user:id': function() {
			res.end('delete user '+ id);
		}

	}
}



var server = server.createServer(function(request, response) {
	console.log("running on 2100");
}).listen(2100);
