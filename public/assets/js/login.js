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
function Poperror() {
    // eslint-disable-next-line func-names
    // eslint-disable-next-line spaced-comment
    //var WinW = window.innerWidth;
    // eslint-disable-next-line operator-linebreak
    // eslint-disable-next-line spaced-comment
    //document.getElementById('dialogbox').style.left=100px;
    //  2000 / 2 - 550 * 0.5 + 'px';
    // eslint-disable-next-line func-names
    this.render = function () {
      document.getElementById('dialogbox').style.display = 'block';
      document.getElementById('headermessage').innerHTML = 'Login Invalid ';
      // eslint-disable-next-line operator-linebreak
      document.getElementById('bodymessage').innerHTML =
        'Email and Password Does Not Exist. New Users Please Signup';
      // eslint-disable-next-line operator-linebreak
      document.getElementById('footermessage').innerHTML =
        '<button onclick="boxclose()">OK</button>';
    };
  }
  function boxclose() {
    console.log('in boxclose');
    document.getElementById('dialogbox').style.display = 'none';
  }
  