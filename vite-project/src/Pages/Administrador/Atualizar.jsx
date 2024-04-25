import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export function Atualizar()
{
    const {id} = useParams()
    const [data, setData] = useState([])
    const navegar = useNavigate()

    useEffect(() => {
        axios.get("https://databasehachipet.onrender.com/produtos/"+id)
        .then(resp => setData(resp.data))
        .catch(err => console.log(err))
    })

    function HandSubmit(event)
    {
        event.preventDefault()
        axios.put("https://databasehachipet.onrender.com/produtos/"+id, data)
        .then(resp => { 
            alert("Dados atualizados com sucesso!!")
            navegar("/adm321")
         })
    }

    return(
        <>
        <br /><h1 style={{textAlign: "center"}}>Painel de atualização dos produtos</h1>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSubmit}>

                <div >                    
                    <label htmlFor="name">Id do produto</label><br />
                    <input type="text" name="id" disabled value={data.id} className="from-control"  />
                </div><br />

                <div >
                    <label htmlFor="name">Nome do produto</label><br />
                    <input type="text" name="name" defaultValue={data.nome} className="from-control" 
                    onChange={e=>setData({...data, nome: e.target.value})} />
                </div><br />

                <div>
                    <label htmlFor="name">Valor</label><br />
                    <input type="text" name="valor" defaultValue={data.valor} className="from-control"
                    onChange={e=>setData({...data, valor: e.target.value})} />
                </div><br />

                <div>
                    <label htmlFor="imagem">Imagem</label><br />
                    <input type="text" name="imagem" defaultValue={data.img} className="from-control"
                    onChange={e=>setData({...data, img: e.target.value})} />
                </div><br />
                <button className="btn btn-info" >Atualizar</button>
            </form>
            </div> 
           
           
        </div>
        <br />
        </>
    )
}