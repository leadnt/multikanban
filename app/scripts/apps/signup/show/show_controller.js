define([
	'app',
	'apps/signup/show/show_view'
], function(App, View){
	App.module("SignupApp.Show", function(Show, App, Backbone, Marionette, $, _){
		Show.Controller = {
			showSignup: function(){

				var signupShowView = new View.Signup();

				signupShowView.on("signup", function(){

					console.log("signup");
					//signup logic

					var url = '../../multikanban-api/web/users';
					var formValues = {
			            username: $('#inputUsername').val(),
			            password: $('#inputPassword').val(),
			            email: $('#inputEmail').val()
			        };

			        console.log(JSON.stringify(formValues));

			        $.ajax({
			            url:url,
			            type:'POST',
			            dataType:"json",
			            contentType: "application/json",
			            data: JSON.stringify(formValues),
			            success:function (data) {
			                console.log(["Signup: ", data]);
			               
			                if(data.error) {  // If there is an error, show the error messages
			                    console.log('error data');
			                }
			                else { // If not, send them to the home page
			                	console.log(data);

			                	// Saving the user in the localStorage
			                	window.localStorage.setItem('multikanban user', JSON.stringify(data));
			                	App.loggedInUser = data;
			                	
			                    App.trigger("home:show");
			                }
			            },
			            error:function(){
			            	console.log('error logging in');
			            }
			        });
					
				});

				App.contentRegion.show(signupShowView);
			}
		}
	});

	return App.SignupApp.Show.Controller;
});