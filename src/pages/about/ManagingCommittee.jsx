import { useEffect } from 'react'

const COMMITTEE = [
  ['t1.svg', 'সভাপতি', 'জেলা প্রশাসক, সিরাজগঞ্জ'],
  ['t2.svg', 'সদস্য সচিব', 'প্রধান শিক্ষক'],
  ['t3.svg', 'সদস্য', 'অভিভাবক প্রতিনিধি'],
  ['t4.svg', 'সদস্য', 'শিক্ষক প্রতিনিধি'],
]

export default function ManagingCommittee() {
  useEffect(() => { document.title = 'Managing Committee | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Managing Committee</h2><p>পরিচালনা পর্ষদ</p></div>
        <div className="grid grid-4">
          {COMMITTEE.map(([img, h, p]) => (
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