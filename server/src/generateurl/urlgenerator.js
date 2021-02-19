const shortid = require('shortid');
const validUrl = require('valid-url');

var createurl = function(){

    this.validate =function (text,cb) {
        if (validUrl.isUri(text)){
            console.log('Looks like an URI');
            return cb(null);
        } 
        else {
            console.log('Not a URI');
            return cb(true);
        }
    };

	this.generateShortUrl = function(text,cb){
		try {
            const result = shortid.generate(text);
            return cb(null,result);
        } catch (err) {
            return cb(true,console.error(err));
        };
	};
    
};

module.exports = function(){
    var instancia = new createurl();
    return instancia;
};