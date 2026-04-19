// AdminShell.jsx — sidebar + topbar + shared atoms for admin density
const { useState: useShellState } = React;

const ADMIN_TOKENS = {
  sidebar: 232,
  rowH: 52,
  fs: 13,
  bg: '#F5F3ED',
  card: '#FFFFFF',
  ink: '#242424',
  ink2: '#4A453E',
  ink3: '#6E685D',
  line: 'rgba(36,36,36,.08)',
  accent: '#8C7A65',
};

function AdminLogo({ compact }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
      <span style={{ fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize: 13, letterSpacing:'.14em', color:'#242424' }}>MERCH</span>
      {!compact && <span style={{ fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize: 15, color:'#8C7A65' }}>Atelier</span>}
      <span style={{ fontFamily:'Montserrat, sans-serif', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing:'.12em', color:'#8F887B', border:'1px solid rgba(36,36,36,.22)', padding: '2px 5px', borderRadius: 2, marginLeft: 4 }}>Studio</span>
    </div>
  );
}

function Sidebar({ view, onNav }) {
  const sections = [
    { h: 'Work', items: [
      { id: 'quotes', label: 'Quote requests', icon: 'file-text', badge: 6 },
      { id: 'orders', label: 'Orders',         icon: 'package',    badge: 23 },
      { id: 'proofs', label: 'Proofs',         icon: 'image-square', badge: 3 },
    ]},
    { h: 'Partners', items: [
      { id: 'clients', label: 'Clients',  icon: 'users-three' },
      { id: 'vendors', label: 'Vendors',  icon: 'truck' },
    ]},
    { h: 'Library', items: [
      { id: 'catalog',  label: 'Catalog',  icon: 'squares-four' },
      { id: 'journal',  label: 'Journal',  icon: 'book-open-text' },
    ]},
  ];
  return (
    <aside style={{
      width: ADMIN_TOKENS.sidebar, flexShrink: 0, height: '100vh',
      background: '#FFFFFF', borderRight: `1px solid ${ADMIN_TOKENS.line}`,
      padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 20,
      position: 'sticky', top: 0,
    }}>
      <div style={{ padding: '4px 8px 8px' }}><AdminLogo /></div>
      {sections.map(sec => (
        <div key={sec.h}>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize:10, textTransform:'uppercase', letterSpacing:'.14em', color:'#8F887B', padding:'0 8px 6px' }}>{sec.h}</div>
          {sec.items.map(i => {
            const active = view === i.id;
            return (
              <button key={i.id} onClick={()=>onNav(i.id)} style={{
                width:'100%', display:'flex', alignItems:'center', gap: 10,
                padding:'8px 10px', borderRadius: 6, cursor:'pointer',
                background: active ? '#E3DED2' : 'transparent', border:'none',
                color: '#242424', fontFamily:'Montserrat, sans-serif', fontSize: 13,
                fontWeight: active ? 600 : 500, textAlign:'left',
                marginBottom: 2,
              }}>
                <i className={`ph ph-${i.icon}`} style={{ fontSize: 16, color: active ? '#242424' : '#6E685D' }}></i>
                <span style={{ flex: 1 }}>{i.label}</span>
                {i.badge && (
                  <span style={{ fontSize: 10, fontWeight: 700, background: active ? '#242424' : '#E3DED2', color: active ? '#F5F3ED' : '#4A453E', padding: '1px 6px', borderRadius: 999 }}>{i.badge}</span>
                )}
              </button>
            );
          })}
        </div>
      ))}
      <div style={{ marginTop:'auto', padding: '12px', background:'#F5F3ED', borderRadius: 8, display:'flex', alignItems:'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background:'#8C7A65', color:'#F5F3ED', fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize: 12, display:'flex', alignItems:'center', justifyContent:'center' }}>NV</div>
        <div style={{ flex: 1, lineHeight: 1.2 }}>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, color:'#242424' }}>Noa Vance</div>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, color:'#6E685D' }}>Designer</div>
        </div>
        <i className="ph ph-caret-up-down" style={{ fontSize: 14, color:'#6E685D' }}></i>
      </div>
    </aside>
  );
}

function Topbar({ title, italic, subtitle, action }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', padding: '32px 40px 20px', borderBottom: `1px solid ${ADMIN_TOKENS.line}` }}>
      <div>
        <div style={{ fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.12em', color:'#8C7A65' }}>{subtitle}</div>
        <h1 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize: 40, letterSpacing:'-0.01em', lineHeight: 1.1, margin:'10px 0 0' }}>
          {title} {italic && <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>{italic}</em>}
        </h1>
      </div>
      <div style={{ display:'flex', gap: 10, alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, padding:'8px 12px', background:'#FFFFFF', border: `1px solid ${ADMIN_TOKENS.line}`, borderRadius: 6, fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#6E685D', width: 240 }}>
          <i className="ph ph-magnifying-glass" style={{ fontSize: 14 }}></i> Search orders, clients…
        </div>
        {action}
      </div>
    </div>
  );
}

function AdminPage({ view, onNav, children, title, italic, subtitle, action }) {
  return (
    <div data-density="compact" style={{ display:'flex', background: ADMIN_TOKENS.bg, color:'#242424', minHeight:'100vh' }}>
      <Sidebar view={view} onNav={onNav} />
      <main style={{ flex: 1, minWidth: 0 }}>
        <Topbar title={title} italic={italic} subtitle={subtitle} action={action} />
        <div style={{ padding: '28px 40px 56px' }}>{children}</div>
      </main>
    </div>
  );
}

Object.assign(window, { AdminPage, ADMIN_TOKENS });
