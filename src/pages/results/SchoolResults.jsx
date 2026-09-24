import { useEffect } from 'react'

export default function SchoolResults() {
  useEffect(() => { document.title = 'School Results | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Internal School Results</h2><p>অভ্যন্তরীণ পরীক্ষার ফলাফল</p></div>
        <div className="card" style={{maxWidth:'800px', margin:'0 auto'}}>
          <div className="card-body">
            <h3>📝 Class Tests & Annual Exams</h3>
            <p style={{marginTop:'15px'}}>শিক্ষার্থীদের অভিভাবকগণ তাদের সন্তানের অভ্যন্তরীণ পরীক্ষার (বার্ষিক, অর্ধ-বার্ষিক, ও মডেল টেস্ট) ফলাফল সরাসরি অফিস থেকে সংগ্রহ করতে পারবেন অথবা নিচের লিংক থেকে ডাউনলোড করতে পারবেন।</p>
            <div style={{marginTop:'20px'}}>
              <a className="btn" href="documents/internal-results.pdf">Download Result Sheet (PDF)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}