import { useEffect } from 'react'

export default function Transportation() {
  useEffect(() => { document.title = 'Transportation | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Transportation</h2><p>পরিবহন ব্যবস্থা</p></div>
        <div className="card" style={{maxWidth:'800px', margin:'0 auto'}}>
          <div className="card-body">
            <h3>🚌 Safe & Secure Transport</h3>
            <p style={{marginTop:'15px'}}>শিক্ষার্থীদের নিরাপদে স্কুলে আনা-নেওয়ার জন্য আমরা বিশেষায়িত স্কুল বাস ও ভ্যান ব্যবস্থা পরিচালনা করি। অভিজ্ঞ ড্রাইভার ও প্রশিক্ষিত স্টাফদের তত্ত্বাবধানে এই পরিবহন সেবা প্রদান করা হয়।</p>
            <p className="text-muted" style={{marginTop:'10px'}}>রুটের বিস্তারিত তথ্য ও ভাড়ার জন্য অফিসে যোগাযোগ করুন।</p>
          </div>
        </div>
      </div>
    </section>
  )
}