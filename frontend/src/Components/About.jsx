import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
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
                    <p className="primary-subheadin">About</p>
                    <h1 className='primary-heading'>
                        Food Is An Important Part Of A Balanced Diet
                    </h1>
                    <p className='primary-text'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, laudantium consequuntur? Laboriosam sit dolorum voluptatem sed amet laborum, fugiat distinctio eius vero reiciendis perspiciatis. Dolore earum quia deleniti commodi maiores!
                    </p>
                    <p className='primary-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nisi iste officia cumque quae odio maiores ullam voluptatum modi doloremque. Exercitationem inventore commodi dicta?
                    </p>
                    <div className="about-buttons-container">
                        <button className="secondary-button">
                            Learn More
                        </button>
                        <button className='watch-video-button'><BsFillPlayCircleFill />Watch Video</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About