import './Home.css'
import Carosel from '../Carrosel'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import cao2 from '../../assets/img/lindo-cao-funy.png'

function home() {
    const[valor,setValor] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err)),[]
    })
    
    return(<>
    <section className='home_section'>
        <Carosel/>
        <div className="welcome">
            <div className="featured_apresentation">
                <h2 className='home-title'>Olá, somos da Hachi Pet</h2>
                <p className='subtitle'>Bem-vindo ao Hachi Pet, o seu destino online para tudo relacionado a cuidados e amor pelos nossos amigos de quatro patas. Aqui, no coração digital da comunidade pet, você encontrará uma variedade de recursos, desde dicas úteis de saúde e bem-estar até produtos exclusivos para atender às necessidades do seu companheiro peludo. Prepare-se para explorar um mundo onde cada latido, ronronado ou sibilo é celebrado! </p>
            </div>
        </div>
    </section>
    
    <section className='home-featured welcome'>
        <div className='who-we-are'>
                <div className='max-wd2'>
                    <h3>Quem somos</h3>
                    <p>No Hachi Pet, somos uma equipe apaixonada por animais de estimação, dedicada a fornecer as melhores informações, produtos e serviços para fortalecer o vínculo entre humanos e seus bichinhos queridos. Nossa jornada começou com uma simples missão: tornar a vida dos animais de estimação mais feliz e saudável, e desde então, temos trabalhado incansavelmente para alcançar esse objetivo. Com especialistas em cuidados veterinários, amantes de animais e entusiastas da tecnologia, estamos aqui para ajudar você e seu peludo a desfrutarem de uma vida cheia de alegria, saúde e amor.</p>
                </div>
                <div>
                    <img src={cao2} className='img-dog' />
                </div>
        </div>
    </section>
    <section className='products-best-selling-section'>
        <h3>Produtos mais vendidos</h3>
            <div className='best-selling-products' >
                <div className='best-selling-product'>
                    <div>
                        <div><a href="/produtos"><img src="https://i.imgur.com/xPIb5Fg.jpg" alt="" /></a></div>
                    </div>
                    <button> <a href="/produtos">Confira</a></button>
                </div>
                <div className='best-selling-product'>
                    <div>
                        <div><a href="/produtos"><img src="https://i.imgur.com/OMWvkDb.jpeg" alt="" /></a></div>
                    </div>
                    <button> <a href="/produtos">Confira</a></button>
                </div>
                <div className='best-selling-product'>
                    <div>
                        <div><a href="/produtos"><img src="https://i.imgur.com/50Ns7Vp.jpeg" alt="" /></a></div>
                    </div>
                    <button> <a href="/produtos">Confira</a></button>
                </div>
            </div>
    </section>
    </>)
}
export default home