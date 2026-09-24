import { useEffect } from 'react'

const TEACHERS = [
  ['t1.svg', 'Md. Masud Alam', 'Principal (ভারপ্রাপ্ত)', '—'],
  ['t2.svg', '…………………', 'Assistant Teacher', 'Mathematics'],
  ['t3.svg', '…………………', 'Assistant Teacher', 'English'],
  ['t4.svg', '…………………', 'Assistant Teacher', 'Science'],
]

export default function TeachersList() {
  useEffect(() => { document.title = 'Teachers List | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Teachers List</h2><p>শিক্ষকমণ্ডলী</p></div>
        <table>
          <tbody>
            <tr><th>Photo</th><th>Name</th><th>Designation</th><th>Subject</th></tr>
            {TEACHERS.map(([img, n, d, s]) => (
              <tr key={n}>
                <td><img src={'assets/img/' + img} width="44" style={{borderRadius:'8px'}} alt="" /></td>
                <td>{n}</td><td>{d}</td><td>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}