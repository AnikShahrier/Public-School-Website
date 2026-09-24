import { useEffect } from 'react'
const SYLLABUS = [
  ['Class VI', 'সমাপনী সিলেবাস', 'documents/syllabus-6.pdf'],
  ['Class VII', 'সমাপনী সিলেবাস', 'documents/syllabus-7.pdf'],
  ['Class VIII', 'জেএসসি সিলেবাস', 'documents/syllabus-8.pdf'],
  ['Class IX–X', 'এসএসসি সিলেবাস', 'documents/syllabus-9.pdf'],
  ['Class XI–XII', 'এইচএসসি সিলেবাস', 'documents/syllabus-11.pdf'],
]

export default function Syllabus() {
  useEffect(() => { document.title = 'Syllabus | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Syllabus</h2><p>পাঠ্যসূচি</p></div>
        <table>
          <tbody>
            <tr><th>Class</th><th>Syllabus</th><th>Download</th></tr>
            {SYLLABUS.map(([c, s, f]) => (
              <tr key={c}>
                <td>{c}</td><td>{s}</td>
                <td><a style={{color:'var(--green)',fontWeight:600}} href={f}>PDF ↓</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}