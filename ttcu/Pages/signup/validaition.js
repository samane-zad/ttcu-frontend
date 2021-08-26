    // Query Selectors
    const form = document.querySelector(".form");
    const username = document.querySelector("#username");
    const fName = document.querySelector("#fName");
    const lName = document.querySelector("#lName");
    const uni = document.querySelector("#uni");
    const userType = document.querySelector("#userType");
    const major = document.querySelector("#major");
    const password = document.querySelector("#password");
    
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
            if(input.value.trim() === "") {
                showError(input, ` مقدار باید وارد شود `);
            } else {
                showSuccess(input);
            }
        })
    }
    
    
    /******/
    function showError(select, message) {
        const formControl = select.parentElement;
        formControl.className = "form-control error";
        const errorText = formControl.querySelector("small");
        errorText.innerText = message;
    }
    
    
    
    
    function showSuccess(select) {
        const formControl = select.parentElement;
        formControl.className = "form-control success";
    }
    
    
    
    function checkRequired(selectArray) {
        selectArray.forEach(function (select) {
            if(select.value.trim() === "") {
                showError(select, ` مقدار باید وارد شود `);
            } else {
                showSuccess(select);
            }
        })
    }
    
    
    /***/
    
    
    
    
    
    
    
    
    function checkLength(input, min, max) {
        if(input.value.length < min || input.value.length === "") {
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
                checkRequired([username,fName,lName,uni,major,userType,password]);
        checkLength(username, 8, 15);
            checkLength(password, 6, 30);
        });
    
    
    
    
    
    
    
    
    
    
    