
document.getElementById('login-btn').addEventListener('click', function () {
    // const nameLoginValue = getInputValueById('name-input-login');
    // const emailLoginValue = getInputValueById('email-input-login');
    const usernameLoginValue = getInputValueById('username-input-login');
    const passwordLoginValue = getInputValueById('password-input-login');

    if (usernameLoginValue === '' || passwordLoginValue === '') {
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
    } else if (usernameLoginValue === 'nirjon' && passwordLoginValue === '123456') {
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
            title: "Login Successfully"
        }).then((isOkay) => {
            if (isOkay) {
                window.location.href = 'home.html';
            }
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
            icon: "warning",
            title: "Invalid Login Access"
        });
    }

    // console.log(nameInputValue, emailInputValue, usernameInputValue, passwordInputValue);
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