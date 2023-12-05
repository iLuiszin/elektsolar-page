import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.'
        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.'
        },
        {
            image: DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.'
        }
    ]


    return (
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-subheading">How It Works</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.
                </p>
            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data, index) => {
                        return (
                            <div className="work-section-info" key={index}>
                                <div className="info-boxes-img-container">
                                    <img src={data.image} alt="" />
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work