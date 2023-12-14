import React from 'react'
import AboutBackground from '../../Assets/about-background.png'
import AboutBackgroundImage from '../../Assets/bannerImage.jpg'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
    return (
        <div className='about-section-container'>
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div>
                <div className="about-section-text-container">
                    <p className="primary-subheading">About</p>
                    <h1 className='primary-heading'>
                        Quem somos?
                    </h1>
                    <p className='primary-text'>
                        Desde 2013 trazendo o mais moderno conhecimento sobre energia solar fotovoltaica.
                    </p>
                    <p className='primary-text'>
                        Profissionais com sólida formação, graduados pela Universidade Federal de Santa Catarina.
                    </p>
                    <p className='primary-text'>
                        Centenas de cursos e treinamentos ministrados em todo território nacional.
                    </p>
                    <p className='primary-text'>
                        Mais de 8000 alunos treinados e capacitados para atuação no mercado de energia solar.
                    </p>
                    <div className="about-buttons-container">
                        <button className="secondary-button">
                            Ver Mais
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About