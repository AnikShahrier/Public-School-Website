import { useEffect, useRef, useState } from 'react'

export default function Counter({ to }) {
  const ref = useRef(null)
  const started = useRef(false)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const t0 = performance.now()
        const step = (t) => {
          const p = Math.min((t - t0) / 1500, 1)
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <div className="num" ref={ref}>{val.toLocaleString()}</div>
}
