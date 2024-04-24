import React from 'react';
import './Trocas.css'

function Trocas() {
  return (
    <div className="container-trocas">
        <div className='trocas'>
      <h2>Trocas e Devoluções</h2>
      <p><strong>Política de privacidade de dados:</strong> Nós, do HachiPet, prezamos pela privacidade dos nossos clientes e não compartilhamos as informações fornecidas no momento do cadastro e compra. Somente utilizamos os dados para os processos de entrega e pagamento.</p>

      <h2>Política de troca</h2>
      <p>Para evitar qualquer problema com sua compra, fique atento à descrição do produto, características e acessórios que o acompanham. Recuse o recebimento caso a embalagem esteja aberta ou com o produto avariado pelo transporte.</p>

      <p>Para realizar a solicitação de troca de produto devem seguir os seguintes requisitos:</p>
      <ul>
        <li>Caso receba um produto diferente do que foi pedido, pedimos para entrar em contato o mais breve possível para realizarmos a troca para os itens de acordo com o pedido realizado.</li>
        <li>Em até 7 dias corridos o cliente pode solicitar a troca dos produtos, para isto basta entrar em contato com a gente pelo e-mail <a href="mailto:contato@hachipet.com.br">contato@hachipet.com.br</a> e informar o número da Nota Fiscal para darmos início ao processo de devolução.</li>
        <li>Para trocas por defeito de fabricação o prazo é de 30 dias após o recebimento, o produto não pode ter a embalagem violada, estar em perfeito estado e sem marcas de uso. Para iniciar o procedimento para devolução, o cliente deve enviar um e-mail para <strong><a href="mailto:contato@hachipet.com.br">contato@hachipet.com.br</a></strong> e informar o número da Nota Fiscal.</li>
      </ul>

      <p>No caso de devolução, o reembolso do valor pago será realizado em até 14 dias.</p>
      </div>
    </div>
  );
}

export default Trocas;