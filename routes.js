var express = require('express'),
	router = express.Router();


router.get('/', function (req, res) {
	res.send("Default route");
});


router.get('/get/:myParam', function (req, res) {
	res.send("Custom route "+ req.params.myParam);
});

module.exports = router;