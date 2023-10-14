const fullName = document.getElementsByName("full-name")[1].value;
const password = document.getElementsByName("password")[1].value;
const gender = "";

// get gender value
document.getElementsByName("gender").forEach(element => {
    if(element.checked) {
        gender = element.value;
    }
});


