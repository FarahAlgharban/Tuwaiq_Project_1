
    $(document).ready(function(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    });
    
    
    $('.login-reg-panel input[type="radio"]').on('change', function() {
        if($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut(); 
            $('.login-info-box').fadeIn();
            
            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
            
        }
        else if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();
            
            $('.white-panel').removeClass('right-log');
            
            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
    });
  

    $('#register').click(function () { 
        let inputUser = $('#userName').val(); 
        let inputPassword = $('#password').val(); 
        let inputEmail = $('#email').val(); 
     
        if (inputUser !== "" && inputPassword !== "" && inputEmail !== "") { 
            const users = { 
                name: inputUser, 
                password: inputPassword, 
                email: inputEmail 
            }; 
     
            const usersList = JSON.parse(localStorage.getItem('userData')); 
     
            // Check if the usersList Empty or not 
            if (usersList !== null) { 
                // Check if the usersList have this user or not 
                const result = usersList.find((name) => name.name === inputUser && name.email === inputEmail); 
                if (result) { 
                    // if the user there then pritn alert 
                    $('#haveAnAccount').css('display', 'block'); 
                } else { 
                    // add the user 
                    usersList.push(users); 
                    localStorage.setItem('userData', JSON.stringify(usersList)); 
                    $('#register').css('display', 'none'); 
                    $('#register').css('display', 'block'); 
                } 
            } else { 
                // add new user if data is Empty 
                let newUser = []; 
                newUser.push(users) 
                localStorage.setItem('userData', JSON.stringify(newUser)); 
                $('#register').css('display', 'none'); 
                $('#register').css('display', 'block'); 
            } 
        } else { 
            $('#register .alert-warning').css('display', 'block'); 
        } 
    });

    $('#register').click(function () { 
        let inputUser = $('#signIn-username').val(); 
        let inputPassword = $('#signIn-password').val(); 
     
        const usersList = JSON.parse(localStorage.getItem('userData')); 
         
        if (inputUser !== "" && inputPassword !== "") { 
            usersList.forEach(function (user) { 
                if (inputUser === user.name && inputPassword === user.password) { 
                    $('.Sign_in').css('display', 'none'); 
                    $('.homePage').css('display', 'block'); 
                    $('.navbar').css('display', 'block'); 
                    $('.footer').css('display', 'block'); 
                    $('#signIn-username').val(""); 
                    $('#signIn-password').val(""); 
     
                    // Check if Session Storage have Data or No * 
                    sessionStorage.setItem('UserName', inputUser); 
                    const userLogin = sessionStorage.getItem('UserName'); 
                    if (userLogin !== null) { 
                        $('#SignOutBtn').css('display', 'block'); 
                        $('#SignInBtn').css('display', 'none'); 
                        $('#WelcomeUser').text(`Welcome: ${userLogin}`); 
                    } else { 
                        $('#SignOutBtn').css('display', 'none'); 
                        $('#SignInBtn').css('display', 'block'); 
                    } 
                } else { 
                    $('.alert-warning').css('display', 'block'); 
                    $('#information').css('display', 'none'); 
                } 
            }); 
        } else { 
            $('#information').css('display', 'block'); 
        } 
    });