import { useEffect } from 'react'
const BOOKS = [
  ['Class VI', 'বাংলা, English, গণিত, বিজ্ঞান…', 'documents/books-class6.pdf'],
  ['Class VII', 'বাংলা, English, গণিত, বিজ্ঞান…', 'documents/books-class7.pdf'],
  ['Class VIII', 'বাংলা, English, গণিত, বিজ্ঞান…', 'documents/books-class8.pdf'],
  ['Class IX–X', 'বিজ্ঞান / মানবিক শাখা…', 'documents/books-class9.pdf'],
]

export default function BookList() {
  useEffect(() => { document.title = 'Book List | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Book List</h2><p>পাঠ্যবইয়ের তালিকা</p></div>
        <div className="grid grid-4">
          {BOOKS.map(([h, p, f]) => (
            <div className="card" key={h}>
              <div className="card-body">
                <h3>{h}</h3><p>{p}</p>
                <a style={{color:'var(--green)',fontWeight:600}} href={f}>Download PDF →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}