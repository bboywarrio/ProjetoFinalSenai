import "./Sobre.css";


export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
        <div id="resumo">
            
            <h2>Sobre Mim</h2>
            <br />
            <p>
            Sou um recém-formado em Engenharia da Computação, com cursos em Analista de Suporte pelo Senac, Front-end pelo SENAI, Udemy, Dio, Cisco e Linux.br</p> <br /> <p> Grande parte do meu conhecimento foi adquirido de forma autodidata, e estou constantemente buscando aprender mais, sempre colocando em prática o que aprendo. Estou em busca de estágio ou trabalho que me proporcione experiência e aprendizado nas áreas de TI e engenharia. </p> <br />
            <p>Atualmente, meu foco está na programação, mas também tenho interesse em eletrônica, automação e robótica.</p>

            
        </div>
        <div id="meus-conhecinentos">
            <h2>Meus Conhecimentos!</h2>
            <ul>
          <li>Sistemas Embarcados Arduino / Raspberry Pi</li>
             <li>Autocad / Desenho Técnico</li>
              <li>Desenvolvimento Web 
               <ul>
                 <li>HTML/CSS/Bootstrap</li>
                 <li>JavaScript/TypeScript</li>
                 <li>NodeJs / ReactJs</li>
                </ul>
           </li>
    <li>GIMP / Canvas</li>
</ul>

        </div>
        </div>
    )
}