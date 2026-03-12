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

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.fs');
    if (btn) {
      btn.textContent = '✓ Sporočilo poslano!';
      btn.style.cssText += 'background:#f59e0b;color:#0f172a';
    }
  }

  return (
    <>
      {/* NAV */}
      <nav id="nav">
        <a className="nav-logo" href="#">
          Bratkovič
        </a>
        <ul className="nav-links">
          <li><a href="#storitve">Storitve</a></li>
          <li><a href="#about">O nas</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <a className="nav-cta" href="#kontakt">Rezerviraj termin</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="domov">
        <div className="hero-content">
          <div className="hero-tag">Zanesljivo · Strokovno · Pošteno</div>
          <h1>Vaš avto v <em>dobrih rokah</em></h1>
          <p className="hero-sub">Avtomehanične storitve z izkušnjami in srcem za vaše vozilo.</p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn-primary">Rezerviraj termin</a>
            <a href="#storitve" className="btn-ghost">Naše storitve</a>
          </div>
        </div>
        <div className="scroll-hint">Pomaknite se navzdol</div>
      </section>

      {/* SERVICES */}
      <section id="storitve">
        <div className="section-header">
          <div className="section-label">Kaj delamo</div>
          <h2>Naše storitve</h2>
        </div>

        <div className="services-grid">
          {[
            ['🔧', 'Avtomehanika', 'Diagnostika in popravila za vse vrste vozil.'],
            ['⚙️', 'Redni servis', 'Menjava olja, filtrov in pregledi.'],
            ['🛞', 'Pnevmatike', 'Menjava, uravnoteženje in hramba.'],
            ['🔋', 'Elektrika', 'Diagnostika in popravila.'],
            ['🛠️', 'Vzmetenje', 'Pregled in popravilo prožnih elementov.'],
            ['🌡️', 'Klima', 'Servis klimatske naprave.'],
          ].map(([icon, title, desc], idx) => (
            <div className="card-wrap" key={idx}>
              <div className="service-card slide-up-el">
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
          <img 
            src="https://images.unsplash.com/photo-1487278965515-bc4baf90690b?w=500&h=500&fit=crop" 
            alt="Automechanik"
            className="about-image"
          />
        </div>
        <div className="about-text" data-anim="from-right">
          <div className="section-label">Kdo smo</div>
          <h2>Mehanik, ki mu zaupate</h2>
          <p>Sem Aleksander Bratkovič. Avtomehanika je moja strast, ne le delo. Z izkušnjami delam pošteno in transparentno.</p>
          <p>Vsako vozilo obravnavam z maksimalno pozornostjo. Ni skritih stroškov, le kakovostna storitev, ki si jo zaslužite.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt">
        <div className="section-header">
          <div className="section-label">Stopite v stik</div>
          <h2>Naročanje & kontakt</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Naslov</h4>
                <p>VAŠA ULICA 1, KRAJ, Slovenija</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Telefon</h4>
                <p><a href="tel:+386XXXXXXXX">+386 XX XXX XXX</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>E-pošta</h4>
                <p><a href="mailto:info@example.com">info@example.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <h4>Delovni čas</h4>
                <p>Pon–Pet: 07:00–17:00<br/>Sab: Po dogovoru</p>
              </div>
            </div>
          </div>

          <form className="cf" onSubmit={handleSubmit}>
            <div className="fg">
              <label htmlFor="name">Ime</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="fg">
              <label htmlFor="email">E-pošta</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="fg">
              <label htmlFor="msg">Sporočilo</label>
              <textarea id="msg" name="msg" required></textarea>
            </div>
            <button type="submit" className="fs">Pošlji</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="fl">Bratkovič Avtomehanične storitve</div>
        <p>© 2026 Aleksander Bratkovič s.p. Vse pravice pridržane.</p>
      </footer>
    </>
  );
}

export default App;
