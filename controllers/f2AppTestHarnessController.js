const path = require('path');

exports.SnP = function(req, res) {
    res.sendFile(path.join(__dirname, '../views/f2AppTestHarness', 'SnP.html'));
};