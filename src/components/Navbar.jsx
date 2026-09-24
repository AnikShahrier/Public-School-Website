import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us ▾', to: '/about', drop: [
    ['About Institute', '/about/institute'],
    ['Former Headmaster', '/about/former-headmaster'],
    ['Managing Committee', '/about/managing-committee'],
    ['Teachers List', '/about/teachers'],
    ['Staff List', '/about/staff'],
    ['Institute Infrastructure', '/about/infrastructure'],
    ['Mission & Vision', '/about/mission-vision'],
    ['Why Study Here', '/about/why-study-here'],
  ]},
  { label: 'Academic Info ▾', to: '/academic', drop: [
    ['Academic Fee', '/academic/fee'],
    ['Book List', '/academic/books'],
    ['Syllabus', '/academic/syllabus'],
    ['Holiday List', '/academic/holiday'],
    ['Notices', '/notices'], // Already a separate page
    ['Academic Calendar', '/academic/calendar'],
  ]},
  { label: 'Student Corner ▾', to: '/student', drop: [
    ['Online Fees Payment', '/student/fees-payment'],
    ['Our Students', '/student/our-students'],
    ['Dress Info', '/student/dress-info'],
    ['Class Routine', '/student/class-routine'],
    ['Exam Routine', '/student/exam-routine'],
  ]},
  { label: 'Facilities ▾', to: '/facilities', drop: [
    ['Science Lab', '/facilities/science-lab'],
    ['Computer Lab', '/facilities/computer-lab'],
    ['Library', '/facilities/library'],
    ['Playground', '/facilities/playground'],
    ['Transportation', '/facilities/transportation'],
    ['Indoor Playground', '/facilities/indoor-playground'],
  ]},
  { label: 'Result ▾', to: '/results', drop: [
    ['Public Results', '/results/public'],
    ['School Results', '/results/school'],
    ['Board Result Link ↗', 'https://eboardresults.com'],
  ]},
  { label: 'Admission ▾', to: '/admission', drop: [
    ['Admission Information', '/admission/info'],
    ['Apply Online', '/admission/apply'],
    ['Prospectus', '/admission/prospectus'],
    ['Admission Form', '/admission/form'],
  ]},
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeAll = () => { setMobileOpen(false) }

  return (
    <nav className="nav">
      <div className="container">
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="menu">☰</button>
        <ul className={mobileOpen ? 'show' : ''}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className={item.drop ? 'has-drop' : ''}>
              {item.drop ? (
                <>
                  <Link to={item.to} onClick={closeAll}>{item.label}</Link>
                  <div className="dropdown">
                    {item.drop.map(([label, to]) => 
                      to.startsWith('http') ? (
                        <a key={label} href={to} target="_blank" rel="noopener" onClick={closeAll}>{label}</a>
                      ) : (
                        <Link key={label} to={to} onClick={closeAll}>{label}</Link>
                      )
                    )}
                  </div>
                </>
              ) : (
                <Link to={item.to} onClick={closeAll}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}