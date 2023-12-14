import React from 'react'
import Logo from '../../Assets/Logo.png'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { WhatsApp } from '@mui/icons-material'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Elektsolar" />
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <strong>Endereço:</strong>
                    <span>Rodovia Dr. Antônio <br />
                        Luiz Moura Gonzaga,<br />
                        3339, Bloco B, Sala <br />
                        217 - Rio Tavares,<br />
                        Florianópolis - SC, <br />
                        88048-301
                    </span>


                    <span></span>

                </div>
                <div className="footer-section-columns">
                    <strong>Contato:</strong>
                    <span className='footer-align-text'>(11) 9 9999-9999 <WhatsApp /></span>
                    <span>(48) 3206-2348</span>
                    <span>matrículas@eketsolar.com.br</span>
                </div>
                <div className="footer-section-columns">
                    <span>Termos & Condições</span>
                    <span>Políticas de privacidade</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
