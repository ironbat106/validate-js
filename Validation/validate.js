function validateForm() {
    let id = document.getElementById("input1").value;
    let name = document.getElementById("input2").value;
    let email = document.getElementById("input3").value;
    let phone = document.getElementById("input4").value;
    let address = document.getElementById("input5").value;
    let password = document.getElementById("input6").value;

    let idError = document.getElementById("idError");
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let addressError = document.getElementById("addressError");
    let passwordError = document.getElementById("passwordError");

    idError.innerText = "";
    nameError.innerText = "";
    emailError.innerText = "";
    phoneNoError.innerText = "";
    addressError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^\d{10}$/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    if (id === "") {
        idError.innerText = "* ID is required";
        isValid = false;
    }
    if (name === "") {
        nameError.innerText = "* Name is required";
        isValid = false;
    }
    if (!emailPattern.test(email)) {
        emailError.innerText = "* Enter a valid email";
        isValid = false;
    }
    if (!phonePattern.test(phoneNo)) {
        phoneNoError.innerText = "* Enter a valid 10-digit phone number";
        isValid = false;
    }
    if (address === "") {
        addressError.innerText = "* Address is required";
        isValid = false;
    }
    if (password.length < 6) {
        passwordError.innerText = "* Password must be at least 6 characters";
        isValid = false;
    } else id (!passwordPattern.test(password)){
        passwordError.innerText = "* Password must contain at least one number and one special character"
        isValid = false;
    }

    return isValid;
}