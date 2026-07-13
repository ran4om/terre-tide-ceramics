import { useEffect, useRef } from 'react';
import pendantAsset from './assets/generated/pendant-v2.webp';
import tableLampAsset from './assets/generated/table-lamp-v2.webp';
import wallSconceAsset from './assets/generated/wall-sconce-v2.webp';

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
      <div className="lamp-stage" aria-hidden="true"><img className="story-lamp" src={pendantAsset} alt="" /><span className="lamp-shadow" /></div>
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
