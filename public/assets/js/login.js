$(document).ready(() => {
    const loginForm = $('form.login');
    const emailInput = $('input#email');
    const passwordInput = $('input#password');


    loginForm.on('submit', (event) => {
        console.log('i got clicked')
        event.preventDefault();
        
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
        }

        if (!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);
        emailInput.val('');
        passwordInput('');
    });
    function loginUser(email, password) {
        $.post('/api/user', {
            email,
            password,
        })
            .then(() => {
                window.location.href = '/';
            })
            .catch((err) => {
                console.log(`unauthorized, ${err}`)
                Alert.render();
            })
    }

})