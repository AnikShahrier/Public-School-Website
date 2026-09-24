import { useEffect } from 'react'

export default function AcademicCalendar() {
  useEffect(() => { document.title = 'Academic Calendar | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Academic Calendar 2026</h2><p>একাডেমিক ক্যালেন্ডার</p></div>
        <div style={{textAlign:'center', padding: '40px 0'}}>
          <p style={{marginBottom: '20px'}}>Download the full academic calendar for the year 2026.</p>
          <a className="btn" href="documents/academic-calendar-2026.pdf">Download Calendar (PDF)</a>
        </div>
      </div>
    </section>
  )
}