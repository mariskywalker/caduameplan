import { CaduHeroLogoDynamic } from "./components/CaduHeroLogoDynamic";
import { ScrollEffects } from "./components/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollEffects />

      <nav>
        <a href="https://cadu.health" className="nav-brand">
          <span className="nav-wordmark">CADU</span>
          <span className="nav-slash">/</span>
          <span className="nav-context">Bradesco Saúde</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#problema">O problema</a>
          </li>
          <li>
            <a href="#solucao">Camada CADU</a>
          </li>
          <li>
            <a href="#longitudinal">Longitudinalidade</a>
          </li>
          <li>
            <a href="#pts">PTS e coordenação</a>
          </li>
          <li>
            <a href="#governanca">Governança</a>
          </li>
          <li>
            <a href="#impactos">Impactos</a>
          </li>
          <li>
            <a href="#origem">Origem</a>
          </li>
          <li>
            <a href="#piloto">Piloto</a>
          </li>
        </ul>

        <a href="#proximo" className="nav-cta">
          Solicitar conversa técnica
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </nav>

      <section id="hero">
        <div className="blobs">
          <div className="blob hero-blob-orange" />
          <div className="blob hero-blob-pink" />
          <div className="blob hero-blob-blue" />
        </div>

        <div className="wrap">
          <div className="hero-brand-stage" aria-hidden="true">
            <div className="hero-brand-lockup-visual">
              <CaduHeroLogoDynamic />
              <p className="hero-brand-para enter-2">para</p>
              <div className="hero-brand-partners enter-3" aria-hidden="true">
                <div
                  style={{
                    fontSize: "clamp(2.1rem, 5.2vw, 4.1rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.045em",
                    color: "rgba(14,14,12,0.45)",
                    lineHeight: 1,
                  }}
                >
                  Bradesco Saúde
                </div>
              </div>
            </div>
          </div>

          <div className="hero-scrollspace" data-hero-scrollspace />
        </div>
      </section>

      <section id="hero-content" className="hero-content">
        <div className="wrap">
          <div className="hero-main">
            <div className="hero-left">
              <div className="hero-inline-brand" aria-hidden="true">
                CADU
              </div>

              <div className="pill-tag reveal">
                <span className="pill-dot" />
                CADU × Bradesco Saúde
              </div>

              <h1 className="hero-headline reveal d1">
                O cuidado existe.
                <br />
                O desafio é coordenar.
              </h1>

              <p className="hero-body reveal d2" style={{ marginTop: "1rem", maxWidth: "46rem" }}>
                O CADU funciona como uma infraestrutura longitudinal para jornadas complexas de neurodesenvolvimento,
                organizando registros, continuidade e coordenação multiprofissional.
              </p>

              <div className="hero-btns reveal d3" style={{ flexWrap: "wrap", rowGap: "8px" }}>
                <a
                  href="mailto:contato@cadu.health?subject=Conversa%20t%C3%A9cnica%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
                  className="btn-red"
                >
                  Solicitar conversa técnica
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a
                  href="mailto:contato@cadu.health?subject=Material%20institucional%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
                  className="btn-ghost"
                >
                  Receber material institucional
                </a>
              </div>

              <p
                className="reveal d3"
                style={{
                  marginTop: "1.25rem",
                  maxWidth: "44rem",
                  fontSize: "0.8125rem",
                  lineHeight: 1.55,
                  color: "var(--text-2)",
                }}
              >
                O CADU nasceu da operação real de uma clínica multidisciplinar de neurodesenvolvimento, com dados estruturados
                desde 2023.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {[
            "Infraestrutura longitudinal para coordenação do cuidado",
            "Camada operacional complementar ao ecossistema",
            "Rastreabilidade, permissões e governança",
            "Coordenação multiprofissional e continuidade assistencial",
            "Pilotos controlados e mensuráveis",
            "Infraestrutura longitudinal para coordenação do cuidado",
            "Camada operacional complementar ao ecossistema",
            "Rastreabilidade, permissões e governança",
            "Coordenação multiprofissional e continuidade assistencial",
            "Pilotos controlados e mensuráveis",
          ].map((t, i) => (
            <div key={`${i}-${t}`} className="ticker-item">
              <span className="ticker-dot" aria-hidden="true" />
              {t}
            </div>
          ))}
        </div>
      </div>

      <section id="problema">
        <div className="blobs">
          <div className="blob problema-blob" />
        </div>

        <div className="wrap">
          <div className="problema-grid">
            <div className="reveal">
              <p className="eyebrow">O problema estrutural</p>
              <h2 className="section-headline">
                A fragmentação do cuidado
                <br />
                gera perda de continuidade.
              </h2>
              <p className="section-body">
                Múltiplos profissionais, escola, família e rede credenciada produzem registros isolados. Sem uma visão
                longitudinal, coordenação e acompanhamento viram esforço manual.
              </p>
              <p className="section-body problema-structural">
                O problema é <span className="problema-structural-accent">estrutural.</span>
                <br />
                Não é falta de cuidado. É falta de conexão entre os pontos.
              </p>
              <ul className="urgencia-list" style={{ marginTop: "1rem" }}>
                <li>Retrabalho e repetição de história entre profissionais</li>
                <li>Baixa visibilidade assistencial ao longo do tempo</li>
                <li>Dificuldade de coordenação entre clínica, escola e família</li>
                <li>Decisões sem contexto completo do percurso</li>
                <li>Histórico que se perde a cada transição</li>
              </ul>
            </div>

            <div className="issue-cards reveal d2">
              <div className="issue-card">
                <div className="issue-icon orange">🧩</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Registros isolados</div>
                  <div className="issue-desc">Cada ator guarda um pedaço. Não existe uma linha do tempo comum.</div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon pink">📋</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Risco assistencial</div>
                  <div className="issue-desc">Sem continuidade, adesão e comunicação pioram, e a previsibilidade cai.</div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon blue">⏱️</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Sem memória longitudinal</div>
                  <div className="issue-desc">A evolução não se acumula. O contexto recomeça em cada troca.</div>
                </div>
                <div className="issue-badge">Urgente</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon red">🏛️</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Governança difícil</div>
                  <div className="issue-desc">Permissões e rastreabilidade viram negociação caso a caso.</div>
                </div>
                <div className="issue-badge">Urgente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucao">
        <div className="wrap">
          <div className="solucao-intro reveal">
            <p className="solucao-lead">Uma camada de coordenação para jornadas complexas.</p>
            <p className="section-body solucao-vacuo">
              O CADU não substitui prontuário, não substitui operação clínica e não substitui a operadora. Ele organiza
              continuidade, integra atores autorizados e dá visibilidade operacional sobre a jornada.
            </p>
            <p className="eyebrow">Onde o CADU entra</p>
            <h2 className="section-headline">Camada operacional complementar ao ecossistema.</h2>
            <p className="section-body">
              Centraliza histórico longitudinal, melhora rastreabilidade e oferece coordenação sem exigir que clínicas e redes
              abandonem seus sistemas.
            </p>
          </div>

          <div className="arch-panel reveal d1" aria-label="Fluxo de coordenação">
            <div className="arch-chain">
              <span className="arch-node">Família</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Escola</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Clínica</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Supervisão</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Operadora</span>
            </div>
            <div className="arch-hub">
              <div className="arch-hub-title">CADU</div>
              <p className="arch-hub-desc">Camada transversal de dados, coordenação e continuidade longitudinal</p>
            </div>
          </div>
        </div>
      </section>

      <section id="longitudinal" className="section-valor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "48rem" }}>
            <p className="eyebrow">Longitudinalidade</p>
            <h2 className="section-headline">O diferencial não é registro. É memória longitudinal.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Evolução acumulada, histórico persistente e continuidade entre profissionais. O cuidado deixa de recomeçar do
              zero a cada transição.
            </p>
            <p className="section-body" style={{ marginTop: "1.25rem", maxWidth: "none", fontWeight: 800, color: "var(--black)" }}>
              O histórico acompanha a criança.
            </p>
          </div>
        </div>
      </section>

      <section id="pts" className="section-setor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">PTS e coordenação multiprofissional</p>
            <h2 className="section-headline">Coordenação depende de visibilidade e comunicação estruturada.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              O CADU suporta a construção de PTS e integração com PEI, conectando o que é relevante entre clínica, escola e
              família, com registro longitudinal e supervisão com contexto.
            </p>
          </div>
        </div>
      </section>

      <section id="governanca" className="section-gov">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Governança e LGPD</p>
            <h2 className="section-headline">Dados sensíveis exigem governança rigorosa.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Permissões por perfil, rastreabilidade, controle de acesso e segregação de responsabilidades. O CADU foi desenhado
              para operar com consentimento e regras claras de compartilhamento.
            </p>
          </div>
        </div>
      </section>

      <section id="impactos" className="section-valor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Potenciais impactos operacionais</p>
            <h2 className="section-headline">Potenciais ganhos operacionais.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Sem prometer redução de custo sem dados, o CADU permite estruturar evidência e medir impactos no piloto.
            </p>
            <ul className="urgencia-list" style={{ marginTop: "1.25rem" }}>
              <li>Maior visibilidade assistencial</li>
              <li>Consolidação longitudinal por criança</li>
              <li>Redução de retrabalho manual</li>
              <li>Melhor coordenação multiprofissional</li>
              <li>Continuidade do histórico em transições</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="origem" className="section-setor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Origem</p>
            <h2 className="section-headline">Operação real antes de produto.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              O CADU nasceu da operação real de uma clínica multidisciplinar de neurodesenvolvimento, a partir da necessidade
              prática de organizar continuidade e coordenação do cuidado.
            </p>
          </div>
        </div>
      </section>

      <section id="piloto" className="section-valor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Modelo de piloto</p>
            <h2 className="section-headline">Pilotos controlados e mensuráveis.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Escopo fechado, equipe definida, métricas claras e prazo delimitado. O objetivo é gerar evidência e reduzir risco.
            </p>
          </div>
        </div>
      </section>

      <section id="proximo" className="section-proximo">
        <div className="blobs" aria-hidden="true">
          <div className="blob cta-blob" />
        </div>

        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="cta-eyebrow reveal">CADU × Bradesco Saúde</p>

          <h2 className="cta-headline reveal d1">Coordenação também é cuidado.</h2>

          <p className="cta-sub reveal d2">
            Infraestrutura longitudinal para coordenação de jornadas complexas em neurodesenvolvimento, com governança e execução cuidadosa.
          </p>

          <div className="cta-btns reveal d3" style={{ flexWrap: "wrap", justifyContent: "center", rowGap: "10px" }}>
            <a
              href="mailto:contato@cadu.health?subject=Conversa%20t%C3%A9cnica%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
              className="btn-white"
            >
              Solicitar conversa técnica
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="mailto:contato@cadu.health?subject=Material%20institucional%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
              className="btn-outline"
            >
              Receber material
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">
          CADU - Infraestrutura longitudinal para coordenação do cuidado em neurodesenvolvimento · Material para Bradesco Saúde
        </div>
        <div className="footer-right">Saúde Suplementar · Governança · Longitudinalidade · Piloto</div>
      </footer>
    </>
  );
}

