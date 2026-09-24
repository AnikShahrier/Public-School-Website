import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ITEMS = [
  { title: 'Our Students', desc: 'শিক্ষার্থী পরিসংখ্যান', link: '/student/our-students' },
  { title: 'Dress Info', desc: 'পোশাক নির্দেশিকা', link: '/student/dress-info' },
  { title: 'Online Fees Payment', desc: 'অনলাইনে ফি প্রদান', link: '/student/fees-payment' },
  { title: 'Class Routine', desc: 'দিবা ও প্রভাতী শিফট রুটিন', link: '/student/class-routine' },
  { title: 'Exam Routine', desc: 'পরীক্ষার রুটিন', link: '/student/exam-routine' },
]

export default function Student() {
  useEffect(() => { document.title = 'Student Corner | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Student Corner</h2><p>শিক্ষার্থী প্রয়োজনীয় তথ্য</p></div>
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