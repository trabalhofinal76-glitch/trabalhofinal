import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Cadastro from '../App';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>


  );
}

export default Router;