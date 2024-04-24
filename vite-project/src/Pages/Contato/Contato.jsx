import React from 'react';

import './Contato.css';
function Contato() {
    return(<>
            <section className='featured_home welcome form-contact'>
                <div className='featured_container'>
                    <h2 style={{padding:"50px"}}>Formulário de Contato</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" name="name" placeholder="Seu nome" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" placeholder="Sua mensagem" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn fill">Enviar Mensagem</button>
                    </form>
                </div>
            </section>

            <section className="welcome">
</section>
    </>)
}
export default Contato