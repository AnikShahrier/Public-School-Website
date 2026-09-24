import { useEffect } from 'react'

export default function AdmissionInfo() {
  useEffect(() => { document.title = 'Admission Info | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Admission Information</h2><p>ভর্তি সংক্রান্ত তথ্য</p></div>
        <div className="two-col">
          <div>
            <h3 style={{color:'var(--green-d)'}}>ভর্তি বিজ্ঞপ্তি ২০২৬</h3>
            <p className="text-muted" style={{marginTop:'10px'}}>সবুজ কানন স্কুল এন্ড কলেজে নিম্নলিখিত শ্রেণিগুলোতে ভর্তি চলছে:</p>
            <ul style={{marginTop:'10px', paddingLeft:'20px', lineHeight:'1.8'}}>
              <li>প্লে গ্রুপ থেকে নার্সারি</li>
              <li>শ্রেণি ১ থেকে ৯ম শ্রেণি</li>
              <li>একাদশ শ্রেণি (বিজ্ঞান / মানবিক / ব্যবসায় শিক্ষা)</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>📋 প্রয়োজনীয় কাগজপত্র</h3>
              <ul style={{marginTop:'10px', paddingLeft:'20px', lineHeight:'1.8'}}>
                <li>পাসপোর্ট সাইজের ছবি (৩ কপি)</li>
                <li>জন্মনিবন্ধন সনদের ফটোকপি</li>
                <li>অভিভাবকের এনআইডি কার্ডের ফটোকপি</li>
                <li>পূর্ববর্তী পরীক্ষার মার্কশিট (যদি থাকে)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}