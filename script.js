function check(mail, pass) {
    if (mail.includes("@") && mail.includes(".") && mail.length >= 3 && pass.length >= 8) {
        return true;
    }
    return false;
}

function solve() {
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    const paragraphs = document.querySelectorAll('p'); // Get all <p> elements

    if (check(mail, pass)) {
        paragraphs.forEach(p => p.style.display = "none"); // Hide all <p> tags
        document.querySelector('div').style.display = "block";
    } else {
        paragraphs.forEach(p => p.style.display = "block"); // Show all <p> tags
        document.querySelector('div').style.display = "none";
    }
}

function signup(){
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(check(mail,pass))
    {
        let verify=window.confirm('Are you sure you want to submit?');
        if(verify)
        {
            alert("successful signup!");
        }
        else{
            location.reload;
        }
    }
    else{
        alert("condition to pass krwade phle, lowdee!!")
    }
}