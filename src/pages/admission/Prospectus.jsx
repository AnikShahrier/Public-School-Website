import { useEffect } from 'react'

export default function Prospectus() {
  useEffect(() => { document.title = 'Prospectus | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Prospectus</h2><p>প্রসপেক্টাস</p></div>
        <div className="card" style={{maxWidth:'600px', margin:'0 auto', textAlign:'center'}}>
          <div className="card-body">
            <h3>📖 Institution Prospectus</h3>
            <p style={{marginTop:'15px'}}>প্রতিষ্ঠানের বিস্তারিত নিয়মকানুন, ভর্তি প্রক্রিয়া, এবং অন্যান্য সকল তথ্য জানতে আমাদের প্রসপেক্টাস ডাউনলোড করুন।</p>
            <div style={{marginTop:'20px'}}>
              <a className="btn" href="documents/prospectus-2026.pdf">Download Prospectus (PDF)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}