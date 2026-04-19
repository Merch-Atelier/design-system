// Orders.jsx — order / production tracking table
const ORDER_ROWS = [
  { id:'MA-2608', client:'Field & Forth Coffee', piece:'Heavyweight Tee',   pcs:250, vendor:'Boro Mill',   stage:'In production',   tone:'info',    due:'14 Nov', pct: 62 },
  { id:'MA-2607', client:'Warden Paper',         piece:'Field Notebook',    pcs:500, vendor:'Coyle Press', stage:'Proof approved',  tone:'success', due:'28 Nov', pct: 28 },
  { id:'MA-2605', client:'Hale & Son',           piece:'Studio Cap',        pcs:120, vendor:'Boro Mill',   stage:'Awaiting proof',  tone:'warning', due:'05 Dec', pct: 12 },
  { id:'MA-2603', client:'North Oak Studio',     piece:'Brass Pen',         pcs:75,  vendor:'Dover Metal', stage:'Shipped',         tone:'success', due:'Delivered 12 Oct', pct: 100 },
  { id:'MA-2601', client:'Monarch Bread Co.',    piece:'Market Tote',       pcs:300, vendor:'Boro Mill',   stage:'Revisions needed',tone:'error',   due:'22 Oct (at risk)', pct: 24 },
  { id:'MA-2598', client:'Field & Forth Coffee', piece:'Ceramic Tumbler',   pcs:250, vendor:'Coyle Clay',  stage:'In production',   tone:'info',    due:'09 Nov', pct: 78 },
];

function Orders() {
  return (
    <>
      {/* Status strip */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 10, marginBottom: 20 }}>
        {[
          { l:'Awaiting proof', v:3,  tone:'#C68A2E' },
          { l:'Proof approved', v:5,  tone:'#6F8452' },
          { l:'In production',  v:11, tone:'#5B7B95' },
          { l:'Shipped',        v:2,  tone:'#6F8452' },
          { l:'At risk',        v:1,  tone:'#B04A3B' },
        ].map(s => (
          <div key={s.l} style={{ background:'#FFFFFF', borderRadius: 8, padding: '14px 16px', border:'1px solid rgba(36,36,36,.06)', display:'flex', alignItems:'center', gap: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.tone, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, color:'#6E685D' }}>{s.l}</div>
              <div style={{ fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize: 22, color:'#242424', lineHeight: 1 }}>{s.v}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background:'#FFFFFF', borderRadius: 10, overflow:'hidden', border:'1px solid rgba(36,36,36,.06)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'100px 200px 1fr 80px 140px 160px 160px 40px', padding:'12px 18px', fontFamily:'Montserrat, sans-serif', fontSize: 10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#8F887B', borderBottom:'1px solid rgba(36,36,36,.06)' }}>
          <span>Order</span><span>Client</span><span>Piece</span><span>Qty</span><span>Vendor</span><span>Stage</span><span>Progress</span><span></span>
        </div>
        {ORDER_ROWS.map((r, i) => (
          <div key={r.id} style={{
            display:'grid', gridTemplateColumns:'100px 200px 1fr 80px 140px 160px 160px 40px',
            padding:'14px 18px', alignItems:'center',
            borderTop: i===0 ? 'none' : '1px solid rgba(36,36,36,.06)',
            fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#242424',
          }}>
            <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize: 12, color:'#6E685D' }}>{r.id}</span>
            <span style={{ fontWeight:500 }}>{r.client}</span>
            <span style={{ color:'#4A453E' }}>{r.piece}</span>
            <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize: 12, color:'#4A453E' }}>{r.pcs}</span>
            <span style={{ color:'#4A453E', fontSize: 12 }}>{r.vendor}</span>
            <Tag tone={r.tone} dot>{r.stage}</Tag>
            <span>
              <div style={{ height: 6, background:'#E3DED2', borderRadius: 999, overflow:'hidden' }}>
                <div style={{ height:'100%', width: `${r.pct}%`, background: r.tone==='error' ? '#B04A3B' : r.tone==='success' ? '#6F8452' : '#5B7B95', transition:'width 400ms cubic-bezier(.22,.61,.36,1)' }}/>
              </div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, color:'#6E685D', marginTop: 4 }}>{r.due}</div>
            </span>
            <i className="ph ph-caret-right" style={{ fontSize: 14, color:'#8F887B', cursor:'pointer' }}></i>
          </div>
        ))}
      </div>
    </>
  );
}

Object.assign(window, { Orders });
