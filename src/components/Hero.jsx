import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SLIDES = [
  { img: 'assets/img/hero1.svg', title: 'স্বাগতম — সবুজ কানন স্কুল এন্ড কলেজ', link: '/about', btn: 'আরও জানুন' },
  { img: 'assets/img/hero2.svg', title: '১৯৮০ সাল থেকে মানসম্মত শিক্ষা', link: '/academic', btn: 'একাডেমিক তথ্য' },
  { img: 'assets/img/hero3.svg', title: 'ভর্তি চলছে ২০২৬', link: '/admission', btn: 'Apply Now' },
]

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="hero">
      <div className="slides" style={{ transform: 'translateX(-' + i * 100 + '%)' }}>
        {SLIDES.map(s => (
          <div className="slide" key={s.img}>
            <img src={s.img} alt="" />
            <div className="slide-caption">
              <h2>{s.title}</h2>
              <Link className="btn" to={s.link}>{s.btn}</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {SLIDES.map((s, idx) => (
          <button key={s.img} className={idx === i ? 'active' : ''} onClick={() => setI(idx)} aria-label={'slide ' + (idx + 1)} />
        ))}
      </div>
    </div>
  )
}
