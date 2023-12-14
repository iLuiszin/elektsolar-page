import React from 'react'

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Tem algo para nos dizer?</h1>
            <h1 className="primary-heading">Envie aqui</h1>
            <form className="contact-form-container">
                <input type="text" placeholder="youremail@gmail.com" name="email" id="email" />
                <button type="submit" className='secondary-button'>Enviar</button>
            </form>

        </div>
    )
}

export default Contact