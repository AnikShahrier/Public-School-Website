import { useEffect } from 'react'

export default function PublicResults() {
  useEffect(() => { document.title = 'Public Results | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Public Examination Results</h2><p>বোর্ড পরীক্ষার ফলাফল</p></div>
        <table>
          <tbody>
            <tr><th>Exam</th><th>Year</th><th>Pass Rate</th><th>GPA 5</th></tr>
            <tr><td>SSC</td><td>2025</td><td>98.5%</td><td>45</td></tr>
            <tr><td>SSC</td><td>2024</td><td>97.2%</td><td>38</td></tr>
            <tr><td>JSC</td><td>2024</td><td>100%</td><td>60</td></tr>
          </tbody>
        </table>
        <p style={{marginTop:'15px'}}>
          <a className="btn" href="https://eboardresults.com" target="_blank" rel="noopener">Check Board Result ↗</a>
        </p>
      </div>
    </section>
  )
}