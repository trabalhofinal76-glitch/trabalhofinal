import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [email, setEmail] = useState('');

  function validaCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;

    // Bloqueia CPFs repetidos
    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    // Primeiro dígito
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    // Segundo dígito
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  }

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
      validaCPF(cpf) &&
      emailValido(email) &&
      datanascimento !== ''
    ) {
      alert('Formulário enviado');
    } else {
      alert('Formulário inválido');
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Cadastro</h2>

        <input
          placeholder="Seu nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="CPF"
          onChange={(e) => setCpf(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setDatanascimento(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={enviaDados}>SALVAR</button>
      </div>
    </div>
  );
}

export default App;