
var httpRequest = require('request');
var config = require('./apiConfig');



exports.postRequest = function (request,res) {
  const info={
    'token':'',
    'username':''
  };


	var options = {
  url: 'https://www.linkedin.com/oauth/v2/accessToken',
		method: 'POST',
    //json: true,
		form: {
			client_id: config.instagram.client_id,
			client_secret: config.instagram.client_secret,
			grant_type: 'authorization_code',
			redirect_uri: config.instagram.redirect_uri,
			code: request.query.code
		}
	};

  // POST request to Linkdin auth
	httpRequest(options, function (error,response, body) {

		if (!error && response.statusCode == 200) {
			var user = JSON.parse(body);

      info.token=user.access_token;
      request.session.Iinfo=info;
      request.session.save();
        res.redirect('/insta');
		}else {
		  res.redirect('/');
		}

	});

};

exports.getRequest = function (req,res) {

  // Get request to linkdin auth

  var resource ='https://api.linkedin.com/v1/people/~:(id,email-address,first-name,last-name,formatted-name,picture-url)?oauth2_access_token='+req.session.Iinfo.token+'&format=json';

  var options = {
  url: resource,
    method: 'GET',

  };

  httpRequest(options, function (error,response, body) {

    var userinfo={
      'firstname':'',
      'lastname':'',
      "Profile_pic":'',
      'headline':''
    };
    if (!error && response.statusCode == 200) {
      var user = JSON.parse(body);
        console.log(user)
         userinfo.firstname=user.firstName;
         userinfo.lastname=user.lastName;
         userinfo.profile_pic=user.pictureUrl;
         userinfo.headline=user.formattedName;
         req.session.userinfo=userinfo;

        res.redirect('/insta');
    }else {
      res.redirect('/');
    }

  });
};
