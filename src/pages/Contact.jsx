import { useEffect } from 'react'


export default function Contact() {
  useEffect(() => { document.title = 'Contact | Sabuj Kanan School And College' }, [])
  return (<>
    <section><div className="container"><div className="grid grid-2" style={{alignItems:'start'}}>
      <div className="card"><div className="card-body">
        <h3 style={{color:'var(--green-d)',marginBottom:'12px'}}>Contact Information</h3>
        <p>🏫 <b>সবুজ কানন স্কুল এন্ড কলেজ</b></p>
        <p className="text-muted">মুজিব সরক, সিরাজগঞ্জ, বাংলাদেশ</p>
        <p style={{marginTop:'10px'}}>📞 01712748993, 01309128377<br />☎️ +880 751-62086<br />✉️ sabujkanan@gmail.com</p>
        <p style={{marginTop:'10px'}}>🆔 EIIN: 128377<br />📅 Estd. 1980</p>
        <p style={{marginTop:'10px'}}><a href="https://www.facebook.com/sabujkanan1980" target="_blank" rel="noopener">Facebook Page ↗</a></p>
        <hr style={{margin:'18px 0',border:'none',borderTop:'1px solid #e4ece6'}} />
        <h3 style={{color:'var(--green-d)',marginBottom:'10px'}}>Send a Message</h3>
        <form onSubmit={(e) => { e.preventDefault(); alert('Static demo — connect to a form service like Formspree to make this work.') }}>
          <input required placeholder="Your Name" className="form-input" />
          <input required type="email" placeholder="Email" className="form-input" />
          <textarea required placeholder="Message" rows="4" className="form-input" />
          <button className="btn" type="submit">Send</button>
        </form>
      </div></div>
      <div className="card" style={{overflow:'hidden'}}>
        <iframe title="map" className="map-frame" src="https://www.google.com/maps?q=Sabuj+Kanan+School+%26+College+Sirajganj&output=embed" loading="lazy" />
      </div>
    </div></div></section>
  </>)
}
