import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarsenha, setConfirmarsenha] = useState('');

  const navigate = useNavigate();

  function emailValido(email) {
    return (
      email.includes('@gmail.com') ||
      email.includes('@hotmail.com') ||
      email.includes('@yahoo.com')
    );
  }

  function validarSenha(senha) {
    const requisitos = {
      comprimento: senha.length >= 8,
      maiuscula: /[A-Z]/.test(senha),
      minuscula: /[a-z]/.test(senha),
      numero: /[0-9]/.test(senha),
      especial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
    };

    return Object.values(requisitos).every((req) => req === true);
  }

  function enviaDados() {
    if (
      nome.length > 2 &&
      emailValido(email) &&
      validarSenha(senha) &&
      senha === confirmarsenha
    ) {
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);

      alert('Cadastro realizado!');
      navigate('/login');
    } else {
      alert('Dados inválidos ou senhas não coincidem');
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
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Crie uma senha forte"
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          onChange={(e) => setConfirmarsenha(e.target.value)}
        />

        <button onClick={enviaDados}>SALVAR</button>

        <button onClick={() => navigate('/')}>
          JÁ TENHO CONTA
        </button>
      </div>
    </div>
  );
}

export default Cadastro;