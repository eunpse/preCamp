const checkValidation = () => {
    let email = document.getElementById("email").value
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value

    //email !== "" && password1 !== "" && password2 !== ""
    if( email && password1 && password2 ) {
        //모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false;
    } else {
        //하나라도 비어있을 때
        document.getElementById("submit").disabled = true;
    }
}