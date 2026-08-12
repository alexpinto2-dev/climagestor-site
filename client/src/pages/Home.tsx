/* ClimaGestor — Editorial Operacional: assimetria funcional, azul-petróleo, coral queimado e dados como narrativa. */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Command,
  Grid2X2,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Target,
  UserRound,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

const logoSrc = "/manus-storage/climagestor-mark_62807627.png";
const heroTexture = "/manus-storage/climagestor-hero-texture_3570dbd6.png";
const workflowCollage = "/manus-storage/climagestor-workflow-collage_9ad765b8.png";
const footerPattern = "/manus-storage/climagestor-footer-pattern_4859a859.png";

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Recursos", href: "#recursos" },
  { label: "Para quem é", href: "#para-quem-e" },
];

const pipelines = [
  { name: "Novos contatos", count: "18", color: "terracotta" },
  { name: "Em conversa", count: "07", color: "teal" },
  { name: "Proposta enviada", count: "04", color: "gold" },
];

const faqs = [
  {
    question: "O ClimaGestor serve para times pequenos?",
    answer:
      "Sim. A plataforma foi desenhada para equipes que precisam de visibilidade e rotina comercial sem criar um projeto de implementação pesado.",
  },
  {
    question: "Preciso abandonar minhas planilhas imediatamente?",
    answer:
      "Não. O primeiro passo é organizar o que já acontece, centralizar o contexto e dar ao time um próximo passo claro. A mudança acontece por camadas.",
  },
  {
    question: "Consigo acompanhar o time sem microgerenciar?",
    answer:
      "Sim. Os sinais importantes ficam visíveis no painel: prioridades, próximas atividades e saúde do pipeline, sem transformar a rotina em cobrança constante.",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-lockup ${light ? "brand-lockup--light" : ""}`}>
      <img src={logoSrc} alt="" className="brand-mark" />
      <span className="brand-name">
        Clima<span>Gestor</span>
      </span>
    </span>
  );
}

function DashboardPreview() {
  return (
    <div className="dashboard-shell" aria-label="Prévia do painel do ClimaGestor">
      <div className="dashboard-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="window-title">climagestor / visão geral</span>
        <div className="window-actions">
          <Search size={14} />
          <Bell size={14} />
          <span className="avatar avatar--tiny">LM</span>
        </div>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-rail">
          <div className="rail-logo">
            <img src={logoSrc} alt="" />
          </div>
          <div className="rail-menu">
            <span className="rail-item rail-item--active"><Grid2X2 size={15} /></span>
            <span className="rail-item"><UsersRound size={15} /></span>
            <span className="rail-item"><Target size={15} /></span>
            <span className="rail-item"><BarChart3 size={15} /></span>
          </div>
          <span className="rail-item rail-item--bottom"><Settings2 size={15} /></span>
        </aside>
        <div className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <p className="dashboard-kicker">terça, 18 de junho</p>
              <h3>Bom dia, Laura<span className="coral-dot">.</span></h3>
            </div>
            <button className="dashboard-add" type="button"><Plus size={14} /> Novo contato</button>
          </div>
          <div className="signal-row">
            <div className="signal-card signal-card--wide">
              <div className="signal-label"><span className="signal-icon signal-icon--coral"><Zap size={13} /></span> Sinal do dia</div>
              <div className="signal-value">12 <small>tarefas para hoje</small></div>
              <div className="signal-foot"><span className="signal-positive"><ArrowUpRight size={12} /> 3 desde ontem</span><span>ver agenda</span></div>
            </div>
            <div className="signal-card">
              <div className="signal-label"><span className="signal-icon signal-icon--teal"><Target size={13} /></span> Pipeline</div>
              <div className="signal-value">R$ 48<span className="signal-suffix">k</span></div>
              <div className="mini-bars"><i style={{ height: "35%" }} /><i style={{ height: "62%" }} /><i style={{ height: "48%" }} /><i style={{ height: "78%" }} /><i style={{ height: "92%" }} /></div>
            </div>
          </div>
          <div className="pipeline-card">
            <div className="pipeline-head"><div><p className="dashboard-kicker">ritmo comercial</p><h4>O que merece atenção</h4></div><MoreHorizontal size={16} /></div>
            <div className="pipeline-grid">
              {pipelines.map((pipeline) => (
                <div className="pipeline-column" key={pipeline.name}>
                  <div className="pipeline-column-head"><span className={`pipeline-dot pipeline-dot--${pipeline.color}`} />{pipeline.name}<b>{pipeline.count}</b></div>
                  <div className="pipeline-ticket"><span className="ticket-avatar ticket-avatar--blue">AR</span><div><b>Arco Contábil</b><small>Retomar amanhã</small></div><ChevronRight size={13} /></div>
                  <div className="pipeline-ticket"><span className="ticket-avatar ticket-avatar--coral">NV</span><div><b>Nuvem Verde</b><small>Enviar proposta</small></div><ChevronRight size={13} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard-footer-note"><span className="live-pulse" /> Dados atualizados agora <span>·</span> time conectado</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" onClick={closeMenu} aria-label="ClimaGestor, voltar ao topo"><BrandMark light={!scrolled} /></a>
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Navegação principal">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
            <a href="#faq" onClick={closeMenu}>Dúvidas</a>
            <a className="mobile-nav-cta" href="#comece-agora" onClick={closeMenu}>Conhecer o ClimaGestor <ArrowUpRight size={15} /></a>
          </nav>
          <div className="nav-actions">
            <a className="nav-login" href="#comece-agora">Entrar</a>
            <a className="button button--nav" href="#comece-agora">Conhecer o ClimaGestor <ArrowUpRight size={15} /></a>
          </div>
          <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="top" className="hero-section" style={{ backgroundImage: `linear-gradient(110deg, rgba(18,59,67,.98) 0%, rgba(18,59,67,.91) 48%, rgba(18,59,67,.58) 100%), url(${heroTexture})` }}>
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow eyebrow--light"><span className="eyebrow-marker" /> CRM para times que vendem</div>
              <h1>Seu time não precisa correr mais. <em>Precisa enxergar melhor.</em></h1>
              <p className="hero-lead">O ClimaGestor organiza contatos, próximos passos e o ritmo do seu pipeline em um só lugar — para o comercial voltar a ter contexto, não só cobrança.</p>
              <div className="hero-actions">
                <a className="button button--coral" href="#comece-agora">Abra seu próximo ciclo <ArrowUpRight size={17} /></a>
                <a className="text-link text-link--light" href="#como-funciona">Ver como funciona <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-reassurance"><span className="reassurance-icon"><Check size={12} /></span> Sem implementação pesada <span className="reassurance-separator">·</span> Feito para a rotina real</div>
            </div>
            <div className="hero-product"><DashboardPreview /><div className="product-caption"><span className="caption-index">01</span><span>Uma visão que ajuda o time a decidir o próximo passo.</span><span className="caption-line" /></div></div>
          </div>
          <div className="hero-bottom-line"><span>ClimaGestor / visão comercial</span><span>Role para explorar <ArrowDownRight size={15} /></span></div>
        </section>

        <section className="signal-band" aria-label="Posicionamento do produto">
          <div className="signal-band-inner"><p>Para negócios que querem vender</p><div className="signal-words"><span>com consistência.</span><span>com contexto.</span><span>com calma.</span></div><span className="signal-band-mark">↘</span></div>
        </section>

        <section id="como-funciona" className="story-section section-paper">
          <div className="section-index"><span>02</span><i /></div>
          <div className="story-layout">
            <div className="story-intro"><div className="eyebrow"><span className="eyebrow-marker" /> Como funciona</div><h2>Menos clima de urgência. <em>Mais cadência.</em></h2><p>Quando cada pessoa sabe o que precisa acontecer agora, o time para de recomeçar conversas e começa a construir continuidade.</p><a className="text-link" href="#recursos">Conhecer os recursos <ArrowUpRight size={16} /></a></div>
            <div className="story-visual"><div className="visual-note visual-note--top"><span>01</span><b>Contexto em movimento</b></div><img src={workflowCollage} alt="Colagem editorial representando contatos, etapas e próximos passos conectados" /><div className="visual-note visual-note--bottom"><span>+</span><b>Próximo passo sempre à vista</b></div></div>
          </div>
          <div className="principle-grid" id="para-quem-e">
            <article className="principle"><span className="principle-number">01</span><div><h3>Veja o todo.</h3><p>Pipeline, contatos e atividades contam a mesma história — sem abas perdidas.</p></div></article>
            <article className="principle"><span className="principle-number">02</span><div><h3>Escolha o agora.</h3><p>Prioridades claras para o time agir antes que uma boa conversa esfrie.</p></div></article>
            <article className="principle"><span className="principle-number">03</span><div><h3>Aprenda o ritmo.</h3><p>Uma operação que mostra padrões para você ajustar a rota com leveza.</p></div></article>
          </div>
        </section>

        <section id="recursos" className="feature-section">
          <div className="feature-header"><div><div className="eyebrow"><span className="eyebrow-marker" /> O que muda na rotina</div><h2>Um CRM que respeita o <em>jeito de trabalhar</em> do seu time.</h2></div><p>Ferramentas essenciais, organizadas para que a operação fique mais visível — e a conversa, mais humana.</p></div>
          <div className="feature-list">
            <article className="feature-row"><div className="feature-row-index">A / 01</div><div className="feature-row-icon"><UsersRound size={24} /></div><div className="feature-row-copy"><h3>Relacionamentos com memória</h3><p>Registre o contexto de cada conversa, distribua responsabilidades e deixe o histórico trabalhar a favor do próximo contato.</p></div><div className="feature-row-arrow"><ArrowUpRight size={21} /></div></article>
            <article className="feature-row feature-row--accent"><div className="feature-row-index">A / 02</div><div className="feature-row-icon"><Target size={24} /></div><div className="feature-row-copy"><h3>Pipeline que aponta o caminho</h3><p>Veja onde cada oportunidade está, quais etapas pedem atenção e o que pode avançar sem reunião extra.</p></div><div className="feature-row-arrow"><ArrowUpRight size={21} /></div></article>
            <article className="feature-row"><div className="feature-row-index">A / 03</div><div className="feature-row-icon"><Command size={24} /></div><div className="feature-row-copy"><h3>Rotinas que se organizam</h3><p>Atividades, lembretes e automações simples para que o time não dependa da memória de uma única pessoa.</p></div><div className="feature-row-arrow"><ArrowUpRight size={21} /></div></article>
          </div>
        </section>

        <section className="operating-section">
          <div className="operating-inner"><div className="operating-copy"><div className="eyebrow eyebrow--light"><span className="eyebrow-marker" /> Uma operação mais leve</div><h2>O painel não manda no time. <em>Ele dá chão.</em></h2><p>Os sinais aparecem na hora certa: uma proposta sem retorno, um contato que pede cuidado, uma tarefa que pode destravar o dia.</p><div className="operating-checks"><span><Check size={13} /> Visão por etapa</span><span><Check size={13} /> Atividades compartilhadas</span><span><Check size={13} /> Alertas que fazem sentido</span></div><a className="button button--outline-light" href="#comece-agora">Ver o ClimaGestor em ação <ArrowUpRight size={16} /></a></div><div className="operating-board"><div className="board-header"><span><span className="live-pulse live-pulse--dark" /> rotina da semana</span><span>18 — 22 jun <ChevronDown size={14} /></span></div><div className="board-line board-line--active"><div className="board-day"><small>SEG</small><b>17</b></div><div className="board-event board-event--coral"><span className="event-time">09:30</span><div><b>Retomar conversa com Arco</b><small>contato prioritário · 15 min</small></div><ArrowUpRight size={14} /></div></div><div className="board-line"><div className="board-day"><small>TER</small><b>18</b></div><div className="board-event"><span className="event-time">11:00</span><div><b>Revisar propostas abertas</b><small>3 oportunidades aguardando próximo passo</small></div><ArrowUpRight size={14} /></div></div><div className="board-line"><div className="board-day"><small>QUA</small><b>19</b></div><div className="board-event"><span className="event-time">14:20</span><div><b>Alinhar prioridades do time</b><small>ritual comercial · 30 min</small></div><ArrowUpRight size={14} /></div></div><div className="board-line board-line--muted"><div className="board-day"><small>QUI</small><b>20</b></div><div className="board-empty">Um espaço para o próximo movimento.</div></div></div></div>
        </section>

        <section id="faq" className="faq-section section-paper"><div className="section-index"><span>03</span><i /></div><div className="faq-layout"><div className="faq-intro"><div className="eyebrow"><span className="eyebrow-marker" /> Antes de começar</div><h2>As perguntas que costumam aparecer <em>antes do primeiro passo.</em></h2><p>Se a sua dúvida não estiver aqui, a conversa continua aberta.</p><a className="text-link" href="mailto:oi@climagestor.com.br">Falar com o time <ArrowUpRight size={16} /></a></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={faq.question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={17} /></button>{openFaq === index && <p>{faq.answer}</p>}</div>)}</div></div></section>

        <section id="comece-agora" className="cta-section"><div className="cta-orbit cta-orbit--one" /><div className="cta-orbit cta-orbit--two" /><div className="cta-inner"><div className="eyebrow eyebrow--light"><span className="eyebrow-marker" /> O próximo passo pode ser simples</div><h2>Seu comercial já tem um ritmo. <em>Vamos enxergar juntos?</em></h2><p>Conheça uma forma mais clara de cuidar das oportunidades que movem o seu negócio.</p><a className="button button--coral button--large" href="mailto:oi@climagestor.com.br?subject=Quero conhecer o ClimaGestor">Quero conhecer o ClimaGestor <ArrowUpRight size={18} /></a><span className="cta-footnote">Resposta humana, sem apresentação automática.</span></div></section>
      </main>

      <footer className="site-footer" style={{ backgroundImage: `linear-gradient(rgba(10, 39, 44, .96), rgba(10, 39, 44, .96)), url(${footerPattern})` }}><div className="footer-main"><div className="footer-brand"><BrandMark light /><p>CRM para times que querem vender com mais contexto e menos correria.</p></div><div className="footer-links"><div><span className="footer-label">Explorar</span><a href="#como-funciona">Como funciona</a><a href="#recursos">Recursos</a><a href="#faq">Dúvidas</a></div><div><span className="footer-label">Conversa</span><a href="mailto:oi@climagestor.com.br">oi@climagestor.com.br</a><a href="#comece-agora">Começar agora <ArrowUpRight size={13} /></a></div></div></div><div className="footer-bottom"><span>© 2026 ClimaGestor</span><span>Feito para a rotina real <span className="coral-dot">.</span></span><span className="footer-mark">CG / 01</span></div></footer>
    </div>
  );
}
