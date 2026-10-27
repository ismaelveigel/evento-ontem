import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { criarInscricao } from "../api";

function Inscricao() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", tipoIngresso: "estudante" });
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  function atualizar(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function enviar(event) {
    event.preventDefault();
    setErro("");
    setEnviando(true);
    try {
      await criarInscricao(form);
      navigate("/inscritos", { state: { sucesso: "Inscrição realizada com sucesso! Até ontem." } });
    } catch (error) {
      setErro(error.message);
    } finally {
      setEnviando(false);
    }
  }

  return <section className="form-page grid-container"><div className="section-label">03 / inscrição</div><div className="form-intro"><p className="eyebrow">Você está quase no passado.</p><h1>Garanta seu<br /><em>lugar.</em></h1><p>Preencha os dados abaixo e venha descobrir o que o futuro já preparou para você.</p></div><form className="registration-form" onSubmit={enviar}><label>Nome completo<input name="nome" value={form.nome} onChange={atualizar} placeholder="Seu nome" required /></label><label>E-mail<input type="email" name="email" value={form.email} onChange={atualizar} placeholder="voce@email.com" required /></label><label>Telefone <span>(opcional)</span><input name="telefone" value={form.telefone} onChange={atualizar} placeholder="(11) 99999-9999" /></label><fieldset><legend>Tipo de ingresso</legend><label className="radio-option"><input type="radio" name="tipoIngresso" value="estudante" checked={form.tipoIngresso === "estudante"} onChange={atualizar} /> Estudante</label><label className="radio-option"><input type="radio" name="tipoIngresso" value="profissional" checked={form.tipoIngresso === "profissional"} onChange={atualizar} /> Profissional</label></fieldset>{erro && <p className="form-error">{erro}</p>}<button className="button button-dark submit-button" disabled={enviando}>{enviando ? "Enviando..." : "Confirmar inscrição ↗"}</button><Link className="back-link" to="/">← Voltar para o evento</Link></form></section>;
}

export default Inscricao;
