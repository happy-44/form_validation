$(document).ready(function(){
   $('#usernamevalidation').hide();
   $('#emailvalidation').hide();
   $('#passwordvalidation').hide();
   $('#confirmpasswordvalidation').hide();

   var error = false;
   var email_error = false;
   var password_error = false;
   var confirm_password_error = false;

   $('#username').keyup(function(){
        username_validation();
   });

   function username_validation(){
        var username_val = $('#username').val();

        if(username_val.length == ""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot Be Empty');
            $('#usernamevalidation').css('color','red');
            error = true;
            return true;
        }else{
            $('#usernamevalidation').hide();
        }

        if(username_val.length < 3 || username_val.length > 10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Invalid Username');
            $('#usernamevalidation').css('color','red');
            error = true;
            return true;
        }else{
            $('#usernamevalidation').hide();
        }
    }

   
    
    
    $('#email').keyup(function(){
        email_validation();
    });

    function email_validation(){
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var email_val = $('#email').val();
        if(emailregex.test(email_val)){
            return false;
        }else if(email_val.length == ""){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Invalid Email');
            $('#emailvalidation').css('color','red');
            password_error = true;
            return true;
        }else{
            $('#passwordvalidation').hide();
        }
    }





   $('#password').keyup(function(){
        password_validation();
   });

    function password_validation(){
        var strongRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
        var password_val = $('#password').val();
        if(strongRegex.test(password_val)){
            return false;
        }else if(password_val.length == ""){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('password length must be atleast 8');
            $('#passwordvalidation').css('color','red');
            password_error = true;
            return true;
        }else{
            $('#passwordvalidation').hide();
        }

        if(password_val.length <= 6){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Invalid password');
            $('#passwordvalidation').css('color','red');
            password_error = true;
            return true;
        }else{
            $('#passwordvalidation').hide();
        }
    }

    
    
    $('#confirmpassword').keyup(function(){
        confirm_password_validation();
    });

    function confirm_password_validation(){
        var confirm_password_val = $('#confirmpassword').val();
        var password_val = $('#password').val();

        if(password_val != confirm_password_val){
            $('#confirmpasswordvalidation').show();
            $('#passwordvalidation').html('password did not match');
            $('#passwordvalidation').css('color','red');
            confirm_password_error = true;
            return true;
        }else{
            $('#confirmpasswordvalidation').hide();
        }
    }

    $('#submitvalidation').click(function(){
       username_validation();
       password_validation();
       confirm_password_validation();

       if(error == false && password_error == false && confirm_password_error == false){
        return false;
       }else{
        return true;
       }
    });
})