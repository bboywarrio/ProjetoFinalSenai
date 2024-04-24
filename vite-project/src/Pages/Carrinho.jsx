import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Carrinho.css';

function Carrinho() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.valor * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="Carrinhos-container">   
        <h2>Produtos no Carrinho</h2>
        
        <div className="featured_carrinho" >
        {cartItems.length === 0 ? (
          <div>
            <p>Carrinho vazio, você pode realizar compras acessando nossa página de produtos!</p>
            <Link to="/produtos" className="btn-adicionar-produtos">Adicionar Produtos</Link>
          </div>
        ) : (
          <div className='carrinho-container' >
            {cartItems.map((item) => (
              <div key={item.id} className="cart-items"> {/* Movido aqui */}
                <div className="cart-item">
                  
                  <img src={item.img} alt={item.nome} className="img-carrinho-card" />
                  <p>{item.nome}</p>
                  <p>Preço: R$ {item.valor}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <div className="button-wrapper">
                    <button className="increase-button" onClick={() => increaseQuantity(item.id)}>+</button>
                    <button className="decrease-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                  </div>
                  <div className="delete-button">
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>Excluir</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-carrinho">
              <p>Total do Carrinho: R$ {calcularTotal()}</p>
              <Link to="/produtos" className="btn-adicionar-produtos">Adicionar ao Carrinho</Link>
            </div>
          </div>
        )}
      </div>
   
    </div>
  );
}

export default Carrinho;
