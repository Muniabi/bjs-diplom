"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = function (data) {
    ApiConnector.login(data, (response) => {
        if (response.success) {
            location.reload(); // Обновляем страницу после успешной авторизации
        } else {
            userForm.setLoginErrorMessage(response.error); // Выводим ошибку в форму
        }
    });
}


userForm.registerFormCallback = function (data) {
    ApiConnector.register(data, (response) => {
        if (response.success) {
            location.reload(); // Обновляем страницу после успешной регистрации
        } else {
            userForm.setRegisterErrorMessage(response.error); // Выводим ошибку в форму
        }
    });
}

