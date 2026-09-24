import { useEffect } from 'react'
const HOLIDAYS = [
  ['১৬ ফেব্রুয়ারি', 'শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস', '১ দিন'],
  ['১৭ মার্চ', 'জাতির পিতার জন্মবার্ষিকী', '১ দিন'],
  ['১৪ এপ্রিল', 'পহেলা বৈশাখ', '১ দিন'],
  ['—', 'ঈদুল ফিতর / ঈদুল আজহা', '—'],
  ['১৬ ডিসেম্বর', 'বিজয় দিবস', '১ দিন'],
  ['২৫ ডিসেম্বর', 'শিশু দিবস / বড়দিন', '১ দিন'],
]

export default function HolidayList() {
  useEffect(() => { document.title = 'Holiday List | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Holiday List 2026</h2><p>ছুটির তালিকা</p></div>
        <table>
          <tbody>
            <tr><th>Date</th><th>Occasion</th><th>Days</th></tr>
            {HOLIDAYS.map(([d, o, d2]) => <tr key={o}><td>{d}</td><td>{o}</td><td>{d2}</td></tr>)}
          </tbody>
        </table>
        <p style={{marginTop:'10px'}}><a className="btn" href="documents/holiday-list-2026.pdf">Full PDF Download</a></p>
      </div>
    </section>
  )
}