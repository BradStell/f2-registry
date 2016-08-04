const express = require('express');
const bodyParser = require('body-parser');
const f2AppTestHarnessController = require('./controllers/f2AppTestHarnessController');

let app = express();
let router = express.Router();
let port = process.env.PORT || 3344;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// comment
router.route('/f2AppTestHarness/:method')
    .get((req, res) => {
        f2AppTestHarnessController[req.params.method](req, res);
    });

app.use(router);

app.listen(port);
console.log(`Listening on port ${port}`);