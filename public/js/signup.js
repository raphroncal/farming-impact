$(document).ready(function() {

    $('#submit-signup').click(function(e) {
        e.preventDefault();
        let username = $('#username-signup');
        let password = $('#password-signup');
        let password1 = $('#password-signup1');
        let err = false;

        if (username[0].value.length == 0 ||
            password[0].value.length == 0 ||
            password1[0].value.length == 0) {
            err = true;
            alert('Please fill up all values');
            console.log("fill");
            }
        else if (password.val() != password1.val()) {
            err = true;
            alert('Check passwords if they are the same');
            console.log("not same");
        }
        
        if(!err) {
            $.post('/sign-up', {
                username: username.val(),
                password: password.val()
            }, function(user){
                window.location = "/"
            });
        }
    })
});