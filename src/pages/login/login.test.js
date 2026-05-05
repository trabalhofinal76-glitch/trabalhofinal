const validaLogin = require('./function');

test('Teste LOGING', () => {
    expect(validaLogin('trabalhofinal@gmail.com', '123')).toBe(true);
});