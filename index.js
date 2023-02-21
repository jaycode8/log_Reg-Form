const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const email = document.getElementById('mail');
const username = document.getElementById('usern');
const passw = document.getElementById('password');
const username2 = document.getElementById('usern2');
const passw2 = document.getElementById('password2');

signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});

const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        if (username2.value == '' || passw2.value == '') {
            alert('all fields are required');
        } else {
            alert(`welcome ${username2.value}... we missed you !!!!`);
            window.location.reload(true)
        }
    } catch (error) {
        alert('error');
    };
};

const handlePostUser = async (e) => {
    try {
        e.preventDefault();
        if (email.value == '' || username.value == '' || passw.value == '') {
            alert('all fields are required');
        } else {
            const pattern = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
            const mailverify = await email.value.match(pattern);
            if (!mailverify) {
                alert('email address invalid');
            } else {
                alert(`welcome ${username.value} ${mailverify}`);
                window.location.reload(true);
            };
        };
    } catch (error) {
        alert('error');
    };
};
