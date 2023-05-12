import Link from 'next/link'
import React from 'react'

export default function AboutWork() {
  let passos = [
    {nome: "Primeiro passo", 
    texto: "Consulte aqui a disponibilidade das salas", 
    link: "https://trinitycoworking.github.io/Trinity_Horarios/", 
    conteudo: "CONSULTAR"},

    {nome: "Segundo passo", 
    texto: "Realize o seu cadastro em nosso sistema", 
    link: "https://trinitycoworking.github.io/Trinity_cadastro/", 
    conteudo: "cadastrar"},

    {nome: "Terceiro passo", 
    texto: "Entre em contato e confirme a sua reserva com o pagamento das horas",
    link: "https://wa.me/5522998727548", 
    conteudo: "confirmar"},
  ]
  return (
    <div className='about_work'>
        <div className='container'>
          {passos.map((passo) => (
            <div className='box'>
              <h1>{passo.nome}</h1>
              <span>{passo.texto}</span>
              <Link href={passo.link}>
                {passo.conteudo}
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}
