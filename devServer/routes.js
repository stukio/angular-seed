var url = require('url');
var path = require('path');
module.exports = function(express, app, staticdir) {

  app.get('/*', function(req, res) {
    console.log(url.parse(req.url).pathname);
    if(url.parse(req.url).pathname.match(/\.[A-Za-z]{2,}/g)) {
      if (process.env.NODE_ENV === 'production'){
        res.sendFile(path.resolve(__dirname + '/../dist.prod/'+ url.parse(req.url).pathname));
      } else {
        // res.sendFile(path.resolve(__dirname + '/../'+ staticdir +'/'+ url.parse(req.url).pathname));
        res.sendFile(path.resolve(__dirname + '/../dist.dev/'+ url.parse(req.url).pathname));
      }
    } else {
      res.sendFile(path.resolve(__dirname + '/../'+ staticdir +'/index.html'));
    }
  });
};
