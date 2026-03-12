import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    /* ── Intersection Observer ─────────────────────────────── */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const inner = e.target.querySelectorAll('.slide-up-el');
        if (inner.length) {
          inner.forEach(el => el.classList.add('is-visible'));
        } else {
          e.target.classList.add('is-visible');
        }
        io.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.card-wrap, .slide-up-wrap, [data-anim]').forEach(el => io.observe(el));

    /* ── Nav shrink ────────────────────────────────────────── */
    const onScroll = () => {
      document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav id="nav">
        <a className="nav-logo" href="#">
          Bratkovič
        </a>
        <ul className="nav-links">
          <li><a href="#storitve">Storitve</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="domov">
        <div className="hero-content">
          <h1>Strokovna nega za vaše vozilo</h1>
          <p className="hero-sub">
            Pridružite se nam na poti do zanesljivega in dobro negovanega vozila! 
            Z vsakim servisom zagotavljamo skrbno nego, udobje in nasmeh na obrazu 
            vašega šoferja.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="storitve">
        <div className="section-header">
          <h2>Storitve</h2>
        </div>

        <div className="services-grid">
          <div className="card-wrap">
            <div className="service-card slide-up-el">
              <h3>Celotna nega</h3>
              <p>
                Vključuje pregled motorja, menjavo olja in filtrov, kontrolo zavor, 
                diagnostiko, ter čiščenje. Poskrbimo za celostno urejenost in 
                dobro počutje vašega vozila.
              </p>
            </div>
          </div>

          <div className="card-wrap">
            <div className="service-card slide-up-el">
              <h3>Redni servis</h3>
              <p>
                Temeljit servis z menjavo olja, filtrov in kontrolo ključnih sistemov 
                za dolgo življenjsko dobo vašega vozila.
              </p>
            </div>
          </div>

          <div className="card-wrap">
            <div className="service-card slide-up-el">
              <h3>Diagnostika</h3>
              <p>
                Natančna elektronska diagnostika za hitro odkrivanje težav in 
                preprečevanje večjih okvar vašega vozila.
              </p>
            </div>
          </div>

          <div className="card-wrap">
            <div className="service-card slide-up-el">
              <h3>Pnevmatike</h3>
              <p>
                Menjava pnevmatik, uravnoteženje in hramba za varno vožnjo skozi 
                vse letne čase.
              </p>
            </div>
          </div>

          <div className="card-wrap">
            <div className="service-card slide-up-el">
              <h3>Vzmetenje in podvozje</h3>
              <p>
                Pregled in popravilo vzmetenja za optimalno udobje in 
                varnost med vožnjo.
              </p>
            </div>
          </div>

          <div className="card-wrap">
            <div className="service-card slide-up-el">
              <h3>Klima servis</h3>
              <p>
                Servis klimatske naprave za svež zrak in prijetno temperaturo 
                v vašem vozilu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section id="about" className="story-section">
        <div className="story-content">
          <p>
            Vsaka zgodba ima svoj začetek, moja se je začela z ljubeznijo do avtomobilov 
            – mojo strast, ki mi pomeni ves svet. Avtomobili niso bili le stroji, 
            postali so moja obsesija in zvesta spremljevalka.
          </p>
          <p>
            Potem pa sem spoznal svoje stranke, ki so imeli prav tako ljubezen do svojih 
            vozil. In tako nas je zbližala skupna ljubezen do teh čudovitih strojev.
          </p>
          <p>
            Čeprav je bilo na poti mnogo izzivov, je ta ljubezen do avtomobilov ter 
            posebna vez, ki jo čutim do njih razlog, za odprtje delavnice.
          </p>
          <p>
            V Avtomehaničnih storitvah Bratkovič smo predani temu, da vašim vozilom 
            ponudimo najboljšo možno nego. Z dolgoletnimi izkušnjami skrbimo za to, 
            da se vaše vozilo počuti varno in udobno.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt">
        <div className="section-header">
          <h2>Kontakt</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h4>📍 Naslov</h4>
              <p>VAŠA ULICA 1<br/>KRAJ, Slovenija</p>
            </div>

            <div className="contact-item">
              <h4>📞 Telefon</h4>
              <p><a href="tel:+386XXXXXXXX">+386 XX XXX XXX</a></p>
            </div>

            <div className="contact-item">
              <h4>✉️ E-pošta</h4>
              <p><a href="mailto:info@bratkovic.si">info@bratkovic.si</a></p>
            </div>

            <div className="contact-item">
              <h4>🕐 Delovni čas</h4>
              <p>
                Ponedeljek–Petek: 07:00–17:00<br/>
                Sobota: Po dogovoru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Avtomehanične storitve Bratkovič. Vse pravice pridržane.</p>
      </footer>
    </>
  );
}

export default App;
