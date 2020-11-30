const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
        return (login.length >= 4 && login.length <= 14) ? true : false;
};
// console.log(isLoginValid('UFo'));

const isLoginUnique = function(allLogins, login) {
    for (const item of allLogins) {
        if (item === login) {
            return false;
        }
    }
    return true;
};
// console.log(isLoginUnique(logins, 'Poly'));

const addLogin = function (allLogins, login) {
    isLoginValid(login);
    if (isLoginValid(login) === false) {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
    isLoginUnique(allLogins, login);
    if (isLoginUnique(allLogins, login) === false) {
        return 'Такой логин уже используется!';
    }
    allLogins.push(login);
    return 'Логин успешно добавлен!';
};
// console.log(addLogin(logins, 'Aladdin'));
// console.log(logins);

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'