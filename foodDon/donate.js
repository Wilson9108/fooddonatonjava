const form = document.querySelector("#form");
const fooditem = document.querySelector(".foodItem");
const date = document.querySelector(".date");
const address = document.querySelector(".address");
const remark = document.querySelector(".address");
const quantity = document.querySelector(".quantity");
const ngoname  = document.querySelector(".ngoname");
const fooditemerror=document.querySelector(".fooditemerror");


form.addEventListener("click",(e)=>{
    validateFoodItem();
})

function validateFoodItem(){
   let  food = fooditem.value.trim();
    if(food === "" || food === null){
        fooditemerror.style.display="block";
        fooditemerror.innerText="food item cannot be empty";
        return false;
    }else{
        fooditemerror.style.display="none";
        return true;
    }
}

