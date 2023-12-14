import React from 'react'
import BannerBackground from '../../Assets/home-banner-background.png'
import BannerImage from '../../Assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'
import { AiFillStar } from "react-icons/ai";

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className='primary-heading'>
                        ElektSolar
                    </h1>
                    <h1 className='primary-heading'>
                        Innovations
                    </h1>

                    <p className='primary-text'>
                        Consultoria e Cursos em Energia Solar Fotovoltaica
                    </p>

                </div>
                <div className="home-image-section diagonal-decoration">
                    <img src={BannerImage} alt="" />

                </div>



            </div>
        </div >
    )
}

export default Home