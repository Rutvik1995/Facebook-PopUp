$(document).ready(function(){

    console.log("in script function ");

    $("#login").click(function(){
        console.log(" button is click");
        facebookLogin();
    });

});


function facebookLogin(){
    FB.getLoginStatus(function(response) {
        console.log(response);
        statusChangeCallback(response);
    });
}
function statusChangeCallback(response){
    if(response.status==="connected"){
        console.log("user in connected");
        $("#login").hide();
        $("#addmessage").show();
        $("#logout").show();
        fetchUserProfile();
    }
    else{
        //$("#logout").show();
        //fetchUserInformation();
        facebookLoginByDialog();
    }
}

function fetchUserProfile(){
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,email', function(response) {
      console.log(response);
      console.log('Successful login for: ' + response.name);
      var profile = `<h1>Welcome {response.name}<h1>
       <h2>Your email is ${response.email}</h2>
       <h3>Your Birthday is ${response.birthday}</h3>`;
      $("#status").append(profile);
    });

}
function facebookLoginByDialog(){
    FB.login(function(response) {
       
        statusChangeCallback(response);
       
    }, {scope: 'public_profile,email'});
}