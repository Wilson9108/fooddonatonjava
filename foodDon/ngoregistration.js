const form = document.querySelector("#form");
const username = document.querySelector(".username");
const mobilenumber = document.querySelector(".mobilenumber");
const password = document.querySelector(".password");
const conpassword = document.querySelector(".conpassword");
const email = document.querySelector(".email");
const adhar = document.querySelector(".adhar");
const area = document.querySelector(".area");
const city = document.querySelector(".city");
const dob = document.querySelector(".dob");
const statuss = document.querySelector(".status");
const  male = document.querySelector(".male");
const female = document.querySelector(".female");
const others = document.querySelector(".others");
const nameerror = document.querySelector(".usernameError");
const mobilenumbererror = document.querySelector(".mobilenumberError");
const  passworderror =  document.querySelector(".passwordError");
const conerror =document.querySelector(".conError");
const emailerror=document.querySelector(".emailError");
const adharerror = document.querySelector(".adharError");
const areaerror = document.querySelector(".areaError");
const cityerror = document.querySelector(".cityError");
const doberror = document.querySelector(".dobError");
const statuserror = document.querySelector(".statusError");
const gendererror = document.querySelector(".genderError");


form.addEventListener('submit',(e)=>{
    console.log("adkjafjdjss")
     e.preventDefault();
    validateName();
    validateMobilenumber()
    validatepassword();
    validateConpass();
    validateEmail();
    validateAdhar();
    validateArea();
    validateCity();
    validateDob();
    validateStatus();
    validateGender();
    
})

// validation username function;
function validateName(){
    uname = username.value.trim();
    if(uname === "" || uname === null ){
        nameerror.style.display="block";
        nameerror.innerText="Username cannot be empty"
        return false;
    }
    else{
        nameerror.style.display="none"
        return true;
    }
}

// validation mobilenumbe function
function validateMobilenumber(){
    mnumber = mobilenumber.value.trim();
if(mnumber ==="" || mnumber === null){
    mobilenumbererror.style.display="block";
    mobilenumbererror.innerText="Mobilenumber cannot be empty ";
    return false;
}
else{
    mobilenumbererror.style.display="none";
    return true;
}
}


// validation passsword function
function validatepassword(){
    pass = password.value.trim();
    if(pass === "" || pass === null){
        passworderror.style.display="block";
        passworderror.innerText="Password cannot be empty";
        return false;
    }else if(password.value.length <5){
        passworderror.style.display="block";
        passworderror.innerText="Password must contain 5 0r more characters";
        return false;
    }
    else{
        passworderror.style.display="none";
        return true;
    }
}

// validation confirm password function
function validateConpass(){
    cpass = conpassword.value.trim();
    if(cpass==="" || cpass === null){
        conerror.style.display="block";
        conerror.innerText="Confirm Password cannot be empty ";
        return false;
    }else if(cpass!=pass){
        conerror.style.display="block";
        conerror.innerText="Password and Confirm Password does not match";
        return false;
    }
    else{
        conerror.style.display="none";
        return true;
    }
}


// validation Email function
function validateEmail(){
    emal = email.value.trim();
    if(emal==="" || emal=== null){
        emailerror.style.display="block";
        emailerror.style.color="red";
        emailerror.innerText="email cannot be empty ";
        return false;
    }else{
        emailerror.style.display="none";
        return true;
    }
}

// validation Adhar function
function validateAdhar(){
    adar = adhar.value.trim();
    if(adar === "" || adar === null){
        adharerror.style.display="block";
        adharerror.innerText="adhar cannot be empty ";
        return false;
    }else{
        adharerror.style.display="none";
        return true;
    }
}

function validateArea(){
    aria = area.value.trim();
    if(aria === "" || aria === null){
        areaerror.style.display="block";
        areaerror.innerText="Area cannot be empty ";
        return false;
    }
    else{
        areaerror.style.display="none";
        return true;
    }
}

function validateCity(){
    citi =  city.value.trim();
    if(citi === "" || citi === null){
        cityerror.style.display="block";
        cityerror.innerText="City cannot be empty";
        return false;
    }
    else{
        cityerror.style.display="none";
        return true;
    }
}
function validateDob(){
    dofb = dob.value.trim();
    if(dofb === "" || dofb === null){
        doberror.style.display="block";
        doberror.innerText="Date of birth cannot be empty ";
        return false;
    }else{
        doberror.style.display="none";
        return true;
    }
}
function validateStatus(){
    sts = statuss.value.trim();
    if(sts === "" || sts === null){
        statuserror.style.display="block";
        statuserror.innerText="Status cannot be empty";
        return false;
    }else{
        statuserror.style.display="none";
        return true;
    }
}
function validateGender(){
    if(male.checked){
         gendererror.style.display="none"
         return true
 
    }else if(female.checked){
        valid = true;
        gendererror.style.display="none"
        return true
        

    }
    else if(others.checked){
        valid = true;
        
        gendererror.style.display="none"
        return true
    }
    else{
        gendererror.style.display="block"
        gendererror.innerText="Please Select gender";
        return false;
    
    }
}





