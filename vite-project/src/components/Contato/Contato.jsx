import { useState } from "react";
import "./Contato.css";

export const Contato = ({ categoria }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState(''); // Corrigido "usestate" para "useState"
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => { // Corrigido "handlesubmite" para "handleSubmit"
        e.preventDefault();

        try {
            alert("Mensagem enviada com sucesso");

            setNome("");
            setEmail("");
            setMensagem("");
        } catch (error) {
            console.error('Erro ao enviar formulário', error);
        }
    };

    return (
        <div id={categoria}>
            <div>
                <h2>Me Envia uma Mensagem⬇</h2>
                <p>Preencha o seu nome, Seu email e a sua mensagem 💬 </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Seu e-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};
