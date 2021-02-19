const managerUrl = require('../../generateurl/urlgenerator.js');

const managerInstanceUrl = new managerUrl();

var RouterUrl = function(){

  this.postCreateUrl = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let url = req.body.url;
    managerInstanceUrl.validate(
      url,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            msj:'Not a URI'
          });
        }else{
          managerInstanceUrl.generateShortUrl(
            url,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  msj:'Acortamiendo de URL no creado.'
                });
              }else{
                res.send({
                  status:'success',
                  msj:'URL acortado.',
                  data:result
                });
              }
            }
          );
        }
      }
    );
  };

};

module.exports = function(){
  var instancia = new RouterUrl();
  return instancia;
};