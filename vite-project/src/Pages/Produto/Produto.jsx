import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Produto.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


function Produtos() {
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos
  const [notification, setNotification] = useState(null); // Estado para controlar a exibição da notificação
  const [fullscreenNotification, setFullscreenNotification] = useState(false); // Estado para controlar a exibição da notificação em tela cheia
  const { cartItems, addToCart } = useCart(); // Importa a função addToCart e o estado cartItems do contexto

  useEffect(() => {
    // Função para buscar os produtos usando Axios
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/db.json'); // Faz a requisição para obter os produtos
        setProdutos(response.data.produtos); // Atualiza o estado com os produtos obtidos
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchProducts(); // Chama a função para buscar os produtos ao iniciar o componente
  }, []);

  // Função para adicionar um produto ao carrinho e exibir a notificação
  const handleAddToCart = (produto) => {
    // Verifica se o produto já está no carrinho
    const existingItemIndex = cartItems.findIndex((item) => item.id === produto.id);

    // Se o produto já estiver no carrinho, atualiza a quantidade
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setNotification({ produto, quantity: updatedCartItems[existingItemIndex].quantity });
      setFullscreenNotification(true);
      addToCart(produto);
    } else {
      // Se o produto não estiver no carrinho, adiciona o produto ao carrinho e exibe a notificação
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
      {/* Notificação fora do card */}
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
