import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export default function Contact() {
  return (
    <div id="footer">
      <div className='container'>
        <h5>Contato</h5>
        <p>Envie uma mensagem ou entre em contato via Whatsapp (22) 99872-7548</p>

        <div className='contact_wrapper'>    
          <div className='contact_info'>
            <h4>Informações</h4>
            <FaPhone /><strong>Telefone:</strong><p>(22) 99872-7548</p>
            <GrMail /><strong>E-mail:</strong><p>trinitycoworking@gmail.com</p>
            <FaMapMarkerAlt /><strong>Localização:</strong><p>Rua Voluntários da Pátria, nº 514 - Sala 207</p>
            <FaClock /><strong>Horário de Atendimento:</strong><p>De segunda a sexta, das 9h às 20h</p>
            <strong>Redes sociais</strong><p><a href='https://facebook.com/trinitycoworking' target='_blank'><FaFacebook /></a><a href='https://instagram.com/trinitycoworking' target='_blank'><FaInstagram /></a></p>
          </div>

          <div className='contact_map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14821.891729908783!2d-41.332844!3d-21.76195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd438434083f9%3A0xe2dce890eee92c0c!2sTrinity%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1678387869295!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='footer-bar'>
            <p>© 2023 | Todos os direitos reservados <br /> Criação de Sites por <a href='https://dredeco.github.io/portfolio/'>André Fernandes.</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
