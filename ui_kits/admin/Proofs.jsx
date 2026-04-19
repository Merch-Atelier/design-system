// Proofs.jsx — proof approval detail
function Proofs() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 28 }}>
      <div>
        <div style={{ background:'#FFFFFF', borderRadius: 10, border:'1px solid rgba(36,36,36,.06)', padding: 4, aspectRatio:'4/3', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset: 4, background: 'linear-gradient(160deg,#E3DED2,#8F887B)', borderRadius: 8, overflow:'hidden' }}>
            <div style={{ position:'absolute', inset:'22% 24% 14% 24%', background:'#4A453E', opacity:.55, borderRadius: '10% 10% 4% 4%' }} />
            <div style={{ position:'absolute', left:'40%', top:'44%', width:'22%', aspectRatio:'3/1', borderRadius: 2, background: '#F5F3ED', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'"Playfair Display", serif', fontStyle:'italic', fontSize: 11, color:'#242424' }}>
              Field &amp; Forth
            </div>
          </div>
          <div style={{ position:'absolute', bottom: 16, left: 16, background: 'rgba(36,36,36,.85)', backdropFilter:'blur(8px)', color:'#F5F3ED', padding:'8px 12px', borderRadius: 6, fontFamily:'Montserrat, sans-serif', fontSize: 11, fontWeight: 600, display:'flex', gap: 10 }}>
            <span>Front</span><span style={{ color:'#8F887B' }}>·</span><span style={{ color:'#BAB3A3' }}>Back</span><span style={{ color:'#8F887B' }}>·</span><span style={{ color:'#BAB3A3' }}>Tag</span>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 10, marginTop: 12 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ aspectRatio:'1', borderRadius: 6, background:'linear-gradient(160deg,#E3DED2,#8F887B)', border: i===0 ? '1px solid #242424' : '1px solid rgba(36,36,36,.12)', opacity: i===0 ? 1 : 0.7, cursor:'pointer' }}/>
          ))}
        </div>

        {/* Comments */}
        <div style={{ marginTop: 28, background:'#FFFFFF', padding: '20px 22px', borderRadius: 10, border:'1px solid rgba(36,36,36,.06)' }}>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, textTransform:'uppercase', letterSpacing:'.12em', color:'#4A453E', marginBottom: 14 }}>Comments · 2</div>
          <div style={{ display:'flex', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 28, height: 28, borderRadius:'50%', background:'#8C7A65', color:'#F5F3ED', fontSize:11, fontWeight: 700, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Montserrat, sans-serif', flexShrink: 0 }}>NV</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:12, color:'#6E685D' }}><strong style={{ color:'#242424', fontWeight: 600 }}>Noa Vance</strong> · Designer · 2h ago</div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:13, color:'#4A453E', lineHeight:1.55, marginTop: 4 }}>Proof attached at 240 gsm on the Carbon colorway. Mark sits 3.5" from neckline. Let me know if you'd like to see a second color variation before production.</div>
            </div>
          </div>
          <div style={{ display:'flex', gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius:'50%', background:'#E3DED2', color:'#242424', fontSize:11, fontWeight: 700, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Montserrat, sans-serif', flexShrink: 0 }}>EM</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:12, color:'#6E685D' }}><strong style={{ color:'#242424', fontWeight: 600 }}>Eliza Marsh</strong> · Client · 20m ago</div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:13, color:'#4A453E', lineHeight:1.55, marginTop: 4 }}>Love it. Could we try the mark a touch smaller — maybe 3 inches? Otherwise ready to approve.</div>
            </div>
          </div>
          <div style={{ marginTop: 18, padding: '12px 14px', background:'#F5F3ED', borderRadius: 6, fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#6E685D' }}>
            Add a comment…
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        <div style={{ background:'#FFFFFF', padding: '22px 24px', borderRadius: 10, border:'1px solid rgba(36,36,36,.06)' }}>
          <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize: 11, color:'#6E685D' }}>PROOF-2608</span>
          <h2 style={{ fontFamily:'"Playfair Display", serif', fontWeight:400, fontSize: 30, margin:'8px 0 0', lineHeight: 1.15 }}>Heavyweight <em style={{ fontStyle:'italic', color:'#8C7A65', fontWeight:400 }}>Tee</em></h2>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#6E685D', marginTop: 6 }}>Field &amp; Forth Coffee · MA-2608</div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16, marginTop: 20, paddingTop: 20, borderTop:'1px solid rgba(36,36,36,.06)' }}>
            {[
              { l:'Run size', v:'250 pcs' },
              { l:'Colorway', v:'Carbon' },
              { l:'Imprint',  v:'1 color, front' },
              { l:'Vendor',   v:'Boro Mill' },
              { l:'Quoted',   v:'$4,480' },
              { l:'In-hand',  v:'14 Nov 2026' },
            ].map(f => (
              <div key={f.l}>
                <div style={{ fontFamily:'Montserrat, sans-serif', fontWeight:700, fontSize: 10, textTransform:'uppercase', letterSpacing:'.12em', color:'#8F887B' }}>{f.l}</div>
                <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 13, color:'#242424', marginTop: 4, fontWeight: 500 }}>{f.v}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop:'1px solid rgba(36,36,36,.06)', display:'flex', flexDirection:'column', gap: 10 }}>
            <Button variant="primary" icon="check" style={{ justifyContent:'center' }}>Approve &amp; release to production</Button>
            <Button variant="secondary" icon="arrow-u-up-left" style={{ justifyContent:'center' }}>Request revision</Button>
            <Button variant="ghost" icon="download-simple">Download proof PDF</Button>
          </div>
        </div>

        {/* Activity */}
        <div style={{ marginTop: 20, background:'#FFFFFF', padding: '20px 24px', borderRadius: 10, border:'1px solid rgba(36,36,36,.06)' }}>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, textTransform:'uppercase', letterSpacing:'.12em', color:'#4A453E', marginBottom: 14 }}>Activity</div>
          {[
            { t:'Proof sent to client', d:'2h ago',  dot:'#5B7B95' },
            { t:'Vendor confirmed slot', d:'Yesterday', dot:'#6F8452' },
            { t:'Quote accepted',        d:'03 Oct',   dot:'#6F8452' },
            { t:'Brief received',        d:'01 Oct',   dot:'#6E685D' },
          ].map((a, i) => (
            <div key={i} style={{ display:'flex', gap: 12, padding: '8px 0', borderTop: i===0 ? 'none' : '1px solid rgba(36,36,36,.05)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: a.dot, marginTop: 7, flexShrink: 0 }} />
              <div style={{ flex: 1, fontFamily:'Montserrat, sans-serif', fontSize: 12, color:'#242424' }}>{a.t}</div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize: 11, color:'#8F887B' }}>{a.d}</div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

Object.assign(window, { Proofs });
