import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ITEMS = [
  { title: 'Public Results', desc: 'বোর্ড পরীক্ষার ফলাফল', link: '/results/public' },
  { title: 'School Results', desc: 'অভ্যন্তরীণ পরীক্ষার ফলাফল', link: '/results/school' },
]

export default function Results() {
  useEffect(() => { document.title = 'Results | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Examination Results</h2><p>পরীক্ষার ফলাফল</p></div>
        <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {ITEMS.map(item => (
            <Link key={item.link} to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ height: '100%', transition: 'transform 0.2s', cursor: 'pointer' }}>
                <div className="card-body" style={{ textAlign: 'center' }}>
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