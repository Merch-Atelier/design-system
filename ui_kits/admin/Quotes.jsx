// Quotes.jsx — quote request queue
const QUOTE_ROWS = [
  { id:'Q-1042', client:'Field & Forth Coffee', brief:'12oz enamel mug, 200 pcs, in-hand 14 Nov', submitted:'2h ago',   status:'New',         tone:'warning', owner:'NV' },
  { id:'Q-1041', client:'Warden Paper',         brief:'A5 notebook, 500 pcs, kraft cover',        submitted:'5h ago',   status:'Quoted',      tone:'info',    owner:'NV' },
  { id:'Q-1040', client:'Hale & Son',           brief:'Heavyweight tee, 120 pcs, 2-color front',  submitted:'Yesterday',status:'Proof drafted',tone:'info',   owner:'JT' },
  { id:'Q-1039', client:'North Oak Studio',     brief:'Brass pen, 75 pcs, engraved',              submitted:'2 days ago',status:'Won',        tone:'success', owner:'NV' },
  { id:'Q-1038', client:'Monarch Bread Co.',    brief:'Canvas tote, 300 pcs, natural',            submitted:'3 days ago',status:'Declined',   tone:'error',   owner:'JT' },
  { id:'Q-1037', client:'Field & Forth Coffee', brief:'Ceramic tumbler, 250 pcs, satin',          submitted:'4 days ago',status:'New',        tone:'warning', owner:'—'  },
];

function Quotes() {
  return (
    <>
      {/* Stat row */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
        {[
          { l:'New this week',  v:'6',   s:'+2 vs last'  },
          { l:'Avg. first reply', v:'3.2h', s:'within target' },
          { l:'Quote → win',     v:'42%', s:'rolling 30d' },
          { l:'In draft',        v:'4',   s:'awaiting review' },
        ].map(s => (
          <div key={s.l} style={{ background:'#FFFFFF', borderRadius: 8, padding: '16px 18px', border:'1px solid rgba(36,36,36,.06)' }}>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#8F887B' }}>{s.l}</div>
            <div style={{ fontFamily:'"Playfair Display", serif', fontStyle: 'italic', fontSize: 32, color:'#242424', marginTop: 4, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, color:'#6E685D', marginTop: 6 }}>{s.s}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display:'flex', gap: 8, marginBottom: 14 }}>
        {['All 47','New 6','Quoted 18','Proof drafted 9','Won 12','Declined 2'].map((f,i) => (
          <button key={f} style={{
            fontFamily:'Montserrat, sans-serif', fontWeight: i===0 ? 700 : 500, fontSize: 12,
            padding:'8px 12px', borderRadius: 6, cursor:'pointer',
            border:'1px solid rgba(36,36,36,.14)',
            background: i===0 ? '#242424' : '#FFFFFF',
            color: i===0 ? '#F5F3ED' : '#4A453E',
          }}>{f}</button>
        ))}
      </div>

      {/* Table */}
      <div style={{ background:'#FFFFFF', borderRadius: 10, overflow:'hidden', border:'1px solid rgba(36,36,36,.06)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'96px 220px 1fr 120px 140px 60px 40px', padding:'12px 18px', fontFamily:'Montserrat, sans-serif', fontSize: 10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#8F887B', borderBottom:'1px solid rgba(36,36,36,.06)' }}>
          <span>ID</span><span>Client</span><span>Brief</span><span>Submitted</span><span>Status</span><span>Owner</span><span></span>
        </div>
        {QUOTE_ROWS.map((r, i) => (
          <div key={r.id} style={{
            display:'grid', gridTemplateColumns:'96px 220px 1fr 120px 140px 60px 40px',
            padding: '14px 18px', alignItems:'center',
            borderTop: i===0 ? 'none' : '1px solid rgba(36,36,36,.06)',
            fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#242424',
          }}>
            <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize: 12, color:'#6E685D' }}>{r.id}</span>
            <span style={{ fontWeight: 500 }}>{r.client}</span>
            <span style={{ color:'#4A453E', fontSize: 13 }}>{r.brief}</span>
            <span style={{ color:'#6E685D', fontSize: 12 }}>{r.submitted}</span>
            <Tag tone={r.tone} dot>{r.status}</Tag>
            <span style={{ fontSize: 11, fontWeight: 700, color:'#4A453E' }}>{r.owner}</span>
            <i className="ph ph-caret-right" style={{ fontSize: 14, color:'#8F887B', cursor:'pointer' }}></i>
          </div>
        ))}
      </div>
    </>
  );
}

Object.assign(window, { Quotes });
