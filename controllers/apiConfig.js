
const in_client_id = 'client_id',
    in_client_secret = 'client_secret',
    in_redirect_uri = 'http://localhost:3000/auth',
    in_auth_url = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id='
                  + in_client_id + '&redirect_uri='
                  + in_redirect_uri + '&state=DCEeFWf45A53sdfKef424&scope=r_basicprofile';

//https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=123456789&redirect_uri=https%3A%2F%2Fwww.example.com%2Fauth%2Flinkedin&state=987654321&scope=r_basicprofile
  module.exports = {
      port: process.env.PORT || 3000,

      instagram: {
        client_id: in_client_id,
        client_secret: in_client_secret,
        redirect_uri: in_redirect_uri,
        auth_url: in_auth_url
      }
};
