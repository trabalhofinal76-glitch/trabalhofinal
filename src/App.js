import { useState } from 'react';
import './App.css';


function App() {
  const[confirmarsenha, setConfirmarsenha] = useState('');
  const [nome, setNome] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [email, setEmail] = useState('');


  function emailValido(email) {
    return (
      email.includes('@gmail.com') ||
      email.includes('@hotmail.com') ||
      email.includes('@yahoo.com')
    );
  }

  function enviaDados() {
    if (
      nome.length > 2 &&
      emailValido(email) &&
      datanascimento !== ''
    ) {
      alert('Formulário enviado');
    } else {
      alert('Formulário inválido');
    }
  }

 function validarSenha(senha) {
  const requisitos = {
    comprimento: senha.length >= 8,
    maiuscula: /[A-Z]/.test(senha),
    minuscula: /[a-z]/.test(senha),
    numero: /[0-9]/.test(senha),
    especial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
  };

  // Retorna true se todos os requisitos forem atendidos
  return Object.values(requisitos).every(req => req === true);
};
function confirmarsenha(){
  if validarSenha = confirmarsenha

};


  return (
    <div className="container">
      <div className="card">
        <h2>Cadastro</h2>

        <input
          placeholder="Seu nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="date"s
          onChange={(e) => setDatanascimento(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Crie uma senha forte"
          onChange={(e) => validarSenha(e.target.value)}
        />

        <button onClick={enviaDados}>SALVAR</button>
      </div>
    </div>
  );
}

export default App;