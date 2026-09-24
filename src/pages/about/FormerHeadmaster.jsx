import { useEffect } from 'react'

export default function FormerHeadmaster() {
  useEffect(() => { document.title = 'Former Headmaster | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Former Headmaster</h2><p>প্রাক্তন প্রধান শিক্ষকবৃন্দ</p></div>
        <table>
          <tbody>
            <tr><th>#</th><th>নাম</th><th>কর্মকাল</th></tr>
            <tr><td>01</td><td>জনাব …………………</td><td>১৯৮০–১৯৯০</td></tr>
            <tr><td>02</td><td>জনাব …………………</td><td>১৯৯০–২০০০</td></tr>
            <tr><td>03</td><td>জনাব …………………</td><td>২০০০–২০১০</td></tr>
            <tr><td>04</td><td>জনাব …………………</td><td>২০১০–বর্তমান</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}