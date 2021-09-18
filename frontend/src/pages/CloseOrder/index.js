import React from 'react';

const CloseOrder = () => (
  <main className="flex-fill">
    <div className="container text-center">
      <h1>Obrigado!</h1>
      <hr />
      <h3>Anote o número de seu pedido:</h3>
      <h2 className="text-danger">
        <b>004571</b>
      </h2>
      <p>
        Em até 2 horas, seu pedido será entregue. Qualquer dúvida sobre este
        pedido, entre em contato conosco e informe o número do pedido para que
        possamos te ajudar.
      </p>
      <p>Tenha um ótimo dia!</p>
      <p>
        Atenciosamente,
        <br />
        Equipe Quitanda Online
      </p>
      <p>
        <a href="/" className="btn btn-danger btn-lg">
          Voltar à Página Principal
        </a>
      </p>
    </div>
  </main>
);

export default CloseOrder;
