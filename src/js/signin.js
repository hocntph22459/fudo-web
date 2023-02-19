const email = document.querySelector("#email");
const password = document.querySelector("#password");
function login(){
    if(email.value == 0 || password.value == 0){
        alert("nhập thông tin");
        email.style.background = "yellow";
        password.style.background = "yellow";
        return false;
    }
    if(password.value.length < 6){
        alert("password phải trên 6 kí tự");
        password.style.background = "yellow";
        return false;
    }
}