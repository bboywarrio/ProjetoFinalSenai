import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Aplicativo from '../Pages/aplicativo/aplicativo';
import Contato from '../Pages/Contato/Contato';
import Politica from '../Pages/politica-envios/politica-envios';
import Produtos from '../Pages/Produto/Produto'; // Importe a página de produtos
import Carrinho from '../Pages/Carrinho'; // Importe a página de carrinho
import { Painel } from "../Pages/Administrador/Painel"
import { PainelBase } from "../Pages/Administrador/PainelBase"
import { Atualizar } from "../Pages/Administrador/Atualizar"
import Trocas from '../Pages/Trocas/Trocas';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aplicativo" element={<Aplicativo />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-de-envios" element={<Politica />} />
        <Route path="/produtos" element={<Produtos />} /> 
        <Route path="/carrinho" element={<Carrinho />} /> 
        <Route path="/painel" element={<Painel />}/>
        <Route path="/adm321" element={<PainelBase />}/>
        <Route path="/atualizar/:id" element={<Atualizar />}/>
        <Route path="/trocas" element={<Trocas />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
