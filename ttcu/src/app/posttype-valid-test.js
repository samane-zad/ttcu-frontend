// Query Selectors
const form = document.querySelector(".form");
const postTypes = document.querySelector("#postType");



// Functions







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



// Event Listeners


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkRequired(postTypes);



})
