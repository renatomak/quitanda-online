import React from 'react';

const CloseAddress = () => (
  <main className="flex-fill">
    <div className="container">
      <h1>Selecione o Endereço de Entrega</h1>
      <h3 className="mb-4">
        Selecione o endereço de entrega e clique em <b>Continuar</b> para
        prosseguir para a <b>seleção da forma de pagamento</b>.
      </h3>
      <div className="d-flex justify-content-around flex-wrap border rounded-top pt-4 px-3">
        <div className="mb-4 mx-2 flex-even">
          <input
            type="radio"
            className="btn-check"
            name="endereco"
            autocomplete="off"
            id="end1"
          />
          <label className="btn btn-outline-danger p-4 h-100 w-100" for="end1">
            <h3>
              <b className="text-dark">Minha Casa</b>
              <br />
              <hr />
              <b>Ricardo Maroquio</b>
              <br />
              Rua Caminho Virtual, 101
              <br />
              Compulândia/PC
              <br />
              CEP 01.010-101
            </h3>
          </label>
        </div>
        <div className="mb-4 mx-2 flex-even">
          <input
            type="radio"
            className="btn-check"
            name="endereco"
            autocomplete="off"
            id="end2"
          />
          <label className="btn btn-outline-danger p-4 h-100 w-100" for="end2">
            <h3>
              <b className="text-dark">Meu Trabalho</b>
              <br />
              <hr />
              <b>Ricardo Maroquio</b>
              <br />
              Rua Caminho Virtual, 101
              <br />
              Compulândia/PC
              <br />
              CEP 01.010-101
            </h3>
          </label>
        </div>
        <div className="mb-4 mx-2 flex-even">
          <input
            type="radio"
            className="btn-check"
            name="endereco"
            autocomplete="off"
            id="end3"
          />
          <label className="btn btn-outline-danger p-4 h-100 w-100" for="end3">
            <h3>
              <b className="text-dark">Casa de Praia</b>
              <br />
              <hr />
              <b>Ricardo Maroquio</b>
              <br />
              Rua Caminho Virtual, 101
              <br />
              Compulândia/PC
              <br />
              CEP 01.010-101
            </h3>
          </label>
        </div>
      </div>
      <div className="text-end border border-top-0 rounded-bottom p-4 pb-0">
        <a
          href="/close-shopp-cart"
          className="btn btn-outline-success btn-lg mb-4"
        >
          Voltar aos Itens
        </a>
        <a href="/close-payment" className="btn btn-danger btn-lg ms-2 mb-4">
          Continuar
        </a>
      </div>
    </div>
  </main>
);

export default CloseAddress;
