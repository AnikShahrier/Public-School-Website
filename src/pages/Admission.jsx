import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ITEMS = [
  { title: 'Admission Information', desc: 'ভর্তি সংক্রান্ত বিস্তারিত তথ্য', link: '/admission/info' },
  { title: 'Apply Online', desc: 'অনলাইনে আবেদন করুন', link: '/admission/apply' },
  { title: 'Prospectus', desc: 'প্রতিষ্ঠানের প্রসপেক্টাস', link: '/admission/prospectus' },
  { title: 'Admission Form', desc: 'ভর্তি ফর্ম ডাউনলোড', link: '/admission/form' },
]

export default function Admission() {
  useEffect(() => { document.title = 'Admission | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Admission</h2><p>ভর্তি সংক্রান্ত তথ্য</p></div>
        <div className="grid grid-4">
          {ITEMS.map(item => (
            <Link key={item.link} to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ height: '100%', transition: 'transform 0.2s', cursor: 'pointer' }}>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span style={{ color: 'var(--green)', fontWeight: 600 }}>View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}