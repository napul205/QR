import * as QRCode from 'qrcode'
import { useState } from "react"

function App() {
  const [url,setUrl] = useState('')
  const [qrcode,setQrcode] = useState('')

  const GenerateQRcode = () =>{
    QRCode.toDataURL(url,{
      width:800,
      margin:1,
      
      color:{
        dark:'#335383ff'
      }
    }, (err, url) => {
      if(err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }



  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="https://google.com" value={url} onChange={(evt)=>setUrl(evt.target.value)}/>
      <button onClick={GenerateQRcode}>Generate</button>
      
      {qrcode &&<>
        <img src={qrcode} />
        <a href={qrcode} download='qrcode.png'>download</a>
        </>}
    </div>
  )
}

export default App
