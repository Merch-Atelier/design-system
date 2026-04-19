// Account.jsx — client dashboard
function Account({ onNavigate }) {
  const orders = [
    { id:'MA-2608', title:'The Heavyweight Tee', italic:'', pcs: 250, status:'In production', tone:'info',    ship:'Expected ship 14 Nov', palette:['#E3DED2','#8F887B'], shape:'tee' },
    { id:'MA-2579', title:'Market', italic:'Tote',        pcs: 100, status:'Awaiting proof',  tone:'warning', ship:'Proof due 22 Oct',    palette:['#E3DED2','#BAB3A3'], shape:'bag' },
    { id:'MA-2520', title:'Enamel', italic:'Mug',         pcs: 150, status:'Delivered',       tone:'success', ship:'Delivered 08 Sep',    palette:['#D2CBBC','#8F887B'], shape:'cup' },
  ];

  const toneToDot = { info: '#5B7B95', warning: '#C68A2E', success: '#6F8452' };

  return (
    <section style={{ padding: '56px 32px 96px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom: 40 }}>
        <div>
          <Eyebrow>Your account</Eyebrow>
          <h1 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize: 56, letterSpacing:'-0.01em', lineHeight: 1.1, margin: '14px 0 0' }}>
            Welcome back, <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>Eliza.</em>
          </h1>
        </div>
        <Button variant="primary" icon="file-text" onClick={()=>onNavigate('quote')}>Start a new brief</Button>
      </div>

      {/* Proof awaiting banner */}
      <div style={{ background:'#F6E8CE', border:'1px solid rgba(198,138,46,.35)', borderRadius: 10, padding:'18px 22px', display:'flex', alignItems:'center', gap:16, marginBottom: 32 }}>
        <i className="ph ph-warning-circle" style={{ fontSize: 22, color:'#C68A2E' }}></i>
        <div style={{ flex: 1, fontFamily:'Montserrat, sans-serif' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color:'#242424' }}>One proof is ready for your review.</div>
          <div style={{ fontSize: 13, color:'#4A453E', marginTop: 2 }}>Market Tote · 100 pcs · due by 22 Oct</div>
        </div>
        <Button variant="primary" size="sm">Review proof</Button>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap: 48 }}>
        {/* Orders list */}
        <div>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 20 }}>
            <h2 style={{ fontFamily:'"Playfair Display", serif', fontWeight:500, fontSize: 28, margin: 0 }}>Your orders</h2>
            <a style={{ cursor:'pointer', fontFamily:'Montserrat, sans-serif', fontSize: 12, fontWeight: 700, textTransform:'uppercase', letterSpacing:'.12em', color:'#8C7A65' }}>View all</a>
          </div>
          <div style={{ background:'#FFFFFF', borderRadius: 12, overflow:'hidden', boxShadow: '0 1px 2px rgba(36,36,36,.04)' }}>
            {orders.map((o, i) => (
              <div key={o.id} style={{
                display:'grid', gridTemplateColumns:'80px 1fr auto', gap:20, alignItems:'center',
                padding:'20px 24px', borderTop: i===0 ? 'none' : '1px solid rgba(36,36,36,.06)',
              }}>
                <div style={{ width: 80, height: 60, borderRadius: 6, overflow:'hidden' }}>
                  <ProductThumb palette={o.palette} shape={o.shape} />
                </div>
                <div>
                  <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, textTransform:'uppercase', letterSpacing:'.12em', color:'#6E685D' }}>Order {o.id}</div>
                  <div style={{ fontFamily:'"Playfair Display", serif', fontSize: 20, margin: '4px 0 6px', color:'#242424' }}>
                    {o.title} {o.italic && <em style={{ fontStyle:'italic', color:'#8C7A65' }}>{o.italic}</em>}
                  </div>
                  <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#6E685D' }}>
                    {o.pcs} pcs · {o.ship}
                  </div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap: 10 }}>
                  <Tag tone={o.tone} dot>{o.status}</Tag>
                  <a style={{ cursor:'pointer', fontFamily:'Montserrat, sans-serif', fontSize: 12, fontWeight:500, color:'#242424', display:'inline-flex', alignItems:'center', gap: 4 }}>Details <i className="ph ph-caret-right" style={{ fontSize: 12 }}></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collection + studio contact */}
        <aside>
          <h2 style={{ fontFamily:'"Playfair Display", serif', fontWeight:500, fontSize: 28, margin: '0 0 20px' }}>Your collection</h2>
          <div style={{ background:'#FFFFFF', padding: '20px 22px', borderRadius: 12, boxShadow:'0 1px 2px rgba(36,36,36,.04)' }}>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#4A453E', lineHeight: 1.6 }}>
              3 pieces saved for a future brief.
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 8, marginTop: 14 }}>
              {SAMPLE_PRODUCTS.slice(0,3).map(p => (
                <div key={p.id} style={{ aspectRatio: '1', borderRadius: 6, overflow:'hidden' }}>
                  <ProductThumb palette={p.palette} shape={p.shape} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18 }}>
              <Button variant="secondary" size="sm" style={{ width: '100%', justifyContent:'center' }}>Turn into a brief</Button>
            </div>
          </div>

          <div style={{ marginTop: 32, padding: '24px', background:'#242424', color:'#F5F3ED', borderRadius: 12 }}>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#BAB3A3' }}>Your studio contact</div>
            <div style={{ fontFamily:'"Playfair Display", serif', fontSize: 24, margin: '12px 0 4px' }}>Noa Vance</div>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#BAB3A3' }}>Designer · Merch Atelier</div>
            <div style={{ marginTop: 16, display:'flex', gap: 8 }}>
              <Button variant="lightOnDark" size="sm" icon="chat-circle">Message</Button>
              <Button variant="ghost" size="sm" style={{ color:'#BAB3A3' }}>Book a call</Button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

Object.assign(window, { Account });
