const express = require('express');
const router = express.Router();
const RouterUrl = require('./generateurl/url.js');
const UrlInstance = new RouterUrl();

router.route('/test')

router.route('/generateurl')
    .post(
        function(req,res){
            UrlInstance.postCreateUrl(req,res);
        }
);

// Export API routes
module.exports = router;