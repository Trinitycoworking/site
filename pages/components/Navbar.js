import Image from 'next/image'
import React, { useEffect } from 'react'

import logo from './../../public/images/logo.png'

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
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <Image 
                    src={logo}
                    width={180}
                    height={60}
                />
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" id='navbar-nav'>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#products">Salas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
