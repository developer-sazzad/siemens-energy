const nameInput = document.getElementById('')

let usernameArry = [];
document.getElementById('registation-btn').addEventListener('click', function () {
    const nameInputValue = getInputValueById('name-input');
    const emailInputValue = getInputValueById('email-input');
    const usernameInputValue = getInputValueById('username-input');
    const passwordInputValue = getInputValueById('password-input');

    if (nameInputValue === '' || emailInputValue === '' || usernameInputValue === '' || passwordInputValue === '') {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Something want Wrong. Please Try again."
        });
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Registration successfully"
        });
    }

    console.log(nameInputValue, emailInputValue, usernameInputValue, passwordInputValue);
    // Login Success Alart
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //         toast.onmouseenter = Swal.stopTimer;
    //         toast.onmouseleave = Swal.resumeTimer;
    //     }
    // });
    // Toast.fire({
    //     icon: "success",
    //     title: "Registration successfully"
    // });
});