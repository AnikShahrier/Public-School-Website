import { useEffect } from 'react'
export default function ClassRoutine() {
  useEffect(() => { document.title = 'Class Routine | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Class Routine</h2><p>ক্লাস রুটিন</p></div>
        <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
          <div className="card-body">
            <h3>📅 Shift Routines</h3>
            <p>দিবা শিফট ও প্রভাতী শিফট রুটিন ডাউনলোড করুন:</p>
            <div style={{marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <a className="btn" href="documents/day-shift-routine.pdf">দিবা শিফট রুটিন (PDF)</a>
              <a className="btn" href="documents/morning-shift-routine.pdf">প্রভাতী শিফট রুটিন (PDF)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}