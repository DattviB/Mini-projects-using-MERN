 

      const form = document.getElementById('loginform');
      
      function validateLogin(){
        $(".error").remove();
        var email = $.trim($('#emailId').val());
        var uname = $.trim($('#userName').val());


        if (email == null || email =="") {
          $('#emailId').after('<span class="error">Please enter email address</span>');
          //return false;
        }else{
          var regExEmail = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(northeastern)\.edu$/g;
          var validEmail = regExEmail.test(email);
          if (!validEmail) {
            $('#emailId').after('<span class="error">Enter a valid email (abc@northeastern.edu)</span>');
           // return false;
            
          }else if(email.length > 30){
              $('#emailId').after('<span class="error">Email id should be less than 30 characters</span>');
             // return false;
          }
        }
        
        if (uname.length < 1) {
          $('#userName').after('<span class="error">Please enter user name </span>');
          //return false;
        }else{
          var regExName = /^[a-zA-Z]+$/;
          var validName = regExName.test(uname);
          if(uname.length>15 || uname.length<2 ){
              $('#userName').after('<span class="error"> User name must be between 2 to 15 characters long </span>');
           // return false;
          }else if(!validName){
              $('#userName').after('<span class="error">Please enter valid user name (only alphabets allowed) </span>');
             // return false;
            }
        }
        if ($('#pwd').val().length < 1) {
          $('#pwd').after('<span class="error">Please enter the password</span>');
         // return false;
        }else if ($('#pwd').val().length < 8) {
          $('#pwd').after('<span class="error">Password must be at least 8 characters long</span>');
          //return false;
        }

       // return true;
      }
      $("#loginform").submit( function(e){
        e.preventDefault();
        //validation
        validateLogin();
        if(!$('.error').is(":visible")){
          const uname= $('#userName').val();
        //alert("about to login:"+uname)
        localStorage.setItem("username",uname);
        window.location.href="calculator.html";
        }
        
    });