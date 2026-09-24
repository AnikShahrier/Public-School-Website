import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import NoticeBoard from '../components/NoticeBoard'
import Counter from '../components/Counter'

const WHY = [
  ['👨‍🏫 অভিজ্ঞ শিক্ষক', 'দক্ষ ও প্রশিক্ষিত শিক্ষকমণ্ডলী'],
  ['🔬 আধুনিক ল্যাব', 'পদার্থ, রসায়ন, জীববিজ্ঞান ও কম্পিউটার ল্যাব'],
  ['🏆 কৃতিত্ব', 'বোর্ড পরীক্ষায় ধারাবাহিক সাফল্য'],
  ['🛡️ নিরাপদ পরিবেশ', 'শৃঙ্খলা, সহশিক্ষা ও সহপাঠ কার্যক্রম'],
]

const FACILITIES = [
  ['science-lab.svg', 'Science Lab', 'সমৃদ্ধ পদার্থ, রসায়ন ও জীববিজ্ঞান বিজ্ঞানাগার।'],
  ['computer-lab.svg', 'Computer Lab', 'আধুনিক কম্পিউটার ও আইসিটি প্রশিক্ষণ সুবিধা।'],
  ['library.svg', 'Library', 'সমৃদ্ধ পাঠাগারে হাজারো বই ও পত্র-পত্রিকা।'],
  ['playground.svg', 'Playground', 'বহুমুখী খেলার মাঠ ও বার্ষিক ক্রীড়া প্রতিযোগিতা।'],
  ['transport.svg', 'Transportation', 'নিরাপদ পরিবহন ব্যবস্থা।'],
  ['indoor.svg', 'Indoor Playground', 'আবহাওয়া-নিরপেক্ষ অনুশীলনের সুবিধা।'],
]

const LINKS = [
  ['Dcampus', 'https://dcampus.info'],
  ['মাধ্যমিক ও উচ্চশিক্ষা বোর্ড', 'https://www.educationboard.gov.bd'],
  ['মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর', 'https://dshe.gov.bd'],
  ['BANBEIS', 'https://banbeis.gov.bd'],
  ['শিক্ষা মন্ত্রণালয়', 'https://moedu.gov.bd'],
  ['শিক্ষা বোর্ড ফলাফল', 'https://www.eboardresults.com'],
]

export default function Home() {
  useEffect(() => { document.title = 'Home | Sabuj Kanan School And College' }, [])
  return (<>
    <Hero />

    <section><div className="container">
      <div className="grid grid-2" style={{alignItems:'start'}}>
        <NoticeBoard limit heading="Latest Notices" />
        <div>
          <h2 style={{color:'var(--green-d)',marginBottom:'12px'}}>About Institute</h2>
          <p className="text-muted">সবুজ কানন স্কুল এন্ড কলেজ ১৯৮০ সালে তৎকালীন জেলা প্রশাসক জনাব মোঃ আজিজুল হক ভূঁইয়ার উদ্যোগে প্রতিষ্ঠিত হয়। ১৯৯৭ সালে মাধ্যমিক বিদ্যালয়ে উন্নীত হয় এবং ২০২১ সালে কলেজ শাখা যুক্ত হয়। বর্তমানে প্লে গ্রুপ থেকে দ্বাদশ শ্রেণি পর্যন্ত প্রায় ৩,৮০০ শিক্ষার্থী পড়াশোনা করছে। বালিকাদের জন্য প্রভাতী শিফট ও বালকদের জন্য দিবা শিফট চালু রয়েছে।</p>
          <p className="text-muted" style={{marginTop:'10px'}}>EIIN: 128377 | ঠিকানা: মুজিব সরক, সিরাজগঞ্জ</p>
          <Link className="btn" style={{marginTop:'16px'}} to="/about">বিস্তারিত</Link>
        </div>
      </div>
    </div></section>

    <section className="alt"><div className="container">
      <div className="section-title"><h2>Messages</h2><p>আমাদের নেতৃত্বের বার্তা</p></div>
      <div className="msg-grid">
        <div className="msg-card"><img src="assets/img/chairman.svg" alt="chairman" />
          <div><h3>Chairman's Message</h3><div className="desig">মুহাম্মদ নজরুল ইসলাম, জেলা প্রশাসক ও জেলা ম্যাজিস্ট্রেট, সিরাজগঞ্জ</div>
          <p>"শিক্ষাই জাতির মেরুদণ্ড। সবুজ কানন স্কুল এন্ড কলেজ আধুনিক শিক্ষা ও নৈতিক মূল্যবোধে শিক্ষার্থীদের গড়ে তুলতে নিরলসভাবে কাজ করছে..." <Link to="/about" style={{color:'var(--green)',fontWeight:600}}>Read More →</Link></p></div></div>
        <div className="msg-card"><img src="assets/img/principal.svg" alt="principal" />
          <div><h3>Principal's Message</h3><div className="desig">Md. Masud Alam (ভারপ্রাপ্ত), Principal</div>
          <p>"আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীকে জ্ঞান, দক্ষতা ও মানবিক মূল্যবোধে সমৃদ্ধ একজন নাগরিক হিসেবে গড়ে তোলা..." <Link to="/about" style={{color:'var(--green)',fontWeight:600}}>Read More →</Link></p></div></div>
      </div>
    </div></section>

    <section><div className="container">
      <div className="section-title"><h2>Why Study Here</h2><p>কেন সবুজ কাননে পড়বেন</p></div>
      <div className="grid grid-4">
        {WHY.map(([h, p]) => (
          <div className="card" key={h}><div className="card-body" style={{textAlign:'center'}}><h3>{h}</h3><p>{p}</p></div></div>
        ))}
      </div>
    </div></section>

    {/* <section className="stats"><div className="container"><div className="grid grid-4">
      <div><Counter to={3800} /><p>Students</p></div>
      <div><Counter to={120} /><p>Teachers &amp; Staff</p></div>
      <div><Counter to={45} /><p>Years of Excellence</p></div>
      <div><Counter to={98} /><p>SSC Pass Rate (%)</p></div>
    </div></div></section> */}

    <section><div className="container">
      <div className="section-title"><h2>Our Facilities</h2><p>আমাদের সুযোগ-সুবিধা</p></div>
      <div className="grid grid-3">
        {FACILITIES.map(([img, h, p]) => (
          <div className="card" key={h}><img src={'assets/img/' + img} alt="" /><div className="card-body">
            <h3>{h}</h3><p>{p}</p>
            <Link style={{color:'var(--green)',fontWeight:600}} to="/facilities">Learn More →</Link></div></div>
        ))}
      </div>
    </div></section>

    <section><div className="container">
      <div className="notice-cta" style={{padding:'44px 24px'}}>
        <h3>ভর্তি চলছে ২০২৬ — Admission Open</h3>
        <p style={{marginBottom:'18px'}}>প্লে থেকে নবম শ্রেণি ও একাদশ শ্রেণিতে ভর্তি আবেদন চলছে।</p>
        <Link className="btn" style={{background:'var(--gold)',color:'#4a2c00'}} to="/admission#apply">Apply Online</Link>
        <Link className="btn btn-outline" style={{borderColor:'#fff',color:'#fff',marginLeft:'10px'}} to="/admission#info">Admission Information</Link>
      </div>
    </div></section>

    <section className="alt"><div className="container">
      <div className="section-title"><h2>Gallery</h2><p>আমাদের কার্যক্রমের কিছু মুহূর্ত</p></div>
      <div className="gal">
        {[1,2,3,4,5,6].map(n => <img key={n} src={'assets/img/g' + n + '.svg'} alt="" />)}
      </div>
      <div style={{textAlign:'center',marginTop:'24px'}}><Link className="btn" to="/gallery">সব ছবি দেখুন</Link></div>
    </div></section>

    <section><div className="container">
      <div className="section-title"><h2>Important Links</h2><p>গুরুত্বপূর্ণ ওয়েবসাইট</p></div>
      <div className="links-row">
        {LINKS.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noopener">{label}</a>)}
      </div>
    </div></section>
  </>)
}
