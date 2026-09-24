import { useEffect } from 'react'
import Zoomable from '../../components/Zoomable'

export default function AboutInstitute() {
  useEffect(() => { document.title = 'About Institute | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>About Institute</h2><p>আমাদের সম্পর্কে</p></div>
        <div className="two-col">
          <div>
            <p className="text-muted">সবুজ কানন স্কুল এন্ড কলেজ ১৯৮০ সালে তৎকালীন জেলা প্রশাসক জনাব মোঃ আজিজুল হক ভূঁইয়ার উদ্যোগে একটি প্রাথমিক বিদ্যালয় হিসেবে যাত্রা শুরু করে। ১৯৯৭ সালে এটি মাধ্যমিক বিদ্যালয়ে উন্নীত হয় এবং ২০২১ সালে কলেজ শাখা চালু হয়।</p>
            <p className="text-muted" style={{marginTop:'10px'}}>বর্তমানে প্লে গ্রুপ থেকে দ্বাদশ শ্রেণি পর্যন্ত পাঠদান করা হয়। বালিকাদের জন্য প্রভাতী শিফট এবং বালকদের জন্য দিবা শিফট পরিচালিত হয়। প্রতিষ্ঠানটির EIIN: 128377।</p>
          </div>
          <Zoomable style={{borderRadius:'14px',boxShadow:'var(--shadow)'}} src="assets/img/about.svg" alt="campus" />
        </div>
      </div>
    </section>
  )
}