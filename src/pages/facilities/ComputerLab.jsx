import { useEffect } from 'react'

export default function ComputerLab() {
  useEffect(() => { document.title = 'Computer Lab | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Computer & ICT Lab</h2><p>কম্পিউটার ও আইসিটি ল্যাব</p></div>
        <div className="two-col">
          <div>
            <p className="text-muted">আমাদের প্রতিষ্ঠানে রয়েছে অত্যাধুনিক কম্পিউটার ল্যাব। শিক্ষার্থীদের বাস্তবসম্মত আইসিটি (ICT) শিক্ষা প্রদানের জন্য উচ্চ গতির ইন্টারনেট, প্রজেক্টর এবং সর্বশেষ কনফিগারেশনের কম্পিউটার রয়েছে।</p>
            <p className="text-muted" style={{marginTop:'10px'}}>এখানে শিক্ষার্থীদের প্রোগ্রামিং, অফিস অটোমেশন এবং ইন্টারনেট ব্রাউজিং সম্পর্কে হাতে-কলমে প্রশিক্ষণ দেওয়া হয়।</p>
          </div>
          <img src="assets/img/computer-lab.svg" alt="Computer Lab" style={{borderRadius:'14px', boxShadow:'var(--shadow)'}} />
        </div>
      </div>
    </section>
  )
}