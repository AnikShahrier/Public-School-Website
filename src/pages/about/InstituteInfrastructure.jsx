import { useEffect } from 'react'

const INFRA = [
  ['about.svg', 'Academic Building', 'তিনতলা একাডেমিক ভবন।'],
  ['playground.svg', 'Playground', 'বহুমুখী খেলার মাঠ।'],
  ['library.svg', 'Library & Labs', 'পাঠাগার ও আধুনিক ল্যাবসমূহ।'],
]

export default function InstituteInfrastructure() {
  useEffect(() => { document.title = 'Infrastructure | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Institute Infrastructure</h2><p>ভবন ও অবকাঠামো</p></div>
        <div className="grid grid-3">
          {INFRA.map(([img, h, p]) => (
            <div className="card" key={h}>
              <img src={'assets/img/' + img} alt="" />
              <div className="card-body"><h3>{h}</h3><p>{p}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}