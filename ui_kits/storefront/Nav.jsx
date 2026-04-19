// Nav.jsx — sticky top nav
const { useState: useNavState } = React;

function Nav({ current, onNavigate, collectionCount = 0 }) {
  const [scrolled, setScrolled] = useNavState(false);
  React.useEffect(() => {
    const el = document.querySelector('.scroll-root');
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'catalog', label: 'Catalog' },
    { id: 'cases', label: 'Case studies' },
    { id: 'studio', label: 'The studio' },
    { id: 'journal', label: 'Journal' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,243,237,.82)', backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid rgba(36,36,36,.08)' : '1px solid transparent',
      transition: 'border-color 180ms cubic-bezier(.22,.61,.36,1)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '18px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a onClick={()=>onNavigate('home')} style={{ cursor:'pointer', textDecoration:'none' }}><Logo size={18} /></a>
        <div style={{ display: 'flex', gap: 32 }}>
          {items.map(i => (
            <a key={i.id} onClick={()=>onNavigate(i.id)} style={{
              cursor: 'pointer', textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.02em',
              color: current === i.id ? '#8C7A65' : '#242424',
              position: 'relative', paddingBottom: 2,
              borderBottom: current === i.id ? '1px solid #8C7A65' : '1px solid transparent',
            }}>{i.label}</a>
          ))}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap: 18 }}>
          <i className="ph ph-magnifying-glass" style={{ fontSize: 20, color: '#242424', cursor:'pointer' }}></i>
          <a onClick={()=>onNavigate('account')} style={{ cursor:'pointer', display:'inline-flex', alignItems:'center', gap: 6, color:'#242424' }}>
            <i className="ph ph-user-circle" style={{ fontSize: 22 }}></i>
          </a>
          <a onClick={()=>onNavigate('collection')} style={{ cursor:'pointer', position:'relative', color:'#242424' }}>
            <i className="ph ph-shopping-bag" style={{ fontSize: 20 }}></i>
            {collectionCount > 0 && (
              <span style={{
                position:'absolute', top:-6, right:-8,
                background:'#8C7A65', color:'#F5F3ED',
                fontFamily:'Montserrat, sans-serif', fontSize:10, fontWeight:700,
                padding:'1px 5px', borderRadius:999, lineHeight:1.4,
              }}>{collectionCount}</span>
            )}
          </a>
          <Button variant="primary" size="sm" onClick={()=>onNavigate('quote')}>Request a quote</Button>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { Nav });
