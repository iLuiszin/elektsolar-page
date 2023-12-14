import React from 'react'
import ProfilePic from '../../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'
import { BsFillPlayCircleFill } from 'react-icons/bs'
const Testimonials = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Depoimentos</p>
                <h1 className="primary-heading text-align-center">
                    O que nossos clientes dizem
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <button className='watch-video-button'><BsFillPlayCircleFill />Assistir o Video</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio, quibusdam unde saepe quis ipsa voluptate nam expedita earum labore quasi! Sed, quae!</p>

                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Nome Teste</h2>
            </div>
        </div>
    )
}

export default Testimonials