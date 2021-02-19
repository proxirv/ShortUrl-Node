const express = require('express');
const router = express.Router();
const RouterUrl = require('./url/url.js');
const UrlInstance = new RouterUrl();

router.route('/test')
    .post(
        function(req,res){
            UrlInstance.postTest(req,res);
        }
);

router.route('/generateurl')
    .post(
        function(req,res){
            UrlInstance.postCreateUrl(req,res);
        }
);

// Export API routes
module.exports = router;