import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inscricao from "./pages/Inscricao";
import Inscritos from "./pages/Inscritos";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/">
          <span className="brand-mark">Ø</span>
          <span>evento ontem</span>
        </NavLink>
        <nav className="main-nav" aria-label="Navegação principal">
          <NavLink to="/">O evento</NavLink>
          <NavLink to="/inscricao">Inscreva-se</NavLink>
          <NavLink to="/inscritos">Inscritos</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscricao" element={<Inscricao />} />
          <Route path="/inscritos" element={<Inscritos />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>evento ontem © 2026</span>
        <span>o futuro, visto de trás para frente.</span>
      </footer>
    </div>
  );
}

export default App;
