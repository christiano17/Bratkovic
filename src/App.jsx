import { useEffect } from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor.jsx';
import PageTransition from './components/PageTransition.jsx';

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
      <PageTransition />
      <CustomCursor />
      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/386XXXXXXXX"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kontaktirajte nas na WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
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
