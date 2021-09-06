// Query Selectors
const form = document.querySelector("#form");
const username = document.querySelector("#textId");
// const fName = document.querySelector("#fName");
// const lName = document.querySelector("#lName");
// const university = document.querySelector("#uni");
// const userType = document.querySelector("#userType");
// const majors = document.querySelector("#major");
// const passwordConfirm = document.querySelector("#confirm-password");
// const password = document.querySelector('#password');
// // Functions



function checkusername(input) {
    var re = /^(([a-zA-Z)]+[a-zA-Z]{8,15}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `تعداد کاراکتر ها حداقل و حداکثر 15 باشد!عدد،علائم،فضای خالی،زبان فارسی دراین فیلد نامعتبراست `) 
           

        }      
       }          
        
      
        
    
    //    function checkNameAndLastName(input) {
    //     var re = /^(([a-zA-Z\+\.)+[a-zA-Z]{8,15}))$/;
    //     if(re.test(input.value.trim())) {
    //         showSuccess(input);
    //     } else {
    //         showError(input,
    //              `تعداد کاراکتر ها حداقل باید وحداکثر 15 باشد|عدد،علائم،فضای خالی،زبان فارسی در این فیلد نامعتبراست `) 

    //         }      
    //        }          
            






function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const errorText = formControl.querySelector("small");
    errorText.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if(input.value.trim() === "" ||input.value.trim() === "") {
            showError(input, `پُر کردن  فیلد الزامی است `);
        } else {
            showSuccess(input);
        }
    })
}

/******/
// function showError(select, message) {
//     const formControl = select.parentElement;
//     formControl.className = "form-control error";
//     const errorText = formControl.querySelector("small");
//     errorText.innerText = message;
// }




// function showSuccess(select) {
//     const formControl = select.parentElement;
//     formControl.className = "form-control success";
// }



// function checkRequired(selectArray) {
//     selectArray.forEach(function (select) {
//         if(select.value.trim() === "") {
//             showError(select, `پُر کردن  فیلد الزامی است`);
//         } else {
//             showSuccess(select);
//         }
//     })
// }


/***/


function checkLength(input, min, max) {
    if(input.value.length < min || input.value.length === "" ||input.value.trim() === "") {
        showError(input, ` تعداد کاراکتر ها حداقل باید  ${min} کاراکتر باشد`);
    } else if(input.value.length > max) {
        showError(input, `   تعداد کاراکتر ها حداکثر باید ${max}کاراکتر باشد `);
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    // Returns the id name of the input (such as "username", "password"),
    // but adding a captial letter to the beginning of each ID and then joining
    //the rest of the word to the capital letter
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



function doPasswordsMatch(input, input2) {
    if(input.value === input2.value) {
        showSuccess(input2);
    }
    else {
        showError(input2, "هر دو رمز عبور باید مطابقت داشته باشند!");
    }
}




   


// Event Listeners
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkRequired([textId]);

}) 


form.addEventListener("submit", (event) => {
    event.preventDefault();
    

     checkusername(textId,3,20);
     
    // checkLength(password, 6, 30);
    // checkLength(passwordConfirm, 6, 30);
    // doPasswordsMatch(password, passwordConfirm);
}) 



