
var express = require('express');
var router = express.Router();
var request=require('request');
var mongoose = require('mongoose'); 
var favschema=require('./favschema.js');
mongoose.connect( "mongodb://localhost:27017/movie");
/* GET home page*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//when the form is submitted it will get execute

router.get('/search',function(req, res) {
    request.get('https://api.themoviedb.org/3/search/movie?api_key=c028dc558dea31b2e3cd5541b21e9df4&language=en-US&query='+req.query.moviename+'&page=1&include_adult=false', function(err, response, body) {
        if (!err && response.statusCode == 200) {
            res.json(JSON.parse(response.body));
        }
        else {
            res.send('error occured');
        }
    });
});


router.get('/signup',function(req, res) {
    var userdetails={
            firstname:req.params.fname,
            lastname:req.params.lname,
            email:req.params.email,
            password:req.params.pass
      }
    var user=new favschema({firstname:userdetails.firstname,lastname:userdetails.lastname,email:userdetails.email,password:userdetails.password });
    user.save(function(err,out){
         if (err) {
            return err;
            }
            else {
               console.log( res.json(out));
                }
    });      
  });

router.post('/favorites',function(req, res) {
    var fav=JSON.parse(req.body.fav);
    var favobj = new favschema({title:fav.title,poster: fav.poster,releasedate:fav.releasedate });
    //save model to MongoDB
    favobj.save(function (err,out) {
          if (err) {
            return err;
            }
            else {
                res.json(out);
                }
        });
    });



module.exports = router;
