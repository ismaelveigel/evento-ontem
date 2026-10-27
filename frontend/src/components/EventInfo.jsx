const palestrantes = [
  { nome: "Lia Loop", cargo: "Arquiteta de futuros possíveis", inicial: "LL" },
  { nome: "Caio Cache", cargo: "Especialista em ideias instantâneas", inicial: "CC" },
  { nome: "Nina Null", cargo: "Pesquisadora de bugs existenciais", inicial: "NN" }
];

function EventInfo() {
  return (
    <>
      <section className="event-meta grid-container">
        <div><span>Quando</span><strong>17.10.2026</strong><small>Sábado, das 09h às 19h</small></div>
        <div><span>Onde</span><strong>Galpão 404</strong><small>Rua do Futuro, 101 — São Paulo</small></div>
        <div><span>Formato</span><strong>Presencial</strong><small>Vagas limitadas e café ilimitado</small></div>
      </section>
      <section className="about grid-container">
        <div className="section-label">01 / sobre</div>
        <div className="about-copy"><h2>Um evento sobre tudo o que ainda vai ter acontecido.</h2><p>O Evento Ontem é uma conferência de tecnologia para quem gosta de chegar cedo às tendências — ou tarde demais, dependendo do ponto de vista.</p><p>Um dia de conversas, encontros e ideias sobre produto, inteligência artificial, criatividade e o estranho hábito de tentar prever o amanhã.</p></div>
      </section>
      <section className="speakers grid-container">
        <div className="section-label">02 / palestrantes</div>
        <div className="speaker-grid">{palestrantes.map((palestrante) => <article className="speaker-card" key={palestrante.nome}><div className="speaker-avatar">{palestrante.inicial}</div><h3>{palestrante.nome}</h3><p>{palestrante.cargo}</p></article>)}</div>
      </section>
    </>
  );
}

export default EventInfo;
