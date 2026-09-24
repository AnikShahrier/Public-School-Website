import { useEffect } from 'react'

export default function Library() {
  useEffect(() => { document.title = 'Library | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Library</h2><p>পাঠাগার</p></div>
        <div className="card" style={{maxWidth:'800px', margin:'0 auto'}}>
          <div className="card-body">
            <h3>📚 Knowledge Hub</h3>
            <p style={{marginTop:'15px'}}>আমাদের সমৃদ্ধ পাঠাগারে রয়েছে হাজারো বই, পত্র-পত্রিকা, রেফারেন্স বুক এবং সাহিত্য সম্ভার। শিক্ষার্থীদের পড়াশোনার পাশাপাশি জ্ঞান পিপাসা মেটাতে এই পাঠাগার সবসময় উন্মুক্ত থাকে।</p>
            <ul style={{marginTop:'15px', paddingLeft:'20px', lineHeight:'1.8'}}>
              <li>একাডেমিক টেক্সট বুক ও গাইড</li>
              <li>জাতীয় ও আন্তর্জাতিক পত্রিকা</li>
              <li>সাধারণ জ্ঞান ও বিজ্ঞান বিষয়ক বই</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}