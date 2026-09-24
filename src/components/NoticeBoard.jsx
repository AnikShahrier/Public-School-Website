import { Link } from 'react-router-dom'
import notices from '../data/notices.json'

export default function NoticeBoard({ limit, heading }) {
  const list = limit ? notices.slice(0, limit) : notices
  return (
    <div className="notice-board">
      <div className="notice-head">📢 {heading || 'Notice Board'}
        {limit ? <Link to="/notices">সব নোটিশ →</Link> : null}
      </div>
      <ul className="notice-list">
        {list.map((n, i) => (
          <li key={i}>
            <a href={n.file || '#/notices'} {...(n.file ? { target: '_blank', rel: 'noopener' } : {})}>{n.title}</a>
            <span className="date">{n.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
