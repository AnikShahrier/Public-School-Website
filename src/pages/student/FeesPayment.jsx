import { useEffect } from 'react'
export default function FeesPayment() {
  useEffect(() => { document.title = 'Online Fees Payment | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Online Fees Payment</h2><p>অনলাইন ফি প্রদান</p></div>
        <div className="card" style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <div className="card-body">
            <h3>💳 Payment Methods</h3>
            <p style={{marginTop: '15px'}}>বিকাশ / নগদ: <strong>017XXXXXXXX</strong></p>
            <p>Student ID উল্লেখ করে ফি প্রদান করুন।</p>
            <p className="text-muted" style={{marginTop: '10px'}}>বিস্তারিত তথ্যের জন্য অফিসে যোগাযোগ করুন।</p>
          </div>
        </div>
      </div>
    </section>
  )
}