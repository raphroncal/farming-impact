$(document).ready(function () {
    
    $('#submit').click(function(e) {
        e.preventDefault();

        let username = $('#username');
        let password = $('#password');

        $.post("/login", {
            username: username.val(),
            password: password.val()
        }, function(result) {

            if(result == 'characters') {
                window.location = '/characters';
                done();
            }
            else {
                window.location = '/login';
                done();
            }
        });
    })
});