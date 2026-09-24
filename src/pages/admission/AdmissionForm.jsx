import { useEffect } from 'react'

export default function AdmissionForm() {
  useEffect(() => { document.title = 'Admission Form | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Admission Form</h2><p>ভর্তি ফর্ম</p></div>
        <div className="card" style={{maxWidth:'600px', margin:'0 auto', textAlign:'center'}}>
          <div className="card-body">
            <h3>📝 Offline Application Form</h3>
            <p style={{marginTop:'15px'}}>যদি আপনি অফলাইনে আবেদন করতে চান, তবে নিচের লিংক থেকে ফর্মটি ডাউনলোড করে প্রিন্ট করুন অথবা অফিস থেকে সংগ্রহ করুন।</p>
            <div style={{marginTop:'20px'}}>
              <a className="btn" href="documents/admission-form.pdf">Download Form (PDF)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}