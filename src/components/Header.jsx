import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header"><div className="container">
      <div className="header-main">
        <Link to="/"><img className="logo" src="assets/img/logo.svg" alt="logo" /></Link>
        <div>
          <h1>সবুজ কানন স্কুল এন্ড কলেজ</h1>
          <p>Sabuj Kanan School And College — Mujib Sarak, Sirajganj | Estd. 1980</p>
        </div>
      </div>
    </div></header>
  )
}
