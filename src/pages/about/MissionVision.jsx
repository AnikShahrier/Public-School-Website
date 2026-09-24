import { useEffect } from 'react'

export default function MissionVision() {
  useEffect(() => { document.title = 'Mission & Vision | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Mission & Vision</h2><p>লক্ষ্য ও উদ্দেশ্য</p></div>
        <div className="grid grid-2">
          <div className="card">
            <div className="card-body">
              <h3>🎯 Our Mission</h3>
              <p>মানসম্মত শিক্ষার মাধ্যমে শিক্ষার্থীদের জ্ঞান, দক্ষতা ও নৈতিক মূল্যবোধে সমৃদ্ধ করে দেশসেরা নাগরিক হিসেবে গড়ে তোলা।</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>🔭 Our Vision</h3>
              <p>আধুনিক প্রযুক্তিনির্ভর, অনুশাসন ও মানবিক মূল্যবোধসম্পন্ন একটি আদর্শ শিক্ষা প্রতিষ্ঠানে পরিণত হওয়া।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}