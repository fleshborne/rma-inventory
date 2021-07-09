$(document).ready(() => {
    const loginForm = $('.login');
    const emailInput = $('#email-input');
    const passwordInput = $('#password-input');
    const Alert = new Poperror();

    loginForm.on('submit', (event) => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
        }
        console.log(userData);

        if (!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);
        emailInput.val('');
        passwordInput.val('');
    });
    function loginUser(email, password) {
        console.log(`${email}, ${password}`)
        $.post('/api/login', {
            email,
            password,
        })
            .then(() => {
                console.log('login successful with email' + email + password)
                window.location.replace('/index.html');
            })
            .catch((err) => {
                console.log(`unauthorized, ${err}`)
                Alert.render();
            })
    }
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
})

  function boxclose() {
    console.log('in boxclose');
    document.getElementById('dialogbox').style.display = 'none';
  }
  