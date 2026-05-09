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
            <a href="#solucao">Como funciona</a>
          </li>
          <li>
            <a href="#longitudinal">O que enxergar</a>
          </li>
          <li>
            <a href="#pts">Origem</a>
          </li>
          <li>
            <a href="#governanca">Governança</a>
          </li>
          <li>
            <a href="#impactos">Painel</a>
          </li>
          <li>
            <a href="#origem">Open Health</a>
          </li>
          <li>
            <a href="#piloto">Próximos passos</a>
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
              <div className="hero-brand-partners enter-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- asset estático */}
                <img
                  src="/cadu-brand/bradesco-saude.png"
                  alt="Bradesco Saúde"
                  width={768}
                  height={400}
                  decoding="async"
                  className="hero-brand-bradesco-img"
                />
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
                Neurodesenvolvimento é um dos nichos com maior risco de fraude e desperdício.
              </h1>

              <p className="hero-body reveal d2" style={{ marginTop: "1rem", maxWidth: "46rem" }}>
                Fono, TO, psico, neuro, até 5 sessões por semana, durante anos. Um custo altíssimo pra operadora, e quase
                nenhuma visibilidade sobre o que realmente está acontecendo. O CADU muda isso.
              </p>

              <div className="hero-btns reveal d3" style={{ flexWrap: "wrap", rowGap: "8px" }}>
                <a
                  href="mailto:ola@cadu.health?subject=Conversa%20t%C3%A9cnica%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
                  className="btn-red"
                >
                  Agendar conversa técnica
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a
                  href="mailto:ola@cadu.health?subject=Material%20institucional%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
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
                Sessão fantasma · Faturamento inflado · Auditoria de evolução · GPS check-in · Open Health
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {[
            "Sessão fantasma",
            "Faturamento inflado",
            "Auditoria de evolução",
            "GPS check-in",
            "Open Health",
            "Sessão fantasma",
            "Faturamento inflado",
            "Auditoria de evolução",
            "GPS check-in",
            "Open Health",
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
              <p className="eyebrow">O problema</p>
              <h2 className="section-headline">
                Do lado da operadora, tudo que existe é o que foi faturado.
              </h2>
              <p className="section-body">
                Não há como saber se a sessão realmente aconteceu, se a criança estava presente, se o tratamento está
                funcionando. A operadora paga, mas não enxerga. Esse é o ambiente perfeito pra fraude crescer sem ser
                detectada.
              </p>
              <ul className="urgencia-list" style={{ marginTop: "1rem" }}>
                <li>Sessões faturadas sem evidência de presença</li>
                <li>Frequência incompatível com evolução clínica</li>
                <li>Tratamentos longos sem progresso documentado</li>
                <li>Auditoria manual tardia e incompleta</li>
                <li>Baixa visibilidade sobre rede credenciada</li>
              </ul>
            </div>

            <div className="issue-cards reveal d2">
              <div className="issue-card">
                <div className="issue-icon orange">👻</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Sessões fantasma</div>
                  <div className="issue-desc">
                    Sessões faturadas que nunca aconteceram, ou que aconteceram em local diferente do declarado.
                  </div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon pink">📈</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Faturamento inflado</div>
                  <div className="issue-desc">
                    Mais sessões do que o plano terapêutico justifica, sem evidência de evolução que sustente a frequência.
                  </div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon blue">⏱️</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Tratamentos sem progresso</div>
                  <div className="issue-desc">
                    Crianças em tratamento por anos sem evolução documentada. Sem dados, a operadora continua pagando.
                  </div>
                </div>
                <div className="issue-badge">Urgente</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon red">🔍</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Auditoria às cegas</div>
                  <div className="issue-desc">
                    O processo atual depende de documentação passiva e não detecta o que não é declarado.
                  </div>
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
            <p className="solucao-lead">Rastreabilidade ativa, não auditoria passiva.</p>
            <p className="section-body solucao-vacuo">
              O CADU foi construído de dentro de uma clínica real. Sabemos como o sistema opera e onde ele é explorado.
            </p>
            <p className="eyebrow">Como o CADU ataca isso</p>
            <h2 className="section-headline">Rastreabilidade ativa, não auditoria passiva.</h2>
            <p className="section-body">
              Check-in por GPS, cruzamento entre presença e faturamento, e dados de evolução estruturados por criança.
            </p>
          </div>

          <div className="arch-panel reveal d1" aria-label="Fluxo de coordenação">
            <div className="arch-chain">
              <span className="arch-node">GPS check-in</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Presença</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Faturamento</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Evolução</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Operadora</span>
            </div>
            <div className="arch-hub">
              <div className="arch-hub-title">CADU</div>
              <p className="arch-hub-desc">Alertas automáticos, rastreabilidade e evidência clínica estruturada</p>
            </div>
          </div>
        </div>
      </section>

      <section id="longitudinal" className="section-valor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "48rem" }}>
            <p className="eyebrow">O que a operadora passa a enxergar</p>
            <h2 className="section-headline">Da caixa preta ao painel de rastreabilidade.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Não é só sobre fraude. É sobre ter dados reais pra tomar decisões sobre rede credenciada, aprovação de sessões,
              e onde o custo está se justificando.
            </p>
          </div>
        </div>
      </section>

      <section id="pts" className="section-setor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Origem</p>
            <h2 className="section-headline">Operação real antes de produto.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              O CADU nasceu da Casa do Urso, uma clínica multidisciplinar de neurodesenvolvimento em São Paulo. Operando de
              dentro do ecossistema de terapias, vimos como os dados se perdem e onde a vulnerabilidade existe. Não estamos
              teorizando sobre o problema. Estamos resolvendo um problema que vivemos na prática, com dados estruturados
              desde 2023.
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
              Consentimento das famílias, permissões por perfil, rastreabilidade de acesso e segregação de dados. O CADU foi
              desenhado pra operar com regras claras de compartilhamento e auditabilidade completa.
            </p>
          </div>
        </div>
      </section>

      <section id="impactos" className="section-valor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Visibilidade por clínica credenciada</p>
            <h2 className="section-headline">Painel por prestador, com padrões de inconsistência.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Frequência real vs. faturada, taxa de evolução dos pacientes e sinais de inconsistência. Uma camada de
              inteligência que hoje não existe na operadora.
            </p>
            <ul className="urgencia-list" style={{ marginTop: "1.25rem" }}>
              <li>Presença confirmada vs. sessão faturada</li>
              <li>Alertas automáticos de divergência</li>
              <li>Frequência incompatível com evolução</li>
              <li>Comparação entre clínicas credenciadas</li>
              <li>Base real para revisão de rede e autorizações</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="origem" className="section-setor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Open Health</p>
            <h2 className="section-headline">Interoperabilidade com dados estruturados.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Dados estruturados por criança, por sessão e por prestador. Integração e governança com rastreabilidade para
              suportar auditoria e tomada de decisão.
            </p>
          </div>
        </div>
      </section>

      <section id="piloto" className="section-valor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Próximos passos</p>
            <h2 className="section-headline">Piloto controlado e mensurável.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Escopo fechado, equipe definida, métricas claras. O objetivo é gerar evidência real antes de qualquer expansão e
              mostrar o que é possível enxergar quando os dados existem.
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

          <h2 className="cta-headline reveal d1">Visibilidade também é controle de custo.</h2>

          <p className="cta-sub reveal d2">
            Vamos trocar uma ideia sobre onde o CADU pode ajudar no fluxo de auditoria de vocês.
          </p>

          <div className="cta-btns reveal d3" style={{ flexWrap: "wrap", justifyContent: "center", rowGap: "10px" }}>
            <a
              href="mailto:ola@cadu.health?subject=Conversa%20t%C3%A9cnica%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
              className="btn-white"
            >
              Agendar conversa técnica
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="mailto:ola@cadu.health?subject=Material%20institucional%20-%20CADU%20%C3%97%20Bradesco%20Sa%C3%BAde"
              className="btn-outline"
            >
              Receber material
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">
          CADU - Infraestrutura de rastreabilidade e coordenação de cuidado em neurodesenvolvimento
        </div>
        <div className="footer-right">Controle de custo · Auditoria ativa · Open Health · Piloto</div>
      </footer>
    </>
  );
}

