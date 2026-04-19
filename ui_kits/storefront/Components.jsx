// Components.jsx — shared storefront atoms.
// Exports to window so sibling babel scripts can use them.

const { useState } = React;

// ---------- Logo ----------
function Logo({ light = false, size = 18 }) {
  const color = light ? '#F5F3ED' : '#242424';
  const accent = '#8C7A65';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, lineHeight: 1 }}>
      <span style={{
        fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
        letterSpacing: '0.14em', fontSize: size, color,
      }}>MERCH</span>
      <span style={{
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400,
        fontSize: size * 1.1, color: accent, letterSpacing: '0.02em',
      }}>Atelier</span>
    </span>
  );
}

// ---------- Button ----------
function Button({ children, variant = 'primary', size = 'md', onClick, icon, style }) {
  const base = {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
    fontSize: size === 'sm' ? 11 : 12,
    textTransform: 'uppercase', letterSpacing: '0.12em',
    padding: size === 'sm' ? '10px 16px' : '14px 22px',
    borderRadius: 6, cursor: 'pointer', border: '1px solid transparent',
    transition: 'all 180ms cubic-bezier(.22,.61,.36,1)',
    display: 'inline-flex', alignItems: 'center', gap: 8,
  };
  const variants = {
    primary: { background: '#242424', color: '#F5F3ED' },
    secondary: { background: 'transparent', color: '#242424', borderColor: '#242424' },
    ghost: { background: 'transparent', color: '#242424', padding: '6px 0', borderRadius: 0 },
    lightOnDark: { background: '#F5F3ED', color: '#242424' },
  };
  const [hover, setHover] = useState(false);
  const hoverStyles = {
    primary: { background: '#3A3832' },
    secondary: { background: '#E3DED2' },
    ghost: { color: '#8C7A65' },
    lightOnDark: { background: '#FFFFFF' },
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...(hover ? hoverStyles[variant] : {}), ...style }}
    >
      {icon && <i className={`ph ph-${icon}`} style={{ fontSize: 16 }}></i>}
      {children}
    </button>
  );
}

// ---------- Eyebrow ----------
function Eyebrow({ children, color = '#8C7A65' }) {
  return (
    <span style={{
      fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 12,
      textTransform: 'uppercase', letterSpacing: '0.12em', color,
    }}>{children}</span>
  );
}

// ---------- Tag ----------
function Tag({ children, tone = 'neutral', dot = false }) {
  const tones = {
    neutral: { bg: '#E3DED2', fg: '#3A3832', dotC: '#6E685D' },
    success: { bg: '#EAEEDF', fg: '#4B5A37', dotC: '#6F8452' },
    warning: { bg: '#F6E8CE', fg: '#815821', dotC: '#C68A2E' },
    error:   { bg: '#F1D9D2', fg: '#7C3126', dotC: '#B04A3B' },
    info:    { bg: '#DCE5ED', fg: '#3D5569', dotC: '#5B7B95' },
    category:{ bg: 'transparent', fg: '#242424', dotC: null, border: 'rgba(36,36,36,.22)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11,
      textTransform: 'uppercase', letterSpacing: '0.12em',
      padding: '6px 10px', borderRadius: 4,
      background: t.bg, color: t.fg,
      border: t.border ? `1px solid ${t.border}` : 'none',
      display: 'inline-flex', alignItems: 'center', gap: 6,
    }}>
      {dot && t.dotC && <span style={{ width:6, height:6, borderRadius:'50%', background: t.dotC }} />}
      {children}
    </span>
  );
}

// ---------- Field ----------
function Field({ label, value, placeholder, help, type = 'text', onChange, rows }) {
  const [focus, setFocus] = useState(false);
  const style = {
    width: '100%', boxSizing: 'border-box',
    fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#242424',
    padding: rows ? '12px 14px' : '12px 14px',
    border: `1px solid ${focus ? '#242424' : 'rgba(36,36,36,.22)'}`,
    borderRadius: 6, background: '#FFFFFF', outline: 'none',
    boxShadow: focus ? '0 0 0 3px rgba(140,122,101,.3)' : 'none',
    transition: 'all 180ms cubic-bezier(.22,.61,.36,1)',
    resize: rows ? 'vertical' : 'none', minHeight: rows ? rows * 22 : undefined,
    fontFamily: 'Montserrat, sans-serif',
  };
  return (
    <label style={{ display: 'block' }}>
      {label && <div style={{
        fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 12,
        textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4A453E',
        marginBottom: 8,
      }}>{label}</div>}
      {rows
        ? <textarea style={style} value={value||''} placeholder={placeholder} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={e=>onChange?.(e.target.value)} rows={rows}/>
        : <input type={type} style={style} value={value||''} placeholder={placeholder} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={e=>onChange?.(e.target.value)}/>}
      {help && <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6E685D', marginTop: 6 }}>{help}</div>}
    </label>
  );
}

// ---------- Product thumbnail (drawn placeholder) ----------
function ProductThumb({ palette = ['#E3DED2','#BAB3A3'], shape = 'tee' }) {
  // A quiet placeholder — two-tone warm gradient with a subtle silhouette shape.
  const bg = `linear-gradient(160deg, ${palette[0]}, ${palette[1]})`;
  const silhouettes = {
    tee:    { top: '28%', left: '22%', right: '22%', bottom: '14%', radius: '14% 14% 6% 6% / 18% 18% 6% 6%' },
    cup:    { top: '30%', left: '34%', right: '34%', bottom: '18%', radius: '6% 6% 40% 40% / 6% 6% 22% 22%' },
    bag:    { top: '26%', left: '24%', right: '24%', bottom: '16%', radius: '8% 8% 4% 4% / 10% 10% 4% 4%' },
    cap:    { top: '40%', left: '20%', right: '20%', bottom: '28%', radius: '50% 50% 30% 10% / 80% 80% 30% 10%' },
    note:   { top: '22%', left: '30%', right: '30%', bottom: '18%', radius: '4px' },
    pen:    { top: '20%', left: '48%', right: '46%', bottom: '18%', radius: '2px 2px 40% 40%' },
  };
  const s = silhouettes[shape] || silhouettes.tee;
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: bg, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: s.top, left: s.left, right: s.right, bottom: s.bottom,
        background: '#6E685D', opacity: 0.55, borderRadius: s.radius,
      }} />
    </div>
  );
}

// ---------- Product card ----------
function ProductCard({ product, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        textAlign: 'left', background: '#FFFFFF', borderRadius: 12, overflow: 'hidden',
        border: 'none', padding: 0, cursor: 'pointer', width: '100%',
        boxShadow: hover
          ? '0 2px 4px rgba(36,36,36,.05), 0 8px 20px rgba(36,36,36,.06)'
          : '0 1px 2px rgba(36,36,36,.04), 0 2px 6px rgba(36,36,36,.04)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 220ms cubic-bezier(.22,.61,.36,1)',
      }}>
      <div style={{ overflow:'hidden' }}>
        <div style={{ transform: hover ? 'scale(1.03)' : 'scale(1)', transition: 'transform 500ms cubic-bezier(.22,.61,.36,1)' }}>
          <ProductThumb palette={product.palette} shape={product.shape} />
        </div>
      </div>
      <div style={{ padding: '16px 18px 22px' }}>
        <Eyebrow>{product.category}</Eyebrow>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontWeight: 500, fontSize: 22,
          color: '#242424', margin: '8px 0 4px', lineHeight: 1.15,
        }}>
          {product.name} <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>{product.nameItalic}</em>
        </div>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#6E685D' }}>{product.meta}</div>
        <div style={{
          marginTop: 14, display:'flex', justifyContent:'space-between', alignItems:'baseline',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#4A453E',
        }}>
          <span>from ${product.price} / pc</span>
          <span style={{ color:'#8F887B' }}>min {product.min}</span>
        </div>
      </div>
    </button>
  );
}

// ---------- Section header ----------
function SectionHeader({ eyebrow, title, italic, intro, align = 'left' }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 720 : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{
        fontFamily: '"Playfair Display", serif', fontWeight: 400, fontSize: 44,
        letterSpacing: '-0.01em', lineHeight: 1.15, color: '#242424',
        margin: '14px 0 0',
      }}>
        {title} {italic && <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>{italic}</em>}
      </h2>
      {intro && <p style={{
        fontFamily: 'Montserrat, sans-serif', fontSize: 16, lineHeight: 1.65,
        color: '#4A453E', margin: '16px 0 0', maxWidth: 600,
      }}>{intro}</p>}
    </div>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer style={{ background: '#242424', color: '#F5F3ED', padding: '72px 48px 40px', marginTop: 96 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <Logo light size={20} />
          <p style={{ fontFamily: '"Playfair Display", serif', fontStyle:'italic', fontSize: 20, color: '#BAB3A3', margin: '20px 0 0', lineHeight: 1.4 }}>
            Considered merchandise for small studios,<br/>one collection at a time.
          </p>
        </div>
        {[
          { h: 'Shop', items: ['Catalog','Apparel','Drinkware','Paper goods','New arrivals'] },
          { h: 'Studio', items: ['About','Case studies','Journal','Sustainability'] },
          { h: 'Contact', items: ['Request a quote','Book a call','hello@merchatelier.co','Brooklyn, NY'] },
        ].map(col => (
          <div key={col.h}>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8F887B', marginBottom: 18 }}>{col.h}</div>
            {col.items.map(i => (
              <div key={i} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#F5F3ED', padding: '6px 0' }}>{i}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1280, margin: '48px auto 0', paddingTop: 24, borderTop: '1px solid rgba(245,243,237,.12)', display: 'flex', justifyContent: 'space-between', fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#8F887B' }}>
        <div>© 2026 Merch Atelier</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <span>Terms</span><span>Privacy</span><span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Logo, Button, Eyebrow, Tag, Field, ProductThumb, ProductCard, SectionHeader, Footer });
