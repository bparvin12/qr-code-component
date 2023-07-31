import React from 'react'
import Image from 'next/image';

import QRCodeWrapper from './QRCard.styled.js';

const QRCard = () => {
  return (
    <QRCodeWrapper className='container'>
      <div className='image-div'>
        <Image 
          src="/image-qr-code.png" 
          width="300" 
          height="300"
        />
      </div>
      <div className='subheader-1'>
        Improve your front-end skills by building projects
      </div>
      <div className='subheader-2'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </div>
    </QRCodeWrapper>
  )
}

export default QRCard