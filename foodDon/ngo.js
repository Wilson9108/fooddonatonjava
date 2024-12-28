
    const form = document.querySelector("#form");
    const username = document.querySelector(".username");
    const password = document.querySelector(".password");
    const conpassword = document.querySelector(".conpassword");
    const mobilenumber = document.querySelector(".mobilenumber");
    const email = document.querySelector(".email");
    const adhar = document.querySelector(".adhar");
    const area = document.querySelector(".area");
    const city = document.querySelector(".city");
    const male = document.querySelector("select .male");
    const female = document.querySelector("select .female");
    const dob  =document.querySelector(".dob")
    const statuss  =document.querySelector(".status")
    const btn = document.querySelector(".btn");
    const nameerror = document.querySelector(".Nameerror");
    const passerror = document.querySelector(".Passerror");
    const conerror = document.querySelector(".Conerror");
    const moberror = document.querySelector(".Moberror");
    const emailerror = document.querySelector(".Emailerror");
    const adharerror = document.querySelector(".Adharerror");
    const areaerror = document.querySelector(".Areaerror");
    const cityerror = document.querySelector(".Cityerror");
    const gendererror = document.querySelector(".gendererror");
    const doberror = document.querySelector(".Doberror");
    const statuserror = document.querySelector(".Statuserror");

    
    form.addEventListener('submit',(e)=>{
            e.preventDefault();
            validateName() 
            validatePass();
            validateConpass();
            validateMob();
            validateEmail();
            validateAdhar();
            validateArea();
            validateCity();
            // validateGender();
            validateDob();
            validateStatus();
    });

    function validateName(){
        if(username.value === "" || username.value === null){
            nameerror.style.display="block";
            return false;
           
        }else{
            nameerror.style.display="none";
            return true;
        }
    }
    function validatePass(){
        if(password.value === "" ||  password.value === null){
            passerror.style.display="block";
            return false;
        }
        else{
            passerror.style.display="none";
            return true;
        }
    }
    function validateConpass(){
        if(password.value === "" || password.value === null){
            conerror.style.display="block";
            return false;
        }
        else if(conpassword.value!==password.value ){
            conerror.style.display="block";
            conerror.innerHTML="Confirm password must be the same as password"
            return false;
        }else{
            conerror.style.display="none";
            return true;
        }
    }
    
    function validateMob(){
        if(mobilenumber.value==="" || mobilenumber.value === null){
            moberror.style.display="block";
            return false;
        }else{
            moberror.style.display="none";
            return true;
        }
    }
    // validate Email
    function validateEmail(){
        if(email.value==="" || email.value=== null){
            emailerror.style.display="block";
            return false;
        }else{
            emailerror.style.display="none";
            return true;
        }
    }
    //validate Adhar
    function validateAdhar(){
        if(adhar.value=== "" || adhar.value === null){
            adharerror.style.display="block";
            return false;
        }
        else{
            adharerror.style.display="none";
            return true;
        }
    }
    // validate Area
    function validateArea(){
        if(area.value === "" || area.value === null){
            areaerror.style.display="block";
            return false;
        }else{
            areaerror.style.display="none";
            return true;
        }
    }

    // validateCity
    function validateCity(){
        if(city.value === "" || city.value === null){
            cityerror.style.display="block";
            return false;
        }else{
            cityerror.style.display="none";
            return true;
        }
    }
    // //validate gender
    // function validateGender(){
    //     if(male === "" ||female === "")
    //         {
    //             gendererror.style.display="block";
    //             return false;
    //         }else{
    //             gendererror.style.display="none";
    //             return true;
    //         }
    // }
    //validateDate
    function validateDob(){
        if(dob.value==="" || dob.value===null){
            doberror.style.display="block";
            return false;
        }else{
            doberror.style.display="none";
            return true;
        }
        
    }
    // validate status
    function validateStatus(){
        if(statuss.value === "" || statuss.value === null){
            statuserror.style.display="block";
            return false;
        }else{
            statuserror.style.display="none";
            return true;
        }
    }


