import Image from 'next/legacy/image'
import React from 'react'

import BgImage from '../../public/images/headerbg.png'

export default function Header() {
  return (
    <div id="header" class="header">
        <Image 
          src={BgImage}
          alt=""
          layout="fill"
          objectFit='cover'
        />
        <div className='header-description'>
          <span>Seu escritório inteligente!</span>
        </div>
    </div>
  )
}
