const shortid = require('shortid');

const create = async text => {
    try {
      console.log(shortid.generate());
     return shortid.generate(text);
    } catch (err) {
     return console.error(err);
    };
};

var RouterUrl = function(){

  this.postCreateUrl = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let url = req.body.url;
    create(url)
      .then(val =>
        res.send({
          status:'success',
          msj:'URL cortado.',
          data:val
        })
      )
      .catch(function(error){ 
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("ERROR");
        console.log(errorCode, errorMessage);
        res.send({
          status:'error',
          msj:'Acortamiendo de URL no creado.'
        });
      }
    );
  };

};

module.exports = function(){
  var instancia = new RouterUrl();
  return instancia;
};