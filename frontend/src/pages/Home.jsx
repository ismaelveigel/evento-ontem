import { Link } from "react-router-dom";
import EventInfo from "../components/EventInfo";

function Home() {
  return (
    <>
      <section className="hero grid-container">
        <div className="hero-kicker"><span className="pulse-dot" /> Conferência de tecnologia · 2026</div>
        <h1>O evento<br /><em>que já aconteceu.</em></h1>
        <div className="hero-bottom"><p>Grandes ideias chegam antes quando você se inscreve no tempo certo.</p><Link className="button button-dark" to="/inscricao">Inscreva-se <span>↗</span></Link></div>
        <div className="hero-stamp">E.O<br /><span>17—10</span></div>
      </section>
      <EventInfo />
    </>
  );
}

export default Home;
