import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Produto.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [notification, setNotification] = useState(null);
  const [fullscreenNotification, setFullscreenNotification] = useState(false);
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://databasehachipet.onrender.com/produtos');
        setProdutos(response.data); // Alteração aqui para setar diretamente response.data, já que a lista de produtos está diretamente em response.data
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (produto) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === produto.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setNotification({ produto, quantity: updatedCartItems[existingItemIndex].quantity });
      setFullscreenNotification(true);
      addToCart(produto);
    } else {
      addToCart(produto);
      setNotification({ produto, quantity: 1 });
      setFullscreenNotification(true);
    }

    setTimeout(() => {
      setNotification(null);
      setFullscreenNotification(false);
    }, 3000);
  };

  return (
    <div className="produtos-container">
      <h2>Produtos Disponíveis</h2>
      <div className="featured_products">
        {produtos && produtos.length > 0 ? (
          produtos.map((produto) => (
            <div key={produto.id} className="card-container">
              <div className="container-item-home">
                <img src={produto.img} alt={produto.nome} className="img-card" />
                <h3 className="title_card">{produto.nome}</h3>
                <p className="description_card">Preço: R$ {produto.valor}</p>
                <button className="btn outline" onClick={() => handleAddToCart(produto)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
        <Link to="/carrinho">
          <button className="btn-carrinho">Ver Carrinho</button>
        </Link>
      </div>
      {fullscreenNotification && notification && (
        <div className="fullscreen-notification">
          <div className="notification-box">
            <div className="notification-content">
              <div className="product-info">
                <p className="product-name">{notification.produto.nome}</p>
                <p className="product-quantity"><span className="quantity-text">Quantidade:</span> {notification.quantity}</p>
              </div>
              <Link to="/carrinho"><img src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-carrinho-de-compras-icon-carrinho-de-compras.png" alt="Ícone do Carrinho" className="notification-image" /></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Produtos;
