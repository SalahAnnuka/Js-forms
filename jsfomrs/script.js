function onChangeEmail(){
    window.alert(document.getElementById("email").value);
}

function onChangePassword(){
    window.alert(document.getElementById("password").value);
}

function onChangeTelephone(){
    window.alert(document.getElementById("telephone").value);
}

function onClickSubmit()
{
    var result = document.getElementById("result");
    console.log("Email: "+document.getElementById("email").value);
    console.log("Password: "+document.getElementById("password").value);
    console.log("Telephone: "+document.getElementById("telephone").value);
}