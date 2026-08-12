/* ClimaGestor — Referência PDF: SaaS institucional para climatização, com foco em clientes, ativos, PMOC, OS, equipe e WhatsApp. */
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  Bot,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Gauge,
  Menu,
  MessagesSquare,
  PackageSearch,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";

const logoSrc = "/manus-storage/climagestor-mark_62807627.png";
const heroImage = "/manus-storage/climagestor-ac-hero_d410b568.jpg";
const equipmentImage = "/manus-storage/climagestor-equipment-detail_73008491.jpg";
const dashboardImage = "/manus-storage/climagestor-dashboard-real_1199e417.png";
const ordersImage = "/manus-storage/climagestor-orders-real_f2cde02c.png";
const whatsappHref = "https://wa.me/5579988028287?text=Ol%C3%A1%21%20Quero%20conhecer%20o%20ClimaGestor.";
const authHref = "https://climagestor.lovable.app/auth";

const problems = [
  { icon: ClipboardList, title: "Planilhas e papéis perdidos", text: "Informações se perdem em campo, gerando retrabalho e erros constantes." },
  { icon: ShieldCheck, title: "PMOC sem controle digital", text: "Atender à legislação sem ferramentas adequadas é complexo e arriscado." },
  { icon: UserRound, title: "Clientes perdidos por falta de histórico", text: "Sem agendamento e controle, a recorrência vai embora sem aviso." },
  { icon: MessagesSquare, title: "Informações espalhadas no WhatsApp", text: "Chamados, detalhes e históricos ficam dispersos em conversas informais." },
  { icon: BellRing, title: "Preventivas esquecidas", text: "Sem alertas automáticos, fica difícil acompanhar o que cada técnico fez." },
  { icon: Wrench, title: "Retrabalho e perda de histórico", text: "A operação depende demais da memória e do WhatsApp." },
];

const modules = [
  { icon: UsersRound, title: "Cadastro de Clientes", text: "Perfil completo com histórico de atendimentos e equipamentos por cliente." },
  { icon: WindIcon, title: "Equipamentos por Cliente", text: "Registre marca, modelo, BTUs e localização de cada aparelho." },
  { icon: ClipboardList, title: "Ordens de Serviço", text: "Acompanhe tudo, do chamado ao fechamento, sem perder detalhes." },
  { icon: CalendarDays, title: "Manutenção Preventiva", text: "Controle e receba alertas para nunca perder uma preventiva." },
  { icon: BarChart3, title: "Dashboard e Relatórios", text: "Veja os indicadores do negócio e tome decisões com mais segurança." },
  { icon: MessagesSquare, title: "Conexão em Tempo Real", text: "Escritório e técnicos alinhados, do chamado à conclusão." },
];

const pmocCards = [
  { icon: ClipboardCheck, title: "Checklists Digitais", text: "Elimine o risco de erros e extravios de papelada. Tudo registrado e rastreável." },
  { icon: BadgeCheck, title: "Conformidade Total", text: "Registros precisos que garantem qualidade do atendimento às normas vigentes." },
  { icon: ShieldCheck, title: "Proteção Legal", text: "Evite multas e complicações com documentação completa e auditável." },
];

const nextSteps = [
  { number: "1", title: "Elimine gargalos operacionais", text: "Automatize processos manuais e libere sua equipe para o que realmente importa." },
  { number: "2", title: "Profissionalize cada atendimento", text: "Mostre ao cliente a diferença entre uma empresa organizada e uma amadora." },
  { number: "3", title: "Agende uma demonstração gratuita", text: "Veja o sistema funcionando com os dados reais da sua operação." },
];

function WindIcon({ size = 23 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 12h15a3 3 0 1 1-3 3" /><path d="M3 16h7a3 3 0 1 0-3 3" /></svg>;
}

function BrandMark() {
  return <span className="brand-lockup"><img src={logoSrc} alt="" /><span>Clima<span>Gestor</span></span></span>;
}

function SectionTag({ children }: { children: string }) {
  return <span className="section-tag">{children}</span>;
}

function ProductMockup() {
  return (
    <div className="product-mockup" aria-label="Prévia do painel ClimaGestor">
      <div className="mockup-top"><span className="mockup-title"><span className="mockup-logo"><Gauge size={12} /></span> Visão geral</span><span className="mockup-date">Hoje, 18 Jun <BellRing size={13} /></span></div>
      <div className="mockup-main">
        <div className="mockup-sidebar"><span className="mockup-sidebar-active"><Gauge size={15} /></span><span><UsersRound size={15} /></span><span><ClipboardList size={15} /></span><span><CalendarDays size={15} /></span><span><BarChart3 size={15} /></span></div>
        <div className="mockup-content">
          <div className="mockup-heading"><div><small>RESUMO DA OPERAÇÃO</small><h3>Bom dia, equipe.</h3></div><button type="button"><span>+</span> Nova OS</button></div>
          <div className="mockup-metrics"><div><small>ORDENS EM ABERTO</small><strong>18</strong><em><ArrowRight size={11} /> ver ordens</em></div><div><small>PREVENTIVAS PRÓXIMAS</small><strong>07</strong><em className="metric-green"><Check size={11} /> em dia</em></div><div><small>CLIENTES ATIVOS</small><strong>124</strong><em><ArrowRight size={11} /> ver clientes</em></div></div>
          <div className="mockup-table"><div className="mockup-table-head"><span>ATIVIDADES RECENTES</span><span>ver tudo</span></div><div className="mockup-row"><span className="status-dot status-dot--blue" /><div><b>Manutenção preventiva</b><small>Clínica Horizonte · Técnico: João</small></div><strong>Hoje, 14:30</strong></div><div className="mockup-row"><span className="status-dot status-dot--green" /><div><b>Ordem de serviço #1042</b><small>Residencial Atalaia · Em andamento</small></div><strong>Amanhã</strong></div><div className="mockup-row"><span className="status-dot status-dot--orange" /><div><b>Preventiva vencida</b><small>Comercial Jardins · Agendar retorno</small></div><strong>Prioridade</strong></div></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" onClick={closeMenu} aria-label="ClimaGestor, voltar ao início"><BrandMark /></a>
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Navegação principal">
            <a href="#solucao" onClick={closeMenu}>Solução</a>
            <a href="#recursos" onClick={closeMenu}>Recursos</a>
            <a href="#pmoc" onClick={closeMenu}>PMOC</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </nav>
          <div className="nav-actions"><a href={whatsappHref} target="_blank" rel="noreferrer" className="nav-whatsapp"><PhoneCall size={14} /> Falar no WhatsApp</a><a href={authHref} target="_blank" rel="noreferrer" className="button button--primary button--small">Testar Grátis <ArrowRight size={15} /></a></div>
          <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-inner">
            <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> Gestão para climatização</div><h1>Organize clientes, equipamentos e ordens de serviço <span>em um só lugar.</span></h1><p>Feito para empresas e técnicos de ar-condicionado e refrigeração de Aracaju e região. Centralize toda a sua operação e saia do caos das planilhas manuais.</p><div className="hero-actions"><a href={authHref} target="_blank" rel="noreferrer" className="button button--primary">Testar Grátis <ArrowRight size={17} /></a><a href={whatsappHref} target="_blank" rel="noreferrer" className="button button--outline"><PhoneCall size={16} /> Falar no WhatsApp</a></div><div className="hero-note"><CheckCircle2 size={15} /> Comece a testar com os dados reais da sua operação</div></div>
            <div className="hero-image-wrap"><div className="hero-image"><img src={heroImage} alt="Aparelho split instalado em um ambiente comercial iluminado" /></div><div className="hero-image-label"><span>ClimaGestor / 01</span><span>Operação em um só lugar</span></div></div>
          </div>
          <div className="hero-scroll"><span>Uma gestão mais clara para quem está em campo</span><span className="hero-scroll-line" /></div>
        </section>

        <section className="intro-strip"><div><span className="intro-number">01</span><p>Se a sua empresa ainda depende de planilhas, papéis e mensagens soltas, o problema não é falta de esforço. É falta de uma operação conectada.</p></div><div className="intro-accent"><Building2 size={22} /><span>Feito para a rotina real de empresas de ar-condicionado.</span></div></section>

        <section id="problema" className="problem-section section-white"><div className="container"><div className="section-heading section-heading--center"><SectionTag>O problema</SectionTag><h2>O desafio do setor: <span>o caos invisível.</span></h2><p>O dia a dia da maioria das empresas de climatização é marcado por processos manuais que consomem tempo e geram retrabalho.</p></div><div className="problem-grid">{problems.map(({ icon: Icon, title, text }) => <article className="problem-card" key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section id="solucao" className="solution-section"><div className="container"><div className="section-heading"><SectionTag>A solução</SectionTag><h2>Centralize sua operação <span>em um único lugar.</span></h2><p>O ClimaGestor conecta escritório e equipe técnica em tempo real, eliminando a desorganização e profissionalizando cada atendimento.</p></div><div className="module-grid">{modules.map(({ icon: Icon, title, text }) => <article className="module-card" key={title}><div className="module-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section id="pmoc" className="pmoc-section"><div className="container"><div className="section-heading section-heading--center"><SectionTag>Conformidade legal</SectionTag><h2>Domine o PMOC com <span>agilidade digital.</span></h2><p>O Plano de Manutenção, Operação e Controle é exigido por lei para sistemas de climatização. Com o ClimaGestor, você cumpre as normas com segurança e sem burocracia.</p></div><div className="pmoc-grid">{pmocCards.map(({ icon: Icon, title, text }) => <article className="pmoc-card" key={title}><div className="pmoc-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="assets-section section-white"><div className="container"><div className="section-heading"><SectionTag>Gestão de ativos</SectionTag><h2>Controle real dos aparelhos <span>do cliente.</span></h2><p>Pare de perder a recorrência e o histórico dos equipamentos. Saiba exatamente o que cada cliente tem, onde está instalado e quando precisa de manutenção.</p></div><div className="assets-layout"><div className="asset-list"><div className="asset-list-head"><Wrench size={20} /><h3>O que você registra</h3></div><ul><li>Marca, modelo e capacidade em BTUs</li><li>Local de instalação de cada aparelho</li><li>Histórico completo de serviços realizados</li><li>Controle de preventiva e PMOC básico</li><li>Alertas de preventiva vencida ou próxima</li></ul></div><div className="asset-result"><div className="asset-result-copy"><h3>O resultado na prática</h3><p>Quando um cliente liga, você já sabe quais aparelhos ele tem, quando foi a última manutenção e o que precisa ser feito.</p><div className="result-callout"><Sparkles size={17} /><span>Com histórico organizado, você transforma atendimentos pontuais em contratos de manutenção recorrente.</span></div></div><img src={equipmentImage} alt="Equipamentos e checklist de manutenção organizados em uma bancada" /></div></div></div></section>

        <section id="recursos" className="intelligence-section"><div className="container"><div className="section-heading section-heading--center"><SectionTag>Inteligência e automação</SectionTag><h2>Visão estratégica para <span>decisões inteligentes.</span></h2><p>Além de organizar, o ClimaGestor entrega inteligência para você tomar decisões mais rápidas e seguras sobre o seu negócio.</p></div><div className="intelligence-grid"><article className="intelligence-card"><div className="intelligence-image intelligence-image--dashboard"><img src={dashboardImage} alt="Screenshot real do painel do ClimaGestor com indicadores da operação" /></div><div className="intelligence-copy"><BarChart3 size={20} /><div><h3>Dashboards e Relatórios</h3><p>Indicadores de desempenho da equipe, relatórios financeiros automáticos e gestão de estoque para antecipar necessidades de peças.</p></div></div></article><article className="intelligence-card"><div className="intelligence-image intelligence-image--orders"><img src={ordersImage} alt="Screenshot real da tela de ordens de serviço do ClimaGestor" /></div><div className="intelligence-copy"><ClipboardList size={20} /><div><h3>Ordens de serviço sob controle</h3><p>Agendamentos, técnicos, status, valores e próximos atendimentos visíveis em uma tela feita para a rotina do seu time.</p></div></div></article></div></div></section>

        <section className="steps-section section-white"><div className="container"><div className="section-heading"><SectionTag>Próximos passos</SectionTag><h2>O futuro da sua empresa <span>começa agora.</span></h2><p>Escalar um negócio de climatização exige mais do que esforço — exige tecnologia confiável e processos estruturados.</p></div><div className="steps-grid">{nextSteps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

        <section id="contato" className="contact-section"><div className="container"><div className="section-heading"><SectionTag>Comece agora</SectionTag><h2>Vamos testar <span>juntos?</span></h2><p>Estamos selecionando empresas de Aracaju e região para usar e ajustar o ClimaGestor na prática. Uma oportunidade de conhecer o sistema sem compromisso e sem custo inicial.</p></div><div className="contact-cards"><article><div className="contact-icon"><Sparkles size={21} /></div><h3>Acesso Gratuito</h3><p>Demonstração completa e testes com os dados reais da sua operação.</p></article><article><div className="contact-icon"><Wrench size={21} /></div><h3>Ajustes Personalizados</h3><p>O sistema é adaptado conforme a necessidade real do seu negócio.</p></article><article><div className="contact-icon"><ShieldCheck size={21} /></div><h3>Sem Custo Inicial</h3><p>Comece a usar sem investimento. Avalie os resultados antes de decidir.</p></article></div><div className="contact-bottom"><p>Quer conhecer o sistema com os dados da sua operação? Fale com a gente no WhatsApp e agende sua demonstração gratuita.</p><div className="contact-actions"><a href={whatsappHref} target="_blank" rel="noreferrer" className="button button--primary">Falar no WhatsApp <PhoneCall size={16} /></a><a href={authHref} target="_blank" rel="noreferrer" className="button button--outline">Testar Grátis <ArrowRight size={16} /></a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><BrandMark /><p>Gestão completa para empresas de ar-condicionado e refrigeração.</p></div><div className="footer-links"><a href="#solucao">Solução</a><a href="#recursos">Recursos</a><a href="#pmoc">PMOC</a><a href="#contato">Falar com o time</a></div><div className="footer-meta"><span>© 2026 ClimaGestor</span><span>Aracaju e região</span></div></div></footer>
    </div>
  );
}
