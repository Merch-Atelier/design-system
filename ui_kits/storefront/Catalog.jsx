// Catalog.jsx
const { useState: useCatState } = React;

function Catalog({ onNavigate }) {
  const [cat, setCat] = useCatState('All');
  const categories = ['All','Apparel','Drinkware','Carry','Paper','Writing'];
  const filtered = cat === 'All' ? SAMPLE_PRODUCTS : SAMPLE_PRODUCTS.filter(p => p.category === cat);

  return (
    <section style={{ padding: '56px 32px 96px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ marginBottom: 40 }}>
        <Eyebrow>Catalog · {filtered.length} pieces</Eyebrow>
        <h1 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize:56, lineHeight:1.1, letterSpacing:'-0.01em', margin:'14px 0 0' }}>
          The <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>full</em> catalog
        </h1>
      </div>

      <div style={{ display:'grid', gridTemplateColumns: '240px 1fr', gap: 48 }}>
        <aside>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.12em', color:'#4A453E', marginBottom:16 }}>Categories</div>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {categories.map(c => (
              <button key={c} onClick={()=>setCat(c)} style={{
                textAlign:'left', background:'transparent', border:'none', cursor:'pointer',
                padding:'10px 0', borderBottom:'1px solid rgba(36,36,36,.06)',
                fontFamily:'Montserrat, sans-serif', fontSize:14,
                fontWeight: cat===c ? 600 : 400,
                color: cat===c ? '#242424' : '#4A453E',
                display:'flex', justifyContent:'space-between', alignItems:'center',
              }}>
                {c} {cat===c && <i className="ph ph-check" style={{ fontSize: 14, color:'#8C7A65' }}></i>}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 36, fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.12em', color:'#4A453E', marginBottom:16 }}>Material</div>
          {['Organic cotton','Recycled polyester','Ceramic','Canvas','Brass'].map(m => (
            <label key={m} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', fontFamily:'Montserrat, sans-serif', fontSize:13, color:'#4A453E' }}>
              <input type="checkbox" style={{ accentColor:'#242424' }}/> {m}
            </label>
          ))}

          <div style={{ marginTop: 36, fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.12em', color:'#4A453E', marginBottom:12 }}>Min. run</div>
          {['25 pieces','50 pieces','100 pieces','250 pieces'].map(m => (
            <label key={m} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', fontFamily:'Montserrat, sans-serif', fontSize:13, color:'#4A453E' }}>
              <input type="radio" name="min" style={{ accentColor:'#242424' }}/> {m}
            </label>
          ))}
        </aside>

        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
            <div style={{ display:'flex', gap:8 }}>
              {cat !== 'All' && <Tag tone="category">{cat} ·&nbsp;<i className="ph ph-x" style={{ fontSize:12, marginLeft:4, cursor:'pointer' }} onClick={()=>setCat('All')}></i></Tag>}
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'Montserrat, sans-serif', fontSize:13, color:'#4A453E' }}>
              <i className="ph ph-arrows-down-up" style={{ fontSize: 16 }}></i>
              Sort · Recently added
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24 }}>
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onClick={()=>onNavigate('product', p)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Catalog });
