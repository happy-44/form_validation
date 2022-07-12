$(document).ready(function(){
   $('#usernamevalidation').hide();
   $('#emailvalidation').hide();
   $('#passwordvalidation').hide();
   $('#confirmpasswordvalidation').hide();

   var error = true;
   var email_error = true;
   var password_error = true;
   var confirm_password_error = true;

   $('#username').keyup(function(){
        username_validation();
   });

   function username_validation(){
        var username_val = $('#username').val();

        if(username_val.length == ""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot Be Empty');
            $('#usernamevalidation').css('color','red');
            error = false;
            return false;
        }else{
            $('#usernamevalidation').hide();
        }

        if(username_val.length < 3 || username_val.length > 10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Invalid Username');
            $('#usernamevalidation').css('color','red');
            error = false;
            return false;
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
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('Invalid Email');
            $('#emailvalidation').css('color','red');
            email_error = false;
            return false;
        }
    }





   $('#password').keyup(function(){
        password_validation();
   });

    function password_validation(){
        var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$");
        var password_val = $('#password').val();
        if(strongRegex.test(password_val)){
            $('#passwordvalidation').hide();
        }
        else{
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Invalid password');
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
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
            $('#confirmpasswordvalidation').html('password did not match');
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password_error = false;
            return false;
        }else{
            $('#confirmpasswordvalidation').hide();
        }
    }

    $('#submitvalidation').click(function(){
       username_validation();
       email_validation();
       password_validation();
       confirm_password_validation();

       if(error == true && email_password == true && password_error == true && confirm_password_error == true){
        return true;
       }else{
        return false;
       }
    });
});