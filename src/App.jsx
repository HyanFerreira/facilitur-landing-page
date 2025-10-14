import "./App.css";
import logo from "./assets/logotipo.svg"; // coloque seu SVG aqui

export default function App() {
  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="FaciliTur — início">
            <span className="logo-dot" />
            FaciliTur
          </a>

          <nav className="links" aria-label="principal">
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#parceiros">Parceiros</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="cta-head">
            <a className="btn ghost" href="#">
              Iniciar sessão
            </a>
            <a className="btn brand" href="#parceiros">
              Tornar-se parceiro
            </a>
          </div>
        </div>
      </header>

      {/* HERO (tela cheia) */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="title">
              Em breve FaciliTur
              <br />
              na palma da sua mão!
            </h1>
            <p className="subtitle">
              Assine a newsletter e fique por dentro dos eventos da sua cidade.
              Receba um cronograma em tempo real por e-mail — dia, semana, mês e
              ano — pra não perder nada.
            </p>

            <div className="hero-actions">
              <a className="btn cta" href="#newsletter">
                Quero assinar a newsletter!
              </a>
              <small className="hint">
                É grátis e você pode cancelar quando quiser.
              </small>
            </div>
          </div>

          {/* Arte / Celular com logo */}
          <div className="hero-art" aria-hidden="true">
            <div className="bubbles">
              <span className="b1" />
              <span className="b2" />
              <span className="b3" />
              <span className="b4" />
            </div>

            <div className="phone">
              <div className="notch" />
              <div className="screen">
                <div className="mask top" />
                <div className="circle big" />
                <img className="screen-logo" src={logo} alt="" />
                <div className="mask bottom" />
                <div className="home-dot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <div className="container cards">
          <article className="card">
            <h2>O que é o FaciliTur?</h2>
            <p>
              FaciliTur é um sistema para ampliar dados e apoiar a implementação
              de políticas públicas municipais no turismo. Ajuda governo e
              parceiros a gerirem a criação e a divulgação de eventos públicos
              ou privados para moradores e visitantes.
            </p>
            <p>
              Com um cronograma em tempo real por e-mail, assinantes se mantêm
              informados sobre eventos do dia, semana, mês e ano.
            </p>
          </article>

          <article className="card">
            <h2>Nossa missão</h2>
            <p>
              Nascemos da ausência de um cronograma integrado de eventos do
              setor turístico. Queremos viabilizar a divulgação adequada e, com
              o engajamento da população, gerar retorno consistente ao
              município.
            </p>
          </article>
        </div>
      </section>

      {/* PARCEIROS */}
      <section id="parceiros" className="section">
        <div className="container partners">
          <div className="partners-copy">
            <h2>Nossos parceiros</h2>
            <p>
              Procuramos cidades que desejam engajar o setor turístico e
              precisam de dados objetivos e transparentes sobre a participação
              da população.
            </p>
            <a className="btn brand" href="#contato">
              Torne-se um parceiro!
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO + NEWSLETTER */}
      <section id="contato" className="section contact">
        <div className="container contact-grid">
          <div>
            <h2>Contato</h2>
            <ul className="contact-list">
              <li>
                <strong>E-mail:</strong> contato@facilitur.app
              </li>
              <li>
                <strong>Localização:</strong> Av. Central, 123 —
                Caraguatatuba/SP
              </li>
            </ul>
            <a className="btn ghost" href="mailto:contato@facilitur.app">
              Entrar em contato
            </a>
          </div>

          <form
            id="newsletter"
            className="nl-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="nl-label">
              Assine a newsletter
            </label>
            <div className="nl-row">
              <input
                id="email"
                type="email"
                required
                placeholder="seuemail@exemplo.com"
              />
              <button className="btn brand" type="submit">
                Assinar
              </button>
            </div>
            <small className="hint">Prometemos não enviar spam :)</small>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container foot">
          © {new Date().getFullYear()} FaciliTur · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
