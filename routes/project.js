var express = require('express');
var router = express.Router();
var github = require('octonode');
var {TOKEN} = require('../constants');
var client = github.client(TOKEN);

/* GET project listing. */
router.get('/', async function(req, res, next) {
    const repo = client.repo('Tradeshift/tradeshift-ui');
    const result = await repo.prsAsync({ per_page: 100 });
    console.log(result);
    res.send(result);
});

module.exports = router;
