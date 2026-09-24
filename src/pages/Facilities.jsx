import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ITEMS = [
  { title: 'Science Lab', desc: 'পদার্থ, রসায়ন ও জীববিজ্ঞান ল্যাব', link: '/facilities/science-lab' },
  { title: 'Computer Lab', desc: 'আধুনিক কম্পিউটার ও আইসিটি ল্যাব', link: '/facilities/computer-lab' },
  { title: 'Library', desc: 'সমৃদ্ধ পাঠাগার', link: '/facilities/library' },
  { title: 'Playground', desc: 'বহুমুখী খেলার মাঠ', link: '/facilities/playground' },
  { title: 'Transportation', desc: 'নিরাপদ পরিবহন ব্যবস্থা', link: '/facilities/transportation' },
  { title: 'Indoor Playground', desc: 'আবহাওয়া-নিরপেক্ষ ইনডোর গেমস', link: '/facilities/indoor-playground' },
]

export default function Facilities() {
  useEffect(() => { document.title = 'Facilities | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Our Facilities</h2><p>আমাদের সুযোগ-সুবিধা</p></div>
        <div className="grid grid-3">
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