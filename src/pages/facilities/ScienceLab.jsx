import { useEffect } from 'react'

export default function ScienceLab() {
  useEffect(() => { document.title = 'Science Lab | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Science Laboratory</h2><p>বিজ্ঞান ল্যাবরেটরি</p></div>
        <div className="grid grid-3">
          <div className="card">
            <img src="assets/img/science-lab.svg" alt="Physics" style={{height:'150px', objectFit:'cover'}} />
            <div className="card-body">
              <h3>Physics Lab</h3>
              <p>পদার্থবিজ্ঞান পরীক্ষা-নিরীক্ষার জন্য আধুনিক যন্ত্রপাতি সমৃদ্ধ ল্যাব।</p>
            </div>
          </div>
          <div className="card">
            <img src="assets/img/science-lab.svg" alt="Chemistry" style={{height:'150px', objectFit:'cover'}} />
            <div className="card-body">
              <h3>Chemistry Lab</h3>
              <p>রসায়ন বিভাগের জন্য সম্পূর্ণ সুরক্ষিত ও রাসায়নিক উপকরণ সমৃদ্ধ ল্যাব।</p>
            </div>
          </div>
          <div className="card">
            <img src="assets/img/science-lab.svg" alt="Biology" style={{height:'150px', objectFit:'cover'}} />
            <div className="card-body">
              <h3>Biology Lab</h3>
              <p>জীববিজ্ঞান ও অনুজীব পর্যবেক্ষণের জন্য অত্যাধুনিক মাইক্রোস্কোপ ও নমুনা।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}