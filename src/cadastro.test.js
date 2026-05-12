const testeCADASTRO = require('./function.app');

test('Teste do cadastro', () =>{
     expect(testeCADASTRO('trabalhofinal@gmail.com', '123')).toBe(true);
});