const showFormBtn = document.querySelector(".login-btn");
const formLog = document.querySelector(".form-log");
const hideFormBtn = document.querySelector(".form-log .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

const usernameSign=document.getElementById("usernameSign")
const emailSign=document.getElementById("emailSign")
const passwordSign=document.getElementById("passwordSign")
const ConsfirmPass=document.getElementById("ConsfirmPass")
const goFromSign=document.getElementById("goFromSign")
const username=document.getElementById("username")
const password=document.getElementById("password")
const goFromLogin=document.getElementById("goFromLogin")
const errorUN=document.getElementById("errorUN")
const errorE=document.getElementById("errorE")
const errorP=document.getElementById("errorP")
const errorCP=document.getElementById("errorCP")
const errorloginU=document.getElementById("errorloginU")
const errorloginP=document.getElementById("errorloginP")
const errorlogin=document.getElementById("errorlogin")



showFormBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-form");
});

hideFormBtn.addEventListener("click", () => showFormBtn.click());


loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        formLog.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

goFromSign.onclick=()=>{
    localStorage.setItem("emailSign",emailSign.value)
    localStorage.setItem("passwordSign",passwordSign.value)
    localStorage.setItem("ConsfirmPass",ConsfirmPass.value)
    if(emailSign.value=="" || passwordSign.value=="" || ConsfirmPass.value=="" ){
        if(emailSign.value==""){
            errorE.innerHTML="Please Enter Your Email First"
        }if(passwordSign.value==""){
            errorP.innerHTML="Please Enter Your Password First"
        }if(ConsfirmPass.value==""){
            errorCP.innerHTML="Please Enter Your Consfirm Password First"
        }
    }else{
        const check=emailSign.value.indexOf("@")
        if(check==-1){
            errorE.innerHTML="Your email dosen't have '@' ,please enter correct email"
        }else if(passwordSign.value!=ConsfirmPass.value){
            errorCP.innerHTML="Consfirm Password must be the same as your password"
        }
        else{
            window.location="home.html" 
        }
    }
    emailSign.value=""
    passwordSign.value=""
    return false
}
goFromLogin.onclick=(e)=>{
    if(username.value=="" || password.value==""){
        if(username.value==""){
            errorloginU.innerHTML="Please Enter Your UserName First"
        }if(password.value==""){
            errorloginP.innerHTML="Please Enter Your Password First"
        }
    }else{
        if(localStorage.getItem("emailSign") && localStorage.getItem("passwordSign")){
            var usernameOld=localStorage.getItem("emailSign")
            var passwordOld=localStorage.getItem("passwordSign")
            if(username.value==usernameOld && password.value==passwordOld){
                location="home.html"
            }else if(username.value!=usernameOld){
                errorloginU.innerHTML="Your UserName is not correct"
            }else{
                errorloginP.innerHTML="Your Password is not correct"
            }
        }
    }
    username.value=""
    password.value=""
    return false
}