function validaLogin(user, password) {
    if (user == 'trabalhofinal@gmail.com' && password == '123') return true;
    else return false;
}

module.exports = validaLogin;