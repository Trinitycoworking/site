import Image from 'next/image'
import React from 'react'

import Reuniao from './../../public/images/reuniao1.jpeg'
import Compartilhada from './../../public/images/estacao2.png'
import BemEstar from './../../public/images/bemestar.jpeg'
import Privativa from './../../public/images/privativa.jpeg'
import PrivativaPremium from './../../public/images/privativap.jpeg'
import Ripada from './../../public/images/ripada.jpeg'
import Link from 'next/link'

export default function Products() {
  let salas = [
    {name: 'Sala de Reunião', image: Reuniao, hora: "R$45,00", pacote: "R$400,00", diaria: "R$270,00", mensal: "Indisponível"},
    {name: 'Sala Compartilhada', image: Compartilhada, hora: "Indisponível", pacote: "Indisponível", diaria: "R$45,00", mensal: "R$360,00"},
    {name: 'Sala de Atendimento Bem-Estar', image: BemEstar, hora: "R$35,00", pacote: "R$300,00", diaria: "R$190,00", mensal: "R$450,00"},
    {name: 'Sala de Atendimento Privativa', image: Privativa, hora: "R$35,00", pacote: "R$300,00", diaria: "R$190,00", mensal: "R$450,00"},
    {name: 'Sala de Atendimento Porta Ripada', image: Ripada, hora: "R$35,00", pacote: "R$300,00", diaria: "R$190,00", mensal: "R$450,00"},
    {name: 'Sala Privativa Premium', image: PrivativaPremium, hora: "R$40,00", pacote: "R$350,00", diaria: "Indisponível", mensal: "Indisponível"},
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
              <h2>{sala.name}</h2>
              <h4>Valores</h4>
              <span>Hora: {sala.hora}</span>
              <span>Pacote 10h: {sala.pacote}</span>
              <span>Diária: {sala.diaria}</span>
              <span>Mensal: {sala.mensal}</span>
              <a href='https://wa.me/5522998727548' target='_blank'>Reserve agora</a>
            </div>
          </div>
        ))}
      </div>
      <Link href='https://trinitycoworking.github.io/Trinity_Horarios/' target='_blank'>Consulte aqui a disponibilidade das salas</Link>
    </div>
  )
}
