import { useEffect } from 'react'

export default function ApplyOnline() {
  useEffect(() => { document.title = 'Apply Online | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Apply Online</h2><p>অনলাইনে আবেদন করুন</p></div>
        <div className="card" style={{maxWidth:'700px', margin:'0 auto', textAlign:'center'}}>
          <div className="card-body" style={{padding:'40px'}}>
            <h3>🌐 Online Admission Portal</h3>
            <p style={{marginTop:'15px'}}>সরাসরি অফিসে না এসে ঘরে বসেই আবেদন ফর্ম পূরণ করুন। আবেদন ফি বিকাশ/নগদের মাধ্যমে পরিশোধ করা যাবে।</p>
            <div style={{marginTop:'25px'}}>
              <a className="btn" href="https://dcampus.info" target="_blank" rel="noopener" style={{background:'var(--green)', color:'#fff'}}>Start Application →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}