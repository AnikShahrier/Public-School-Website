import { useEffect, useState } from 'react'


const PHOTOS = [
  ['g1.svg', 'event'], ['g2.svg', 'photo'], ['g3.svg', 'event'], ['g4.svg', 'photo'],
  ['g5.svg', 'photo'], ['g6.svg', 'event'], ['g7.svg', 'photo'], ['g8.svg', 'event'],
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  useEffect(() => { document.title = 'Gallery | Sabuj Kanan School And College' }, [])
  return (<>
    
    <section><div className="container">
      <div className="filter-bar">
        <button className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'event' ? 'on' : ''} onClick={() => setFilter('event')}>Events</button>
        <button className={filter === 'photo' ? 'on' : ''} onClick={() => setFilter('photo')}>General Photos</button>
      </div>
      <div className="gal">
        {PHOTOS.filter(([, cat]) => filter === 'all' || cat === filter).map(([img]) => (
          <img key={img} src={'assets/img/' + img} alt="" onClick={() => setLightbox('assets/img/' + img)} />
        ))}
      </div>

      <div className="section-title" style={{marginTop:'56px'}}><h2>Videos</h2><p>ভিডিও গ্যালারি (YouTube embed)</p></div>
      <div className="grid grid-2">
        <div className="card video-ph"><div>▶ YouTube embed placeholder<br /><small>iframe বসান</small></div></div>
        <div className="card video-ph"><div>▶ YouTube embed placeholder<br /><small>iframe বসান</small></div></div>
      </div>
    </div></section>

    {lightbox && (
      <div className="lightbox" onClick={() => setLightbox(null)}>
        <img src={lightbox} alt="" />
      </div>
    )}
  </>)
}
