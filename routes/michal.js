var express = require('express');
var router = express.Router();

router.get('/hello/:name', (req, res)=>{
    res.json({params: req.params, query: req.query});
    res.send('witaj Michal!')
});

module.exports = router;