import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ITEMS = [
  { title: 'Academic Fee', desc: 'শ্রেণি ভিত্তিক ফি তালিকা', link: '/academic/fee' },
  { title: 'Book List', desc: 'পাঠ্যবইয়ের তালিকা', link: '/academic/books' },
  { title: 'Syllabus', desc: 'পাঠ্যসূচি ডাউনলোড', link: '/academic/syllabus' },
  { title: 'Holiday List', desc: 'বার্ষিক ছুটির তালিকা', link: '/academic/holiday' },
  { title: 'Academic Calendar', desc: 'একাডেমিক ক্যালেন্ডার', link: '/academic/calendar' },
  { title: 'Notices', desc: 'সাম্প্রতিক নোটিশ বোর্ড', link: '/notices' },
]

export default function Academic() {
  useEffect(() => { document.title = 'Academic Info | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Academic Information</h2><p>একাডেমিক তথ্য ও নথিপত্র</p></div>
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