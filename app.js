const email=document.getElementById("email");
const fondoInput=document.querySelectorAll("input");



email.addEventListener("input",()=>{
    if (email.checkValidity()) {
        email.classList.remove("invalid");
    }else if(email.value !==""){
        email.classList.add("invalid");
    }
})