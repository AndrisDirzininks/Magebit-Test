/**
 * Manage email validation messages
 * @author Andris Dirzininks <andrisdirzininks.com>'
*/
var inputField = document.getElementById('mail');
var errMessage = document.getElementsByClassName('err-message')['0'];
var checkBox = document.getElementById('check');
var button = document.getElementsByClassName('button')[0];
var buttonHover = document.getElementsByClassName('button-blue')[0];
var mailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var mailFormatColumbia = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+co)$/i;
var messageContentProvide = "Please provide a valid e-mail address";
var messageContentAccept = "You must accept the terms and condittions";
var messageContentRequired = "Email address is required";
var messageContentColumbia = "We are not accepting subscriptions from Columbia emails";

inputField.addEventListener('focus', showRequireMail);
inputField.addEventListener('input', validateMail);
checkBox.addEventListener('change', validateMail);

function showRequireMail() {
    if (inputField.value === "") {
        errMessage.classList.add('show');
        errMessage.innerHTML = messageContentRequired;
    }
}

function validateMail() {
    errMessage.classList.add('show');
    if (inputField.value.match(mailFormat)&&!inputField.value.match(mailFormatColumbia)&&checkBox.checked) {
        errMessage.classList.remove('show');
        button.disabled = false;
        buttonHover.disabled = false;
    }
    
    if(!inputField.value.match(mailFormat)) {
        errMessage.innerHTML = messageContentProvide;
    } else if (inputField.value.match(mailFormatColumbia)) {
        errMessage.innerHTML = messageContentColumbia;
    } else if (!checkBox.checked) {
        errMessage.innerHTML = messageContentAccept;
    }

    if (inputField.value === "") {
        showRequireMail();
    }
}
