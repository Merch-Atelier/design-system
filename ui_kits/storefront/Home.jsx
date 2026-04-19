// Home.jsx
function Home({ onNavigate }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '96px 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Eyebrow>Spring Collection · 2026</Eyebrow>
            <h1 style={{
              fontFamily: '"Playfair Display", serif', fontWeight: 400,
              fontSize: 76, letterSpacing: '-0.01em', lineHeight: 1.05,
              color: '#242424', margin: '24px 0 0',
            }}>
              Considered goods,<br/>
              <em style={{ fontStyle: 'italic', color: '#8C7A65', fontWeight: 400 }}>built to be kept.</em>
            </h1>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, color: '#4A453E', lineHeight: 1.65, margin: '28px 0 0', maxWidth: 480 }}>
              A high-touch merchandise studio for small brands who treat every piece as an extension of the work itself.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
              <Button variant="primary" onClick={()=>onNavigate('quote')}>Start a brief</Button>
              <Button variant="secondary" onClick={()=>onNavigate('catalog')}>Browse the catalog</Button>
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/5', background: 'linear-gradient(160deg,#D2CBBC,#8F887B)', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ position:'absolute', inset:'18% 24% 8% 20%', background:'#4A453E', opacity:.55, borderRadius: '10% 10% 4% 4% / 12% 12% 4% 4%' }} />
            <div style={{ position:'absolute', bottom: 20, left: 20, right: 20, color:'#F5F3ED', fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize: 15 }}>
              The Heavyweight Tee · 240 gsm organic cotton
            </div>
          </div>
        </div>
      </section>

      {/* Featured collection */}
      <section style={{ padding: '72px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom: 40 }}>
          <SectionHeader eyebrow="New this season" title="The Spring" italic="Collection" />
          <a onClick={()=>onNavigate('catalog')} style={{ cursor:'pointer', fontFamily:'Montserrat, sans-serif', fontSize:13, fontWeight:500, color:'#242424', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 }}>
            View all pieces <i className="ph ph-arrow-right" style={{ fontSize: 16 }}></i>
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {SAMPLE_PRODUCTS.slice(0,4).map(p => (
            <ProductCard key={p.id} product={p} onClick={()=>onNavigate('product', p)} />
          ))}
        </div>
      </section>

      {/* Studio intro — editorial strip on carbon */}
      <section style={{ background:'#242424', color:'#F5F3ED', padding: '96px 32px', marginTop: 72 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign:'center' }}>
          <Eyebrow color="#BAB3A3">The studio</Eyebrow>
          <p style={{ fontFamily:'"Playfair Display", serif', fontSize: 38, fontWeight:400, lineHeight: 1.3, margin:'20px 0 0', color:'#F5F3ED' }}>
            We work like a <em style={{ fontStyle:'italic', color:'#BAB3A3' }}>design studio</em>, not a supplier — one account manager, one designer, and a single vendor network we've vetted piece by piece.
          </p>
          <div style={{ marginTop: 36 }}>
            <Button variant="lightOnDark" onClick={()=>onNavigate('studio')}>Meet the studio</Button>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section style={{ padding: '96px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems:'center' }}>
          <div style={{ aspectRatio:'5/4', background:'linear-gradient(160deg,#E3DED2,#BAB3A3)', borderRadius: 12, position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', inset:'28% 22% 18% 28%', background:'#6E685D', opacity:.55, borderRadius: '8% 8% 30% 30%' }} />
          </div>
          <div>
            <Eyebrow>Case study · Field &amp; Forth Coffee</Eyebrow>
            <h2 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize:44, lineHeight:1.15, margin:'16px 0 0', letterSpacing:'-0.01em' }}>
              An anniversary piece,<br/><em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>made to outlast the occasion.</em>
            </h2>
            <blockquote style={{
              fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize:22, lineHeight:1.4,
              color:'#242424', borderLeft:'2px solid #8C7A65', paddingLeft:20, margin:'28px 0 0',
            }}>
              "They made our fifteenth-anniversary piece feel like an heirloom."
            </blockquote>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:13, fontWeight:500, color:'#6E685D', marginTop:14 }}>
              Eliza Marsh · Founder, Field &amp; Forth
            </div>
            <div style={{ marginTop: 32 }}>
              <Button variant="ghost">Read the case study</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const SAMPLE_PRODUCTS = [
  { id:'p1', category:'Apparel',   name:'The Heavyweight', nameItalic:'Tee', meta:'240 gsm · organic cotton', price:18, min:50, palette:['#E3DED2','#8F887B'], shape:'tee' },
  { id:'p2', category:'Drinkware', name:'Ceramic',          nameItalic:'Tumbler', meta:'12 oz · satin glaze', price:14, min:50, palette:['#D2CBBC','#8F887B'], shape:'cup' },
  { id:'p3', category:'Carry',     name:'Market',           nameItalic:'Tote', meta:'14 oz canvas · double strap', price:12, min:50, palette:['#E3DED2','#BAB3A3'], shape:'bag' },
  { id:'p4', category:'Paper',     name:'Field',            nameItalic:'Notebook', meta:'A5 · uncoated kraft', price:9,  min:100, palette:['#F5F3ED','#BAB3A3'], shape:'note' },
  { id:'p5', category:'Apparel',   name:'Studio',           nameItalic:'Cap', meta:'6-panel · unstructured', price:16, min:50, palette:['#D2CBBC','#6E685D'], shape:'cap' },
  { id:'p6', category:'Writing',   name:'Brass',            nameItalic:'Pen', meta:'Machined · refillable', price:22, min:50, palette:['#E3DED2','#BAB3A3'], shape:'pen' },
  { id:'p7', category:'Drinkware', name:'Enamel',           nameItalic:'Mug', meta:'10 oz · steel core',  price:11, min:50, palette:['#D2CBBC','#8F887B'], shape:'cup' },
  { id:'p8', category:'Carry',     name:'Weekend',          nameItalic:'Duffel', meta:'Waxed canvas',      price:48, min:25, palette:['#BAB3A3','#6E685D'], shape:'bag' },
];

Object.assign(window, { Home, SAMPLE_PRODUCTS });
