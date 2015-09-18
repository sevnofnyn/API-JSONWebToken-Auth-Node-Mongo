var express = require('express');
var router = express.Router();
var user = require('../../models/user');

router.put('/', function(req, res, next) {
    console.log("gfjdkjdfd", req.user.id);
    user.findByIdAndUpdate(req.user.id, {$push: {"networkingEvents": req.body}},
        function(err, event){
            res.json(event);
        })
});


module.exports = router;