"use strict";
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");  
    const usernameInput = document.querySelector("input[type='text']");  
    const passwordInput = document.querySelector("input[type='password']");


    form.addEventListener("submit", function(event) {
        event.preventDefault();  

       
        const username = usernameInput.value;
        const password = passwordInput.value;

        
        const saveData = confirm("do you want to save the data?");

        if (saveData) {
            
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("success");
        } else {
            alert("Data not saved.");
        }

        
        console.log("data user", username, password);
    });
});
