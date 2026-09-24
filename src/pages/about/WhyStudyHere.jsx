import { useEffect } from 'react'

const WHY = [
  '👨‍🏫 অভিজ্ঞ শিক্ষক|দক্ষ শিক্ষকমণ্ডলী', 
  '🔬 আধুনিক ল্যাব|বিজ্ঞান ও আইসিটি ল্যাব', 
  '🏆 কৃতিত্ব|ধারাবাহিক সাফল্য', 
  '🛡️ নিরাপদ পরিবেশ|শৃঙ্খলা ও সহশিক্ষা'
]

export default function WhyStudyHere() {
  useEffect(() => { document.title = 'Why Study Here | Sabuj Kanan School And College' }, [])
  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="section-title"><h2>Why Study Here</h2><p>কেন সবুজ কাননে পড়বেন</p></div>
        <div className="grid grid-4">
          {WHY.map(s => { 
            const [h, p] = s.split('|')
            return (
              <div className="card" key={h}>
                <div className="card-body" style={{textAlign:'center'}}>
                  <h3>{h}</h3><p>{p}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}