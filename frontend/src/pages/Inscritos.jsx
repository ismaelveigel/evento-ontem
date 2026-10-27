import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listarInscricoes, removerInscricao } from "../api";

function Inscritos() {
  const location = useLocation();
  const [inscricoes, setInscricoes] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  async function carregar() {
    try { setInscricoes(await listarInscricoes()); } catch (error) { setErro(error.message); } finally { setCarregando(false); }
  }

  useEffect(() => { carregar(); }, []);

  async function excluir(id) {
    if (!window.confirm("Remover esta inscrição?")) return;
    try { await removerInscricao(id); setInscricoes((atuais) => atuais.filter((item) => item.id !== id)); } catch (error) { setErro(error.message); }
  }

  return <section className="attendees-page grid-container"><div className="section-label">04 / inscritos</div><div className="attendees-heading"><div><p className="eyebrow">A lista do futuro</p><h1>Quem já<br /><em>chegou.</em></h1></div><div className="count-box"><strong>{inscricoes.length.toString().padStart(2, "0")}</strong><span>inscritos</span></div></div>{location.state?.sucesso && <p className="success-message">{location.state.sucesso}</p>}{erro && <p className="form-error">{erro}</p>}{carregando ? <p className="empty-state">Consultando os registros...</p> : inscricoes.length === 0 ? <p className="empty-state">Ainda não há inscritos. Seja o primeiro a chegar.</p> : <div className="attendees-list">{inscricoes.map((inscricao) => <article className="attendee-row" key={inscricao.id}><span className="attendee-number">{String(inscricao.id).padStart(2, "0")}</span><div><h2>{inscricao.nome}</h2><p>{inscricao.email}{inscricao.telefone && ` · ${inscricao.telefone}`}</p></div><span className={`ticket ticket-${inscricao.tipoIngresso}`}>{inscricao.tipoIngresso}</span><button className="delete-button" onClick={() => excluir(inscricao.id)} aria-label={`Remover inscrição de ${inscricao.nome}`}>×</button></article>)}</div>}</section>;
}

export default Inscritos;
