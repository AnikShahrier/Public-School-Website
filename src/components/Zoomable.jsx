import { useState } from 'react'

export default function Zoomable({ src, alt, style, className }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <img className={'zoomable ' + (className || '')} style={style} src={src} alt={alt} onClick={() => setOpen(true)} />
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} />
        </div>
      )}
    </>
  )
}
