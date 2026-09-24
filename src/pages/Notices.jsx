import { useEffect } from 'react'

import NoticeBoard from '../components/NoticeBoard'

export default function Notices() {
  useEffect(() => { document.title = 'Notices | Sabuj Kanan School And College' }, [])
  return (<>

    <section><div className="container">
      <div className="notice-board" style={{maxWidth:'860px',margin:'0 auto'}}>
        <NoticeBoard />
      </div>
      <p className="text-muted" style={{textAlign:'center',marginTop:'14px',fontSize:'.85rem'}}>
        নতুন নোটিশ যোগ করতে <code>src/data/notices.json</code> ফাইল এডিট করুন — কোনো ব্যাকএন্ড লাগবে না।
      </p>
    </div></section>
  </>)
}
