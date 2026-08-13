/* ClimaGestor — Referência PDF: SaaS institucional para climatização, com foco em clientes, ativos, PMOC, OS, equipe e WhatsApp. */
import { type FormEvent, useEffect, useState } from "react";
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

const heroImage = "/assets/climagestor-ac-hero.webp";
const equipmentImage = "/assets/climagestor-equipment-detail.webp";
const dashboardImage = "/assets/climagestor-dashboard-real.png";
const ordersImage = "/assets/climagestor-orders-real.png";
const userLogoLightSrc = "/assets/climagestor-logo-light.webp";
const userLogoHeaderSrc = "/assets/climagestor-logo-header-compact.webp";
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
  return <span className="brand-lockup"><img src={userLogoHeaderSrc} alt="ClimaGestor" /></span>;
}

function SectionTag({ children }: { children: string }) {
  return <span className="section-tag">{children}</span>;
}

function ProductMockup() {
  return (
    <div className="product-mockup" aria-label="Prévia do painel ClimaGestor">
      <div className="mockup-top"><span className="mockup-title"><span className="mockup-logo"><Gauge size={12} /></span> Painel da operação</span><span className="mockup-date">Hoje, 18 Jun <BellRing size={13} /></span></div>
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
  const [lead, setLead] = useState({ name: "", whatsapp: "", intent: "" });
  const [leadSent, setLeadSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".scroll-reveal, .scroll-reveal-stagger");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Olá! Quero uma demonstração do ClimaGestor.%0A%0ANome: ${encodeURIComponent(lead.name)}%0AWhatsApp: ${encodeURIComponent(lead.whatsapp)}%0AInteresse: ${encodeURIComponent(lead.intent)}`;
    setLeadSent(true);
    window.open(`https://wa.me/5579988028287?text=${message}`, "_blank", "noopener,noreferrer");
  };

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
            <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> Feito para climatização em Aracaju</div><h1>A operação da sua empresa, <span>finalmente sob controle.</span></h1><p>Do primeiro chamado à preventiva: clientes, aparelhos, técnicos e ordens de serviço em um só lugar — para você atender melhor e crescer com previsibilidade.</p><div className="hero-location"><Building2 size={15} /><span>Especialmente para empresas de Aracaju e região</span></div><div className="hero-actions"><a href={authHref} target="_blank" rel="noreferrer" className="button button--primary">Começar teste grátis <ArrowRight size={17} /></a><a href={whatsappHref} target="_blank" rel="noreferrer" className="button button--outline"><PhoneCall size={16} /> Falar com especialista</a></div><div className="hero-note"><CheckCircle2 size={15} /> Acesso rápido e demonstração com a sua operação</div></div>
            <div className="hero-image-wrap"><div className="hero-image"><img src={heroImage} alt="Aparelho split instalado em um ambiente comercial iluminado" fetchPriority="high" decoding="async" /></div><div className="hero-dashboard-card"><div className="dashboard-card-top"><span><i /> Painel ClimaGestor</span><span>Aracaju · operação conectada</span></div><img src={dashboardImage} alt="Painel real do ClimaGestor com visão geral da operação" fetchPriority="high" decoding="async" /><div className="dashboard-card-caption"><span>Clientes · BTUs · PMOC · preventivas</span><b>tudo conectado</b></div></div><div className="hero-image-label"><span>ClimaGestor / 01</span><span>Operação em um só lugar</span></div></div>
          </div>
          <div className="hero-scroll"><span>Uma gestão mais clara para quem está em campo</span><span className="hero-scroll-line" /></div>
        </section>

        <section className="intro-strip scroll-reveal"><div><span className="intro-number">01</span><p>Em Aracaju, quem atende no campo não pode depender de planilhas para fazer a operação acontecer. O ClimaGestor deixa cada chamado, técnico e equipamento no lugar certo.</p></div><div className="intro-accent"><Building2 size={22} /><span>Uma plataforma local, feita para o ritmo do serviço técnico.</span></div></section>

        <section id="problema" className="problem-section section-white scroll-reveal"><div className="container"><div className="section-heading section-heading--center"><SectionTag>O problema</SectionTag><h2>O caos que começa no WhatsApp <span>e termina no campo.</span></h2><p>Quando clientes, equipamentos, técnicos e ordens ficam espalhados, cada atendimento vira uma nova busca — e cada preventiva pode virar atraso.</p></div><div className="problem-grid scroll-reveal-stagger">{problems.map(({ icon: Icon, title, text }) => <article className="problem-card" key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section id="solucao" className="solution-section scroll-reveal"><div className="container"><div className="section-heading"><SectionTag>A solução</SectionTag><h2>Do chamado ao retorno: <span>uma central para a climatização.</span></h2><p>O ClimaGestor conecta escritório e equipe técnica em tempo real, dando contexto para cada OS e clareza para cada próximo passo.</p></div><div className="module-grid scroll-reveal-stagger">{modules.map(({ icon: Icon, title, text }) => <article className="module-card" key={title}><div className="module-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="workflow-ribbon scroll-reveal"><span className="workflow-label">Fluxo ClimaGestor</span><div><b>Chamado</b><ArrowRight size={15} /><b> Técnico</b><ArrowRight size={15} /><b> Ordem de serviço</b><ArrowRight size={15} /><b> Preventiva</b></div><span className="workflow-result">histórico pronto para o próximo atendimento</span></div></div></section>

        <section id="pmoc" className="pmoc-section scroll-reveal"><div className="container"><div className="section-heading section-heading--center"><SectionTag>Conformidade legal</SectionTag><h2>PMOC, preventivas e ordens <span>sem papelada perdida.</span></h2><p>O Plano de Manutenção, Operação e Controle é exigido para sistemas de climatização. Com o ClimaGestor, checklists e registros ficam prontos para a rotina da sua equipe.</p></div><div className="pmoc-grid scroll-reveal-stagger">{pmocCards.map(({ icon: Icon, title, text }) => <article className="pmoc-card" key={title}><div className="pmoc-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="assets-section section-white scroll-reveal"><div className="container"><div className="section-heading"><SectionTag>Gestão de ativos</SectionTag><h2>Controle real dos aparelhos <span>do cliente.</span></h2><p>Pare de perder a recorrência e o histórico dos equipamentos. Saiba exatamente o que cada cliente tem, onde está instalado e quando precisa de manutenção.</p></div><div className="assets-layout"><div className="asset-list"><div className="asset-list-head"><Wrench size={20} /><h3>O que você registra</h3></div><ul><li>Marca, modelo e capacidade em BTUs</li><li>Local de instalação de cada aparelho</li><li>Histórico completo de serviços realizados</li><li>Controle de preventiva e PMOC básico</li><li>Alertas de preventiva vencida ou próxima</li></ul></div><div className="asset-result"><div className="asset-result-copy"><h3>O resultado na prática</h3><p>Quando um cliente liga, você já sabe quais aparelhos ele tem, quando foi a última manutenção e o que precisa ser feito.</p><div className="result-callout"><Sparkles size={17} /><span>Com histórico organizado, você transforma atendimentos pontuais em contratos de manutenção recorrente.</span></div></div><img src={equipmentImage} alt="Equipamentos e checklist de manutenção organizados em uma bancada" loading="lazy" decoding="async" /></div></div></div></section>

        <section id="recursos" className="intelligence-section scroll-reveal"><div className="container"><div className="section-heading section-heading--center"><SectionTag>Inteligência e automação</SectionTag><h2>Veja o que acontece no campo <span>antes de virar atraso.</span></h2><p>O ClimaGestor transforma clientes, aparelhos, técnicos e ordens de serviço em uma visão prática para decidir rápido.</p></div><div className="intelligence-grid scroll-reveal-stagger"><article className="intelligence-card" key="dashboard"><div className="intelligence-image intelligence-image--dashboard"><img src={dashboardImage} alt="Screenshot real do painel do ClimaGestor com indicadores da operação" loading="lazy" decoding="async" /></div><div className="intelligence-copy"><BarChart3 size={20} /><div><h3>Dashboards e Relatórios</h3><p>Indicadores da equipe, faturamento e estoque para antecipar necessidades de peças e enxergar a saúde da operação.</p></div></div></article><article className="intelligence-card" key="orders"><div className="intelligence-image intelligence-image--orders"><img src={ordersImage} alt="Screenshot real da tela de ordens de serviço do ClimaGestor" loading="lazy" decoding="async" /></div><div className="intelligence-copy"><ClipboardList size={20} /><div><h3>Ordens de serviço sob controle</h3><p>Agendamentos, técnicos, status, valores e próximos atendimentos visíveis em uma tela feita para quem está em campo.</p></div></div></article></div></div></section>

        <section className="steps-section section-white scroll-reveal"><div className="container"><div className="section-heading"><SectionTag>Próximos passos</SectionTag><h2>Organize o campo. <span>Ganhe previsibilidade.</span></h2><p>Uma empresa de climatização cresce melhor quando cada atendimento tem histórico, cada técnico tem contexto e cada preventiva tem hora certa.</p></div><div className="steps-grid scroll-reveal-stagger">{nextSteps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

        <section id="contato" className="contact-section scroll-reveal"><div className="container"><div className="section-heading"><SectionTag>Comece agora em Aracaju</SectionTag><h2>Vamos testar <span>juntos?</span></h2><p>Estamos selecionando empresas de Aracaju e região para usar e ajustar o ClimaGestor na prática. Uma oportunidade de conhecer o sistema sem compromisso e sem custo inicial.</p></div><div className="contact-cards scroll-reveal-stagger"><article><div className="contact-icon"><Sparkles size={21} /></div><h3>Acesso Gratuito</h3><p>Teste com os dados da sua operação e veja o ganho de clareza antes de decidir.</p></article><article><div className="contact-icon"><Wrench size={21} /></div><h3>Ajustes Personalizados</h3><p>A gente adapta a rotina do sistema ao jeito que sua equipe realmente trabalha.</p></article><article><div className="contact-icon"><ShieldCheck size={21} /></div><h3>Sem Custo Inicial</h3><p>Comece sem risco e valide o valor do ClimaGestor no dia a dia da sua empresa.</p></article></div><div className="lead-capture scroll-reveal"><div className="lead-capture-copy"><span className="lead-capture-kicker">Agende uma conversa</span><h3>Conte como sua operação funciona.</h3><p>Preencha seus dados. O time ClimaGestor abre o WhatsApp com uma mensagem pronta para combinar a demonstração.</p><div className="lead-proof"><CheckCircle2 size={16} /><span>Resposta rápida, sem compromisso e com foco na rotina da sua equipe.</span></div></div><form className="lead-form" onSubmit={handleLeadSubmit} aria-describedby="lead-form-note"><div className="lead-field"><label htmlFor="lead-name">Seu nome</label><input id="lead-name" name="name" type="text" autoComplete="name" placeholder="Como podemos chamar você?" value={lead.name} onChange={(event) => setLead({ ...lead, name: event.target.value })} required /></div><div className="lead-field"><label htmlFor="lead-whatsapp">WhatsApp</label><input id="lead-whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(79) 99999-9999" value={lead.whatsapp} onChange={(event) => setLead({ ...lead, whatsapp: event.target.value })} required /></div><div className="lead-field"><label htmlFor="lead-intent">O que você busca?</label><select id="lead-intent" name="intent" value={lead.intent} onChange={(event) => setLead({ ...lead, intent: event.target.value })} required><option value="" disabled>Selecione uma opção</option><option>Quero uma demonstração</option><option>Quero organizar as ordens de serviço</option><option>Quero controlar PMOC e preventivas</option></select></div><button type="submit" className="button button--primary lead-submit">Quero demonstração <ArrowRight size={16} /></button><p id="lead-form-note" className="lead-form-note">Ao enviar, você será direcionado para o WhatsApp comercial do ClimaGestor.</p>{leadSent && <p className="lead-success" role="status"><CheckCircle2 size={15} /> Mensagem preparada. Se o WhatsApp não abrir, use o botão abaixo.</p>}</form></div><div className="contact-bottom scroll-reveal"><p>Quer ver sua operação organizada de verdade? Fale com um especialista e agende uma demonstração com seus próprios dados.</p><div className="contact-actions"><a href={whatsappHref} target="_blank" rel="noreferrer" className="button button--primary">Falar no WhatsApp <PhoneCall size={16} /></a><a href={authHref} target="_blank" rel="noreferrer" className="button button--outline">Testar Grátis <ArrowRight size={16} /></a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><div className="footer-logo-visual"><img src={userLogoLightSrc} alt="Logotipo ClimaGestor" loading="lazy" decoding="async" /></div><p>Gestão completa para empresas de ar-condicionado e refrigeração.</p></div><div className="footer-links"><a href="#solucao">Solução</a><a href="#recursos">Recursos</a><a href="#pmoc">PMOC</a><a href="#contato">Falar com o time</a></div><div className="footer-meta"><span>© 2026 ClimaGestor</span><span>Aracaju e região</span></div></div></footer>
    </div>
  );
}
