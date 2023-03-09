import Image from 'next/image'
import React from 'react'

import Reuniao from './../../public/images/reuniao1.jpeg'

export default function Products() {
  let salas = [
    {name: 'Sala de Reunião', image: Reuniao},
    {name: 'Sala de Compartilhada', image: './../../public/images/estacao2.png'},
    {name: 'Sala de Atendimento Bem-Estar', image: './../../public/images/bemestar.jpeg'},
    {name: 'Sala de Atendimento Privativa', image: './../../public/images/privativa.jpeg'},
    {name: 'Sala de Atendimento Porta Ripada', image: './../../public/images/ripada.jpeg'},
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
