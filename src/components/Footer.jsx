import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer><div className="container">
      <div className="foot-grid">
        <div><h4>সবুজ কানন স্কুল এন্ড কলেজ</h4>
          <p style={{fontSize:'.9rem'}}>১৯৮০ সালে প্রতিষ্ঠিত। প্লে থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষা কার্যক্রম পরিচালিত হয়। প্রভাতী শিফট (বালিকা) ও দিবা শিফট (বালক)।</p></div>
        <div><h4>Quick Links</h4><ul>
          <li><Link to="/about">About Us</Link></li><li><Link to="/admission">Admission</Link></li>
          <li><Link to="/notices">Notices</Link></li><li><Link to="/results">Results</Link></li>
          <li><Link to="/gallery">Gallery</Link></li></ul></div>
        <div><h4>Academic</h4><ul>
          <li><Link to="/academic#class-routine">Class Routine</Link></li>
          <li><Link to="/academic#calendar">Academic Calendar</Link></li>
          <li><Link to="/academic#syllabus">Syllabus</Link></li>
          <li><Link to="/academic#books">Book List</Link></li></ul></div>
        <div><h4>Contact</h4><ul>
          <li>📍 মুজিব সরক, সিরাজগঞ্জ</li><li>📞 01712748993</li>
          <li>📞 +880 751-62086</li><li>✉️ sabujkanan@gmail.com</li>
          <li><a href="https://www.facebook.com/sabujkanan1980" target="_blank" rel="noopener">Facebook Page ↗</a></li></ul></div>
      </div>
      <div className="foot-bottom">© 2026 Sabuj Kanan School And College — All Rights Reserved | React remake</div>
    </div></footer>
  )
}
