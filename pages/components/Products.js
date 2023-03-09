import Image from 'next/image'
import React from 'react'

export default function Products() {
  let salas = [
    {name: 'Sala de Reunião', image: '/images/reuniao1.jpeg'},
    {name: 'Sala de Compartilhada', image: '/images/estacao2.png'},
    {name: 'Sala de Atendimento Bem-Estar', image: '/images/bemestar.jpeg'},
    {name: 'Sala de Atendimento Privativa', image: '/images/privativa.jpeg'},
    {name: 'Sala de Atendimento Porta Ripada', image: '/images/ripada.jpeg'},
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
