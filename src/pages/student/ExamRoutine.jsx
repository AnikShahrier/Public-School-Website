import { useEffect } from 'react'
export default function ExamRoutine() {
  useEffect(() => { document.title = 'Exam Routine | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Exam Routine</h2><p>পরীক্ষার রুটিন</p></div>
        <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
          <div className="card-body">
            <h3>📝 Examination Schedules</h3>
            <p>বার্ষিক / নির্বাচনি পরীক্ষার রুটিন ডাউনলোড করুন:</p>
            <div style={{marginTop: '15px'}}>
              <a className="btn" href="documents/exam-routine.pdf">Exam Routine PDF ↓</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}