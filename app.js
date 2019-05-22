// Configure files
 var express =require('express');
 var expressSession=require('express-session');
 var apiConfig = require('./controllers/apiConfig');
 var apiService = require('./controllers/apiServiceController');
 var expressSession=require('express-session');
 var httpRequest = require('request');
 var app=express();

 // Set up template engine
 app.set('view engine','ejs');

// Session middleware
 app.use(expressSession({
   name: 'session',
  secret: '1234',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))

 // Use middleware
 app.use(express.static('./public'));

//Fire routes

app.get('/',function(req,res){

   res.render('index');
});

app.get('/linkedin',function(req,res){

  apiService.getRequest(req,res);

});

app.get('/auth',function(req,res){

//console.log(res);
  apiService.postRequest(req,res);

});



app.get('/insta', function (request, response) {
  var info =  request.session.userinfo;
  console.log(info);
	response.render('success',{info:info});
});

app.get('/login', function (request, response) {
	response.redirect(apiConfig.instagram.auth_url);
});

 app.listen(3000);
 console.log("You are listening to port 3000");
