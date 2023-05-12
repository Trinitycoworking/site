import React, {useEffect} from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

import Logo from './../../public/images/logo.png'

export default function Navbar() {

    useEffect(() => {
        let btns = document.getElementsByClassName('nav-link');

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function(){
                let current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(' active', '');
                this.className += ' active'
            })
        }

        console.log(btns);
    }, 2000)

  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <Link class="navbar-brand" href="/">
                <Image 
                    className='logo'
                    src={Logo}
                    width='180'
                    height='60'
                />
            </Link>

            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <Link class="nav-link active" aria-current="page" href="/">Início</Link>
                    <Link class="nav-link" href="#about">Sobre</Link>
                    <Link class="nav-link" href="#products">salas</Link>
                    <Link class="nav-link" href="#footer">Contato</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
