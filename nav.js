let menu = document.querySelector(".menu");
let ul = document.querySelector(".ul-container");
let lia = document.querySelectorAll(".li a");
let hr = document.querySelectorAll(".hr");
let iterator = 0;

menu.addEventListener("click", function(e){
    if(iterator%2 == 0){
        ul.style.height = "500px";
        ul.style.backgroundColor = "#000";
        lia.forEach(element => {
            element.style.display = "initial";
        });
        hr.forEach(element => {
            element.style.display = "block";
        });
        iterator++;
    }
    else{
        ul.style.height = "0";
        lia.forEach(element => {
            element.style.display = "none";
        });
        hr.forEach(element => {
            element.style.display = "none";
        });
        iterator++;
    }
    

})
