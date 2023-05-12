import { useEffect } from 'react';

import '@/styles/globals.sass'
import '@/styles/Home.sass'
import '@/styles/Navbar.sass'
import '@/styles/Hero.sass'
import '@/styles/AboutWork.sass'
import '@/styles/CTAOne.sass'
import '@/styles/About.sass'
import '@/styles/Products.sass'
import '@/styles/Contact.sass'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
