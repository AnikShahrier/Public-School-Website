import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Zoomable from '../components/Zoomable'

// Links to the detailed sub-pages we created
const ABOUT_LINKS = [
  { title: 'Former Headmaster', desc: 'প্রাক্তন প্রধান শিক্ষকবৃন্দ', link: '/about/former-headmaster' },
  { title: 'Managing Committee', desc: 'পরিচালনা পর্ষদ', link: '/about/managing-committee' },
  { title: 'Teachers List', desc: 'শিক্ষকমণ্ডলী', link: '/about/teachers' },
  { title: 'Staff List', desc: 'কর্মচারীবৃন্দ', link: '/about/staff' },
  { title: 'Infrastructure', desc: 'ভবন ও অবকাঠামো', link: '/about/infrastructure' },
  { title: 'Mission & Vision', desc: 'লক্ষ্য ও উদ্দেশ্য', link: '/about/mission-vision' },
  { title: 'Why Study Here', desc: 'কেন সবুজ কাননে পড়বেন', link: '/about/why-study-here' },
]

export default function About() {
  useEffect(() => { document.title = 'About Us | Sabuj Kanan School And College' }, [])
  
  return (
    <>
      {/* 1. Basic Campus Overview at the top */}
      <section style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h2>About Institute</h2>
            <p>আমাদের সম্পর্কে সংক্ষিপ্ত পরিচিতি</p>
          </div>
          <div className="two-col">
            <div>
              <p className="text-muted">
                সবুজ কানন স্কুল এন্ড কলেজ ১৯৮০ সালে তৎকালীন জেলা প্রশাসক জনাব মোঃ আজিজুল হক ভূঁইয়ার উদ্যোগে একটি প্রাথমিক বিদ্যালয় হিসেবে যাত্রা শুরু করে। ১৯৯৭ সালে এটি মাধ্যমিক বিদ্যালয়ে উন্নীত হয় এবং ২০২১ সালে কলেজ শাখা চালু হয়।
              </p>
              <p className="text-muted" style={{marginTop:'10px'}}>
                বর্তমানে প্লে গ্রুপ থেকে দ্বাদশ শ্রেণি পর্যন্ত পাঠদান করা হয়। বালিকাদের জন্য প্রভাতী শিফট এবং বালকদের জন্য দিবা শিফট পরিচালিত হয়। প্রতিষ্ঠানটির EIIN: 128377।
              </p>
              <Link className="btn" to="/admission/info" style={{marginTop:'16px'}}>ভর্তি তথ্য দেখুন</Link>
            </div>
            <Zoomable style={{borderRadius:'14px', boxShadow:'var(--shadow)'}} src="assets/img/about.svg" alt="campus" />
          </div>
        </div>
      </section>

      {/* 2. Grid of Links to Detailed Sub-Pages */}
      <section className="alt">
        <div className="container">
          <div className="section-title">
            <h2>Explore More</h2>
            <p>বিস্তারিত তথ্যের জন্য নিচের অপশনগুলো দেখুন</p>
          </div>
          <div className="grid grid-3">
            {ABOUT_LINKS.map((item) => (
              <Link 
                key={item.link} 
                to={item.link} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="card" style={{ height: '100%', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>
                  <div className="card-body">
                    <h3 style={{marginBottom: '8px'}}>{item.title}</h3>
                    <p className="text-muted">{item.desc}</p>
                    <span style={{ color: 'var(--green)', fontWeight: 600, marginTop: '12px', display: 'inline-block' }}>
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}