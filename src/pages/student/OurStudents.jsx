import { useEffect } from 'react'
export default function OurStudents() {
  useEffect(() => { document.title = 'Our Students | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Our Students</h2><p>শিক্ষার্থী তথ্য</p></div>
        <div className="card" style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <div className="card-body">
            <h3>📊 Student Statistics</h3>
            <p style={{fontSize: '1.2rem', marginTop: '15px'}}>মোট শিক্ষার্থী: <strong>৩,৮০০+</strong></p>
            <p>বালক: ২,০০০ | বালিকা: ১,৮০০</p>
          </div>
        </div>
      </div>
    </section>
  )
}