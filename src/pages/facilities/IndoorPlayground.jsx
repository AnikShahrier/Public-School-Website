import { useEffect } from 'react'

export default function IndoorPlayground() {
  useEffect(() => { document.title = 'Indoor Playground | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Indoor Playground</h2><p>ইনডোর গেমস</p></div>
        <div className="grid grid-4">
          {['Carrom Board', 'Chess', 'Table Tennis', 'Badminton'].map(game => (
            <div className="card" key={game}>
              <div className="card-body" style={{textAlign:'center'}}>
                <h3>🎮 {game}</h3>
                <p>আধুনিক সরঞ্জাম সহ ইনডোর গেমস রুম।</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}