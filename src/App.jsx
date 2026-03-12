import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    /* ── Intersection Observer ─────────────────────────────── */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;

        // If this is a wrapper (.card-wrap or .slide-up-wrap),
        // trigger the inner .slide-up-el child(ren)
        const inner = e.target.querySelectorAll('.slide-up-el');
        if (inner.length) {
          inner.forEach(el => el.classList.add('is-visible'));
        } else {
          // Direct data-anim elements (from-left, from-right, fade-up)
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

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.fs');
    if (btn) {
      btn.textContent = '✓ Sporočilo poslano!';
      btn.style.cssText += 'background:#4CAF50;color:#fff';
    }
  }

  return (
    <>
      {/* NAV */}
      <nav id="nav">
        <a className="nav-logo" href="#">
          Bratkovič <span>Avtomehanične storitve</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#storitve">Storitve</a>
          </li>
          <li>
            <a href="#about">O nas</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
        <a className="nav-cta" href="#kontakt">
          Rezerviraj termin
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="domov">
        <div className="hero-bg"></div>
          <div className="hero-tag">Zanesljivo · Strokovno · Pošteno</div>
        <h1>
          Vaš avto v <em>dobrih rokah.</em>
        </h1>
        <p className="hero-sub">
          Aleksander Bratkovič s.p. — avtomehanične storitve z izkušnjami in
          srcem za vaše vozilo.
        </p>
        <div className="hero-actions">
          <a href="#kontakt" className="btn-primary">
            Rezerviraj termin
          </a>
          <a href="#storitve" className="btn-ghost">
            Naše storitve
          </a>
        </div>
        <div className="scroll-hint">Pomaknite se navzdol</div>
      </section>

      {/* BOOKING BAND */}
      <div className="booking-band">
        <p data-anim="from-left">
          📅 <span>Spletno naročanje:</span> Preverite proste termine in
          rezervirajte storitev za vaš avto.
        </p>
        <a href="#kontakt" className="btn-primary" data-anim="from-right">
          Naroči se zdaj
        </a>
      </div>

      {/* SERVICES */}
      <section id="storitve">
        <div className="storitve-header">
          <div className="slide-up-wrap" style={{ marginBottom: '8px' }}>
            <div className="slide-up-el">
              <div className="section-label">Kaj delamo</div>
            </div>
          </div>
          <div className="slide-up-wrap" style={{ marginBottom: '14px' }}>
            <div className="slide-up-el" data-delay="1">
              <h2>Naše storitve</h2>
            </div>
          </div>
          <div className="slide-up-wrap">
            <div className="slide-up-el" data-delay="2">
              <p className="lead">
                Od rednih servisov do zahtevnih popravil — poskrbimo za vaše
                vozilo z znanjem in natančnostjo.
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {[
            ['🔧', 'Splošna avtomehanika',
              'Diagnostika in odpravljanje okvar za vse tipe vozil. Hitro, zanesljivo in brez skritih stroškov.'],
            ['⚙️', 'Redni servis & pregled',
              'Menjava olja, filtrov, zavor in kontrola vseh ključnih sistemov — vaš avto vedno v vrhunski formi.'],
            ['🛞', 'Menjava in hramba pnevmatik',
              'Sezonska menjava in varna hramba. Uravnoteženje in montaža za gladko vožnjo.'],
            ['🔋', 'Elektrika & diagnostika',
              'Računalniška diagnostika, menjava akumulatorja in popravila električne napeljave.'],
            ['🛠️', 'Vzmetenje & krmiljenje',
              'Pregled in popravilo blažilnikov, ležajev in krmilnega sistema za varno vožnjo.'],
            ['🌡️', 'Hlajenje & klima',
              'Servis klimatske naprave, menjava hladilne tekočine in pregled hladilnega sistema.'],
          ].map(([icon, title, desc], idx) => (
            <div className="card-wrap" key={idx}>
              <div className="service-card slide-up-el" data-delay={idx + 1}>
                <div className="si">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-visual" data-anim="from-left">
          <div className="about-visual-inner">
            <span className="big-a">A</span>
            <small>Aleksander Bratkovič s.p.</small>
          </div>
        </div>

        <div className="about-text" data-anim="from-right">
          <div className="section-label">Kdo smo</div>
          <h2>Mehanik, ki mu zaupate.</h2>
          <blockquote>
            "Vsak avto ima svojo zgodbo — jaz sem tu, da jo nadaljujem."
          </blockquote>
          <p>
            Moje ime je Aleksander Bratkovič. Avtomehanika ni le moje delo — je moja
            strast. Z leti izkušenj sem spoznal, da lastniki avtomobilov potrebujejo
            nekoga, ki jim pošteno pove, kaj je potrebno in česa ne.
          </p>
          <p>
            Delam neodvisno, kar pomeni, da vsako vozilo obravnavam s polno pozornostjo
            brez kompromisov. Ni traka, ni anonimnih tehnikov — samo jaz, vaš avto in moje
            znanje.
          </p>
          <p>Pokličite me ali pišite — skupaj najdemo najboljšo rešitev za vaše vozilo.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt">
        <div className="slide-up-wrap" style={{ marginBottom: '8px' }}>
          <div className="slide-up-el">
            <div className="section-label">Stopite v stik</div>
          </div>
        </div>
        <div className="slide-up-wrap" style={{ marginBottom: '14px' }}>
          <div className="slide-up-el" data-delay="1">
            <h2>Kontakt & naročanje</h2>
          </div>
        </div>
        <div className="slide-up-wrap" style={{ marginBottom: '44px' }}>
          <div className="slide-up-el" data-delay="2">
            <p className="lead">
              Rezervirajte termin, pošljite povpraševanje ali nas kontaktirajte neposredno.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <div data-anim="from-left" data-delay="d2">
            <ul className="cil">
              <li>
                <span className="ci-ico">📍</span>
                <div>
                  <span className="ci-lbl">Naslov</span>
                  <span className="ci-val">
                    VAŠA ULICA 1, KRAJ, Slovenija
                    <br />
                    <small
                      style={{ opacity: 0.36, fontSize: '0.78em' }}
                    >(placeholder – prosim dopolnite)</small>
                  </span>
                </div>
              </li>
              <li>
                <span className="ci-ico">📞</span>
                <div>
                  <span className="ci-lbl">Telefon</span>
                  <span className="ci-val">
                    <a href="tel:+386XXXXXXXX">+386 XX XXX XXX</a>
                  </span>
                </div>
              </li>
              <li>
                <span className="ci-ico">✉️</span>
                <div>
                  <span className="ci-lbl">E-pošta</span>
                  <span className="ci-val">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </span>
                </div>
              </li>
              <li>
                <span className="ci-ico">🕐</span>
                <div>
                  <span className="ci-lbl">Delovni čas</span>
                  <span className="ci-val">
                    Pon–Pet: 07:00–17:00<br />Sob: Po dogovoru
                  </span>
                </div>
              </li>
            </ul>
            <a
              className="wa-btn"
              href="https://wa.me/386XXXXXXXX?text=Pozdravljeni,%20rad%20bi%20rezerviral%20termin."
              target="_blank"
            >
              <svg viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                />
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L.057 23.49a.75.75 0 0 0 .921.921l5.64-1.476A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.704 9.704 0 0 1-5.031-1.403l-.36-.214-3.724.976.993-3.633-.234-.374A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"
                />
              </svg>
              Pišite nam na WhatsApp
            </a>
          </div>

          <div data-anim="from-right" data-delay="d2">
            <form className="cf" onSubmit={handleSubmit}>
              <div className="fr">
                <div className="fg">
                  <label>Ime in priimek</label>
                  <input type="text" placeholder="Janez Novak" required />
                </div>
                <div className="fg">
                  <label>Telefon</label>
                  <input type="tel" placeholder="+386 XX XXX XXX" />
                </div>
              </div>
              <div className="fg">
                <label>E-pošta</label>
                <input type="email" placeholder="janez@email.com" required />
              </div>
              <div className="fg">
                <label>Storitev</label>
                <select>
                  <option value="">– izberite storitev –</option>
                  <option>Splošna avtomehanika</option>
                  <option>Redni servis & pregled</option>
                  <option>Menjava pnevmatik</option>
                  <option>Elektrika & diagnostika</option>
                  <option>Vzmetenje & krmiljenje</option>
                  <option>Hlajenje & klima</option>
                  <option>Drugo</option>
                </select>
              </div>
              <div className="fg">
                <label>Sporočilo / opis težave</label>
                <textarea placeholder="Opišite, kaj potrebujete ali kaj se dogaja z vozilom…" />
              </div>
              <p className="fn">
                Odgovorili bomo v najkrajšem možnem času.
              </p>
              <button type="submit" className="fs">
                Pošlji povpraševanje →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="fl">Bratkovič</div>
        <p>© 2025 Avtomehanične storitve Bratkovič, Aleksander Bratkovič s.p.</p>
        <ul className="flinks">
          <li>
            <a href="#domov">Domov</a>
          </li>
          <li>
            <a href="#storitve">Storitve</a>
          </li>
          <li>
            <a href="#about">O nas</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="wa-float"
        href="https://wa.me/386XXXXXXXX?text=Pozdravljeni,%20rad%20bi%20rezerviral%20termin."
        target="_blank"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.670.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.390-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.130-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.050-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.500-.669-.510-.173-.008-.371-.010-.570-.010-.198 0-.520.074-.792.372-.272.297-1.040 1.016-1.040 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.200 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.360.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347z"
          />
          <path
            d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L.057 23.49a.75.75 0 0 0 .921.921l5.640-1.476A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.704 9.704 0 0 1-5.031-1.403l-.360-.214-3.724.976.993-3.633-.234-.374A9.694 9.694 0 0 1 2.250 12C2.250 6.615 6.615 2.250 12 2.250S21.750 6.615 21.750 12 17.385 21.75 12 21.75z"
          />
        </svg>
      </a>
    </>
  );
}

export default App;
