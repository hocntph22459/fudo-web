const email = document.querySelector("#email");
const fullname = document.querySelector("#fullname");
const pw = document.querySelector("#pw");
const rpw = document.querySelector("#rpw");
function sigup(){
    if(email.value == 0 || fullname == 0 || pw.value == 0 || rpw.value == 0){
        alert("nhập tất cả các trường");
        email.style.background = "yellow";
        fullname.style.background = "yellow";
        pw.style.background = "yellow";
        rpw.style.background = "yellow";
        return false;
    }
    if(fullname.value.length < 8){
        alert("fullname phải trên 8 kí tự");
        fullname.style.background = "yellow";
        return false;
    }
    if(pw.value.length < 6){
        alert("password phải nhập trên 6 kí tự");
        pw.style.background = "yellow";
        return false;
    }
    if(pw.value.length != rpw.value.length){
        alert("password phải trùng nhau");
        pw.style.background = "yellow";
        rpw.style.background = "yellow";
        return false;
    }
}

