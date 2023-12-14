import React from 'react'
import Curso1 from '../../Assets/curso1elektsolar.png'
import Curso2 from '../../Assets/curso2elektsolar.png'
import Curso3 from '../../Assets/curso3elektsolar.png'
import Curso4 from '../../Assets/curso4elektsolar.png'

const Work = () => {
    const workInfoData = [
        {
            title: '20 Jan',
            text: 'Curso Online e Ao vivo de Comissionamento e manutenção preventiva de usinas fotovoltaicas',
            hour: '19:00',
            color: '#206177',
            image: Curso1
        },
        {
            title: '27 e 28 de Janeiro',
            text: 'Curso Online e Ao vivo de Comissionamento e manutenção preventiva de usinas fotovoltaicas',
            hour: '19:00',
            color: '#FCCA00',
            image: Curso2
        },
        {
            title: '20 Jan',
            text: 'Curso Online e Ao vivo de Comissionamento e manutenção preventiva de usinas fotovoltaicas',
            hour: '19:00',
            color: '#206177',
            image: Curso3
        },
        {
            title: '20 Jan',
            text: 'Curso Online e Ao vivo de Comissionamento e manutenção preventiva de usinas fotovoltaicas',
            hour: '19:00',
            color: '#206177',
            image: Curso4
        },
    ];

    return (
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className="primary-subheading">Cursos</p>
                <h1 className="primary-heading">Nossos Cursos</h1>
                <p className="primary-text">
                    Conheça as modalidades de cursos disponíveis
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data, index) => {

                    return (
                        <div className="work-section-info" key={index}>
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <p>{data.text}</p>
                            <br />
                            <button className='primary-button'>
                                Saber mais
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Work;