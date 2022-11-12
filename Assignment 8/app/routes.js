// app/routes.js
// grab the nerd model we just created
var Sample = require('./models/sample');
   module.exports = function(app) {
       // server routes ===========================================================
       // handle things like api calls
       // authentication routes
       // sample api route
       app.get('/api/show', function(req, res) {
           Sample.find(function(err, samples) {
               // if there is an error retrieving, send the error.
                               // nothing after res.send(err) will execute
               if (err)
                   res.send(err);
               console.log('samples', samples);
               res.json(samples);
           });
       });
       app.post('/api/insert', function(req, res) {
           console.log(req.body);
           var rec = new Sample(req.body);
           rec.save(function(err,n){
               if (err)
                   console.log('saving failed'+" "+err);
               console.log('saved '+ n);
           });
       });
       // route to handle creating goes here (app.post)
       // route to handle delete goes here (app.delete)
       // frontend routes =========================================================
       // route to handle all angular requests
       app.get('/', function(req, res) {
        //res.sendFile('/Users/saikiranreddykonda/Desktop/LAB/public/views/index.html'); // load our public/index.html file   
        res.sendFile('F:/INFO 6150/Assignments/Assignment 8 webd/public/views/index.html');
       });
   };