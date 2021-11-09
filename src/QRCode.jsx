import { useEffect, useState } from 'react';
import QRCode from 'qrcode'

function Qrcode() {
  const [src, setSrc] = useState('')

  useEffect(() =>{
    QRCode.toBuffer( [{name: 'my name', email: 'email@email.com' }]).then((data) =>{
      setSrc(data)
    })
  }, [])
  return (
    <div>
        <img src={src} alt='sad'/>
    </div>
  );
}

export default QRCode;
