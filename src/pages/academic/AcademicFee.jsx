import { useEffect } from 'react'
const FEES = ['Play – KG', 'Class I – V', 'Class VI – VIII', 'Class IX – X', 'Class XI – XII']

export default function AcademicFee() {
  useEffect(() => { document.title = 'Academic Fee | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Academic Fee</h2><p>শিক্ষা ফি</p></div>
        <table>
          <tbody>
            <tr><th>Class</th><th>Admission Fee (৳)</th><th>Monthly Fee (৳)</th><th>Session Fee (৳)</th></tr>
            {FEES.map(c => <tr key={c}><td>{c}</td><td>—</td><td>—</td><td>—</td></tr>)}
          </tbody>
        </table>
        <p className="text-muted" style={{marginTop:'10px',fontSize:'.85rem'}}>* ফি হালনাগাদ করুন (update with real data).</p>
      </div>
    </section>
  )
}