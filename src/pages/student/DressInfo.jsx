import { useEffect } from 'react'
export default function DressInfo() {
  useEffect(() => { document.title = 'Dress Info | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Dress Info</h2><p>পোশাক নির্দেশিকা</p></div>
        <div className="card" style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <div className="card-body">
            <h3>👔 Uniform Details</h3>
            <p style={{marginTop: '15px'}}><strong>ছাত্র:</strong> সাদা শার্ট + নীল প্যান্ট</p>
            <p><strong>ছাত্রী:</strong> সাদা কামিজ + নীল সালোয়ার ও ওড়না</p>
          </div>
        </div>
      </div>
    </section>
  )
}