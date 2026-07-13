import { useEffect, useRef } from 'react';
import pendantAsset from './assets/generated/pendant-v2.webp';
import tableLampAsset from './assets/generated/table-lamp-v2.webp';
import wallSconceAsset from './assets/generated/wall-sconce-v2.webp';

function Lamp() {
  return <svg className="lamp" viewBox="0 0 520 700" role="img" aria-label="Sculptural ceramic pendant lamp with a terracotta pleated shade">
    <defs>
      <radialGradient id="glow"><stop offset="0" stopColor="#ffe8a0" stopOpacity=".95"/><stop offset="1" stopColor="#e98c59" stopOpacity="0"/></radialGradient>
      <linearGradient id="clay" x1="0" x2="1"><stop stopColor="#7c2e29"/><stop offset=".2" stopColor="#d37955"/><stop offset=".5" stopColor="#f0aa73"/><stop offset=".78" stopColor="#a84838"/><stop offset="1" stopColor="#6c2525"/></linearGradient>
      <filter id="rough"><feTurbulence baseFrequency=".85" numOctaves="2" seed="7" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/></filter>
    </defs>
    <circle cx="260" cy="465" r="215" fill="url(#glow)" className="glow"/>
    <path d="M254 0v160" stroke="#3e2525" strokeWidth="7"/>
    <path d="M213 159h94l21 70H192z" fill="#3e2525"/>
    <path d="M183 216 C145 291 109 385 77 489 C172 539 350 539 443 489 C408 378 371 289 337 216 Z" fill="url(#clay)" filter="url(#rough)"/>
    <path d="M183 216 C221 241 299 241 337 216" fill="none" stroke="#6a2828" strokeWidth="9"/>
    <g fill="none" stroke="#71302c" strokeWidth="4" opacity=".75">
      <path d="M207 226L157 503"/><path d="M232 233L208 518"/><path d="M260 236V524"/><path d="M288 233L312 518"/><path d="M313 226L363 503"/>
    </g>
    <ellipse cx="260" cy="495" rx="183" ry="40" fill="#512422"/><ellipse cx="260" cy="489" rx="132" ry="28" fill="#ffd67d" className="bulb-light"/>
    <circle cx="260" cy="474" r="34" fill="#ffecaa"/>
  </svg>;
}

const collection = [
  { name: 'Maré 01', type: 'Pendant', detail: 'Red clay · iron wash', color: 'rust', image: pendantAsset, alt: 'Hand-thrown terracotta pendant with a deep oxblood glazed collar' },
  { name: 'Duna 02', type: 'Table light', detail: 'Stoneware · chalk glaze', color: 'chalk', image: tableLampAsset, alt: 'Rounded cream ceramic table lamp on a terracotta base' },
  { name: 'Fenda 03', type: 'Wall light', detail: 'Black clay · salt glaze', color: 'black', image: wallSconceAsset, alt: 'Faceted oxblood ceramic wall light with a bronze mounting plate' },
];

function App() {
  const storyRef = useRef(null);
  useEffect(() => {
    const story = storyRef.current;
    let ticking = false;
    const update = () => {
      const rect = story.getBoundingClientRect();
      const distance = story.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(distance, 1)));
      story.style.setProperty('--progress', progress.toFixed(3));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return <main id="top">
    <nav><a className="logo" href="#top">TERRE <i>&</i> TIDE</a><p>Objects of earth<br />made to hold light</p><div><a href="#collection">Collection</a><a href="#contact">Commission</a></div></nav>

    <header className="hero">
      <div className="sun" aria-hidden="true" />
      <p className="hero-kicker">Ceramic lighting · Lisbon</p>
      <h1>Light,<br /><span>given a<br />body.</span></h1>
      <p className="hero-intro">Each shade begins as local clay and ends as its own small atmosphere. Thrown, pressed, carved, and fired by hand in our Alcântara studio.</p>
      <figure className="hero-object">
        <img src={pendantAsset} alt="Maré 01 hand-thrown terracotta pendant" />
        <figcaption><span>Maré 01</span><b>New fired form · 2026</b></figcaption>
      </figure>
      <a href="#story" className="scroll-cue"><span>Follow the making</span><b>↓</b></a>
    </header>

    <section className="object-story" id="story" ref={storyRef}>
      <div className="lamp-stage" aria-hidden="true"><Lamp /><span className="lamp-shadow" /></div>
      <article className="chapter earth"><div><span>01</span><h2>Earth</h2><p>We mix red clay with a small amount of grog, coarse fired ceramic that leaves the surface open and tactile. The body remembers every push of the hand.</p></div></article>
      <article className="chapter water"><div><span>02</span><h2>Water</h2><p>The shade is formed slowly, then allowed to settle. Curves are measured by eye against the light they will cast, not against a perfect template.</p></div></article>
      <article className="chapter fire"><div><span>03</span><h2>Fire</h2><p>Two firings reach 1,220°C. Iron blooms through the wash. Small shifts in oxygen make every surface distinct, while dimensions stay precise.</p></div></article>
      <article className="chapter room"><div><span>04</span><h2>Room</h2><p>The open lower edge gives useful light to a table. The pleated wall softens everything above it. One object, two qualities of glow.</p></div></article>
    </section>

    <section className="collection" id="collection">
      <div className="collection-head"><p>Current forms</p><h2>Three ways<br />to hold a flame.</h2><p>Made to order in small batches. Natural variation in tone and texture is part of each piece.</p></div>
      <div className="shelf">
        {collection.map((item, index) => <a href="#contact" className={`piece ${item.color}`} key={item.name}>
          <span className="piece-number">0{index + 1}</span>
          <div className="vessel"><img src={item.image} alt={item.alt} /></div>
          <div className="piece-info"><h3>{item.name}</h3><p>{item.type}</p><small>{item.detail}</small></div>
          <b aria-hidden="true">↗</b>
        </a>)}
      </div>
    </section>

    <section className="measurements">
      <p>Maré 01 / working dimensions</p>
      <div className="diagram" aria-label="Maré pendant dimensions: 46 centimeters wide and 38 centimeters high" role="img"><img src={pendantAsset} alt="" /><span className="width">← 46 cm →</span><span className="height">38 cm</span></div>
      <div className="facts"><p><b>Material</b>Red earthenware</p><p><b>Light source</b>E27 LED, dimmable</p><p><b>Lead time</b>8 to 10 weeks</p><p><b>From</b>€780 incl. VAT</p></div>
    </section>

    <section className="contact" id="contact">
      <div className="contact-lamp" aria-hidden="true"><img src={pendantAsset} alt="" /></div>
      <div><p>Residential and trade commissions</p><h2>Where will<br />the light land?</h2><p>Send the room, approximate dimensions, and your location. We will reply with a suitable form, finish samples, and a clear timeline.</p><a href="mailto:studio@terre-tide.example?subject=Ceramic%20light%20commission">Begin a commission <span>↗</span></a></div>
    </section>
    <footer><a className="logo" href="#top">TERRE <i>&</i> TIDE</a><p>Rua da Indústria 18, Lisboa<br />Fictional portfolio concept</p><p>Instagram · Pinterest<br />© 2026</p></footer>
  </main>;
}
export default App;
