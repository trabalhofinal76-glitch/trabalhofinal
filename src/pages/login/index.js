import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  function fazerLogin() {
    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');

    if (email === emailSalvo && senha === senhaSalva) {
      alert('Login feito com sucesso');
    } else {
      alert('Email ou senha incorretos');
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={fazerLogin}>ENTRAR</button>

        <button onClick={() => navigate('/cadastrar')}>
          CRIAR CONTA
        </button>
      </div>
    </div>
  );
}

export default Login;