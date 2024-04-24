import cell from '../../assets/img/3.png'
import cat from '../../assets/img/5.png'
import dog from '../../assets/img/4.png'
import us1 from '../../assets/img/u1.png'
import us2 from '../../assets/img/u2.png'
import us3 from '../../assets/img/u3.png'
import '../../assets/AppPet.txt'
import './aplicativo.css'

function Aplicativo () 
{
    return(
        <>
    <div className='app-container'>
        <div className="first">   

           <div>
            <h1>Conheça o mais novo app</h1>
            
            <p> 
            Hachipet é o seu novo aplicativo favorito para cuidar
            do seu bichinho! <br/>Encontre tudo o que seu pet precisa 
            em um só lugar: alimentos, brinquedos, acessórios e
            muito mais.<br/> Faça compras com facilidade e receba tudo 
            na sua porta. Baixe agora e deixe seu pet feliz!
            <br/>
            
            <br/>
            Ao baixar o aplicativo você terá, além da grande 
            variedade de produtos e realizar compras rapidamente,  
            poderá acompanhar<br/> promoções e descontos exclusivos 
            economizando e cuidando do bem-estar do seu animal 
            de estimação.<br/> Participará de programas de fidelidade 
            e acesarrá conteúdos informativos de dicas úteis 
            <br/>sobre o cuidado de seus animais, como: saúde, 
            alimentação e comportamento.
            
            </p>
            </div>
            
            <div className='buton'>
            <a href="../../assets/AppPet.txt" download="AppPet.txt" class="download-link">
            <button class="btn-download">BAIXE AGORA!</button></a>
 
            </div>
           
               
        </div>


        <div>
            <img className='cel' src={cell} alt="" />
        </div>

        <div>
            <img className='gato'  src={cat} alt="" />
        </div>

       


    </div>
           
        
    <div className='app-container2'>
            
        <div className='second'>
            <h1>Sobre o App</h1>
            <p>
                O Hachipet nasceu da paixão pela saúde e 
                felicidade dos nossos amigos peludos. Nossa 
                iniciativa surgiu da<br/> necessidade de criar 
                um espaço único, onde tutores e seus animais 
                de estimação pudessem encontrar tudo o<br/> que 
                precisam de forma fácil e rápida.
                Ao longo do desenvolvimento do aplicativo, 
                nosso foco principal foi <br/>proporcionar uma 
                experiência completa e satisfatória para 
                todos os amantes de pets. Desde a seleção 
                cuidadosa<br/> dos produtos disponíveis até a 
                oferta de conteúdos informativos, buscamos 
                sempre o melhor para os nossos usuários e seus 
                bichinhos.
                <br/>
                <br/>
                O nome do aplicativo foi criado a partir 
                do  nome do cachorro Hachiko, o cão 
                mais fiel do mundo, <br/>que ficou ao lado de 
                seu dono até o fim. Sua interface foi 
                pensada para trazer o máximo de 
                conforto e dinamismo<br/> na hora de adotar 
                e ajudar um bichinho. A logo do nosso 
                aplicativo foi elaborada a trazer a sensação 
                de<br/> um lugar de muito amor 
                para os bichinhos. Os bichinhos contam 
                com seu amor, e nesse aplicativo <br/> você 
                poderá ter essa oportunidade de apoiar 
                essa causa animal. 
                
                </p>  
                <div className='buton2'>

                <a href="../../assets/AppPet.txt" download="AppPet.txt" class="download-link">
                <button class="btn-download">BAIXE AGORA!</button></a>

                </div> 

        </div>

        <div>
            <img className='cao' src={dog} alt="" />
        </div>

    </div>

    <div className='app-container3'>
        <div className='third'>
            <h1>Depoimentos de usuários</h1>
                <div className='users'>
                    <div className='user1'>
                    <img src={us1} width="150px" alt="" />
                        <p>
                        “Gostei dos produtos que o <br/> aplicativo tem, além da rapidez na entrega.”

                        <br/><strong>Jonas</strong>
                        </p>
                    </div>

                    <div className='user2'>
                        <img src={us2} width="150px" alt="" />
                            <p>
                            “Eu amei as dicas que tem no aplicativo, <br/>passei a cuidar melhor do meu gatinho.”

                            <br/><strong>Ana</strong>
                            </p>
                    </div>

                    <div className='user3'>
                        <img src={us3} width="150px" alt="" />
                            <p>
                            “Sempre que posso eu ajudo algumas ONG’s <br/>comprando alimentos pelo aplicativo, <br /> mesmo não podendo ter animais.”

                            <br/><strong>Vânia</strong>
                            </p>

                    </div>
                </div>
                
                <div className='buton3'>

                <a href="../../assets/AppPet.txt" download="AppPet.txt" class="download-link">
                <button class="btn-download">BAIXE AGORA!</button></a>

                </div> 

        </div>
    </div>
        </>
    )

}

export default Aplicativo