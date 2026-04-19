// Quote.jsx — brief / quote request form
const { useState: useQuoteState } = React;

function Quote({ onNavigate, product }) {
  const [submitted, setSubmitted] = useQuoteState(false);
  const [form, setForm] = useQuoteState({
    brand: '', email: '', pieces: product?.name ? `${product.name} ${product.nameItalic}` : '', qty: '250', deadline: '', brief: '',
  });
  const update = (k,v) => setForm(f => ({...f, [k]: v}));

  if (submitted) {
    return (
      <section style={{ padding: '96px 32px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <i className="ph ph-check-circle" style={{ fontSize: 56, color: '#6F8452' }}></i>
        <h1 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize: 48, margin:'20px 0 0', lineHeight: 1.15 }}>
          Brief <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>received.</em>
        </h1>
        <p style={{ fontFamily:'Montserrat, sans-serif', fontSize: 17, color:'#4A453E', lineHeight: 1.65, margin:'20px auto 0', maxWidth: 480 }}>
          Thanks — a designer from the studio will be in touch within one business day. Your brief is saved in your collection for reference.
        </p>
        <div style={{ marginTop: 32, display:'flex', justifyContent:'center', gap: 12 }}>
          <Button variant="primary" onClick={()=>onNavigate('account')}>View in account</Button>
          <Button variant="secondary" onClick={()=>onNavigate('home')}>Back to home</Button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '56px 32px 96px', maxWidth: 960, margin: '0 auto' }}>
      <Eyebrow>Start a brief</Eyebrow>
      <h1 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize: 56, letterSpacing:'-0.01em', lineHeight: 1.1, margin: '14px 0 0' }}>
        Tell us what you're <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>making.</em>
      </h1>
      <p style={{ fontFamily:'Montserrat, sans-serif', fontSize: 17, color:'#4A453E', lineHeight: 1.65, margin: '20px 0 0', maxWidth: 600 }}>
        A few details so we can quote accurately. Nothing is binding — expect a designer's reply, not an automated email.
      </p>

      <div style={{ marginTop: 48, background:'#FFFFFF', padding: '40px 44px', borderRadius: 12, boxShadow: '0 1px 2px rgba(36,36,36,.04), 0 2px 6px rgba(36,36,36,.04)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24, marginBottom: 24 }}>
          <Field label="Your studio or brand" value={form.brand} placeholder="e.g. Field & Forth Coffee" onChange={v=>update('brand',v)} />
          <Field label="Contact email" type="email" value={form.email} placeholder="hello@yourstudio.com" help="We'll send your proof here." onChange={v=>update('email',v)} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap: 24, marginBottom: 24 }}>
          <Field label="Piece(s) you're considering" value={form.pieces} placeholder="e.g. Heavyweight Tee, Ceramic Tumbler" onChange={v=>update('pieces',v)} />
          <Field label="Estimated run" value={form.qty} help="Minimums start at 50." onChange={v=>update('qty',v)} />
          <Field label="In-hand by" value={form.deadline} placeholder="14 Nov 2026" onChange={v=>update('deadline',v)} />
        </div>
        <Field label="The brief" rows={5} value={form.brief} placeholder="What's this run for? Any reference images, vendor constraints, or finish notes — write as much or as little as you like." onChange={v=>update('brief',v)} />

        <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(36,36,36,.08)', display: 'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#6E685D' }}>
            <i className="ph ph-clock" style={{ marginRight: 6 }}></i>
            Typical reply · within one business day
          </div>
          <div style={{ display:'flex', gap: 12 }}>
            <Button variant="ghost" onClick={()=>onNavigate('home')}>Cancel</Button>
            <Button variant="primary" icon="paper-plane-right" onClick={()=>setSubmitted(true)}>Send brief</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Quote });
