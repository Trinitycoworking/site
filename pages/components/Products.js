import Image from 'next/image'
import React from 'react'

import Reuniao from './../../public/images/reuniao1.jpeg'
import Compartilhada from './../../public/images/estacao2.png'
import BemEstar from './../../public/images/bemestar.jpeg'
import Privativa from './../../public/images/privativa.jpeg'
import Ripada from './../../public/images/ripada.jpeg'

export default function Products() {
  let salas = [
    {name: 'Sala de Reunião', image: Reuniao},
    {name: 'Sala de Compartilhada', image: Compartilhada},
    {name: 'Sala de Atendimento Bem-Estar', image: BemEstar},
    {name: 'Sala de Atendimento Privativa', image: Privativa},
    {name: 'Sala de Atendimento Porta Ripada', image: Ripada},
  ]

  return (
    <div id='products' className='products'>
      <h1>Salas</h1>
      <div className='products-wrapper'>
        {salas.map((sala) => (
          <div className='product-card'>
            <Image
              src={sala.image}
              width={300}
              height={400}
            />
            <div className='product-description'>
              <span>{sala.name}</span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
