import { useEffect } from 'react'

const STAFF = [
  ['…………………', 'Office Assistant', 'Office'],
  ['…………………', 'Lab Attendant', 'Science Lab'],
  ['…………………', 'Security Guard', 'Security'],
]

export default function StaffList() {
  useEffect(() => { document.title = 'Staff List | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Staff List</h2><p>কর্মচারীবৃন্দ</p></div>
        <table>
          <tbody>
            <tr><th>Name</th><th>Designation</th><th>Department</th></tr>
            {STAFF.map(([n, d, dep]) => (
              <tr key={d}><td>{n}</td><td>{d}</td><td>{dep}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}