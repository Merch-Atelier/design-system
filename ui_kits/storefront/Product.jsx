// Product.jsx — detail + customization + proof preview
const { useState: useProductState } = React;

function Product({ product, onNavigate, onAddToCollection }) {
  const p = product || SAMPLE_PRODUCTS[0];
  const [variant, setVariant] = useProductState(0);
  const [qty, setQty] = useProductState(50);
  const variants = [
    { name: 'Parchment',  swatch: '#F5F3ED' },
    { name: 'Taupe',      swatch: '#8C7A65' },
    { name: 'Carbon',     swatch: '#242424' },
    { name: 'Sage',       swatch: '#6F8452' },
  ];

  return (
    <section style={{ padding: '48px 32px 96px', maxWidth: 1280, margin: '0 auto' }}>
      {/* Breadcrumb */}
      <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 12, color:'#6E685D', marginBottom: 24, display:'flex', gap: 8, alignItems:'center' }}>
        <a onClick={()=>onNavigate('catalog')} style={{ cursor:'pointer', color:'#6E685D', textDecoration:'none' }}>Catalog</a>
        <i className="ph ph-caret-right" style={{ fontSize: 12 }}></i>
        <span>{p.category}</span>
        <i className="ph ph-caret-right" style={{ fontSize: 12 }}></i>
        <span style={{ color: '#242424' }}>{p.name} {p.nameItalic}</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 64 }}>
        {/* Visual column */}
        <div>
          <div style={{ aspectRatio: '4/5', background:`linear-gradient(160deg, ${p.palette[0]}, ${p.palette[1]})`, borderRadius: 12, overflow:'hidden', position:'relative' }}>
            <div style={{ position:'absolute', inset:'22% 22% 12% 22%', background:'#4A453E', opacity:.55, borderRadius: '10% 10% 4% 4% / 12% 12% 4% 4%' }} />
            {/* Proof mark placeholder */}
            <div style={{ position:'absolute', left:'38%', top:'44%', width:'24%', aspectRatio:'3/1', borderRadius: 2, background: variants[variant].swatch === '#F5F3ED' ? '#242424' : '#F5F3ED', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize: 11, color: variants[variant].swatch === '#F5F3ED' ? '#F5F3ED' : '#242424', padding: '2px 4px' }}>
              Your mark here
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 10, marginTop: 12 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ aspectRatio:'1', background:`linear-gradient(160deg, ${p.palette[0]}, ${p.palette[1]})`, borderRadius: 8, border: i===0 ? '1px solid #242424' : '1px solid rgba(36,36,36,.12)', opacity: i===0 ? 1 : 0.75, cursor:'pointer' }}></div>
            ))}
          </div>
        </div>

        {/* Config column */}
        <div>
          <Eyebrow>{p.category}</Eyebrow>
          <h1 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize: 56, letterSpacing:'-0.01em', lineHeight: 1.1, margin: '14px 0 0' }}>
            {p.name} <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>{p.nameItalic}</em>
          </h1>
          <p style={{ fontFamily:'Montserrat, sans-serif', fontSize: 16, color:'#4A453E', lineHeight: 1.65, margin:'20px 0 0', maxWidth: 440 }}>
            {p.meta}. Pre-shrunk, garment-washed, built to soften over time — the kind of piece people keep in rotation.
          </p>

          <div style={{ display:'flex', gap: 32, marginTop: 28, paddingTop: 24, borderTop:'1px solid rgba(36,36,36,.08)' }}>
            <div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, textTransform:'uppercase', letterSpacing:'.12em', color:'#6E685D' }}>Starting at</div>
              <div style={{ fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize: 30, color: '#242424', marginTop: 4 }}>${p.price}<span style={{ fontSize: 14, color:'#6E685D' }}> / piece</span></div>
            </div>
            <div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, textTransform:'uppercase', letterSpacing:'.12em', color:'#6E685D' }}>Min. run</div>
              <div style={{ fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize: 30, color: '#242424', marginTop: 4 }}>{p.min}<span style={{ fontSize: 14, color:'#6E685D' }}> pieces</span></div>
            </div>
          </div>

          {/* Color swatches */}
          <div style={{ marginTop: 32 }}>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#4A453E', marginBottom: 12 }}>Colorway · <span style={{ color:'#8C7A65' }}>{variants[variant].name}</span></div>
            <div style={{ display:'flex', gap: 10 }}>
              {variants.map((v,i) => (
                <button key={v.name} onClick={()=>setVariant(i)} style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: v.swatch, border: i===variant ? '2px solid #242424' : '1px solid rgba(36,36,36,.2)',
                  boxShadow: i===variant ? '0 0 0 3px #F5F3ED, 0 0 0 4px #242424' : 'none',
                  cursor:'pointer', padding: 0,
                }} />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ marginTop: 28, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 14 }}>
            <Field label="Run size" value={String(qty)} onChange={v=>setQty(Number(v)||0)} help={`${qty} pieces · $${(qty*p.price).toLocaleString()} estimated`} />
            <Field label="Imprint" value="Logo · 1 color" onChange={()=>{}} help="Front chest · 3.5 inches" />
          </div>

          <div style={{ marginTop: 32, display:'flex', gap: 12, alignItems:'center' }}>
            <Button variant="primary" icon="file-text" onClick={()=>onNavigate('quote', p)}>Request a quote</Button>
            <Button variant="secondary" icon="shopping-bag" onClick={onAddToCollection}>Save to collection</Button>
          </div>

          <div style={{ marginTop: 32, padding: '18px 20px', background:'#E3DED2', borderRadius: 8, display:'flex', gap:12, alignItems:'flex-start' }}>
            <i className="ph ph-sparkle" style={{ fontSize: 20, color:'#8C7A65', marginTop: 2 }}></i>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#4A453E', lineHeight: 1.55 }}>
              <strong style={{ color:'#242424', fontWeight: 600 }}>Proofs before production.</strong> A designer will send you a digital proof within one business day — no run begins without your written approval.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Product });
