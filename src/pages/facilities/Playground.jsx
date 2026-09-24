import { useEffect } from 'react'

export default function Playground() {
  useEffect(() => { document.title = 'Playground | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Playground</h2><p>খেলার মাঠ</p></div>
        <div className="two-col">
          <img src="assets/img/playground.svg" alt="Playground" style={{borderRadius:'14px', boxShadow:'var(--shadow)'}} />
          <div>
            <p className="text-muted">শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশে খেলার মাঠের বিকল্প নেই। আমাদের বিশাল ও সবুজ খেলার মাঠে শিক্ষার্থীরা ফুটবল, ক্রিকেট, ব্যাডমিন্টন এবং অন্যান্য খেলাধুলায় অংশ নেয়।</p>
            <p className="text-muted" style={{marginTop:'10px'}}>প্রতি বছর এখানে বার্ষিক ক্রীড়া প্রতিযোগিতা ও স্কাউটিং কার্যক্রম আয়োজন করা হয়।</p>
          </div>
        </div>
      </div>
    </section>
  )
}