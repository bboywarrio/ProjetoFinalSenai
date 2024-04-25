import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export function Painel()
{
    const [inputData, setInputData] = useState({nome:'', valor:'', descricao:'', tamanho:'', img:''})
    const navegar = useNavigate()

    function HandSubmit(event)
    {
        event.preventDefault()
        axios.post("https://databasehachipet.onrender.com/produtos/", inputData)
        .then(resposta => { 
            alert("Dados inseridos com sucesso!!")
            navegar("/adm321")
         })
         .catch(err => console.log(err))
    }

    return(
        <>
        <br /><h1 style={{textAlign: "center"}}>Adicionar produtos</h1>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSubmit}>
            <div >
                    <label htmlFor="name">Nome do produto</label><br />
                    <input type="text" name="name" className="from-control" 
                    onChange={e=>setInputData({...inputData, nome: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="name">Valor</label><br />
                    <input type="text" name="valor" className="from-control"
                    onChange={e=>setInputData({...inputData, valor: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="imagem">Imagem</label><br />
                    <input type="text" name="imagem" className="from-control"
                    onChange={e=>setInputData({...inputData, img: e.target.value})} />
                </div><br />
                <button className="btn btn-info" >Adicionar</button>
            </form>
            </div> 
           
           
        </div>
        <br />
        </>
    )
}