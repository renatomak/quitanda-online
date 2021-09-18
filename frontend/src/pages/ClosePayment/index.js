import React from 'react';

const ClosePayment = () => (
  <main className="flex-fill">
    <div className="container">
      <h1>Selecione a Forma de Pagamento</h1>
      <h3 className="mb-4">
        Selecione a forma de pagamento e clique em <b>Continuar</b> para
        prosseguir para <b>concluir o pedido</b>.
      </h3>
      <div className="d-flex justify-content-between flex-wrap border rounded-top pt-4 px-3">
        <div className="mb-4 mx-2 flex-even">
          <input
            type="radio"
            className="btn-check"
            name="pagamento"
            autocomplete="off"
            id="pag1"
          />
          <label className="btn btn-outline-danger p-4 h-100 w-100" for="pag1">
            <h3>
              <b className="text-dark">Cartão de Crédito</b>
            </h3>
            <hr />
            <form action="">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="txtNome"
                  className="form-control"
                  placeholder=" "
                  autofocus
                />
                <label for="txtNome" className="text-black-50">
                  Nome Impresso no Cartão
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="txtNumero"
                  className="form-control"
                  placeholder=" "
                />
                <label for="txtNumero" className="text-black-50">
                  Número do Cartão
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="txtValidade"
                  className="form-control"
                  placeholder=" "
                />
                <label for="txtValidade" className="text-black-50">
                  Validade (mm/aa)
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="txtCodigo"
                  className="form-control"
                  placeholder=" "
                />
                <label for="txtCodigo" className="text-black-50">
                  Código de Segurança
                </label>
              </div>

              <div className="form-floating">
                <select id="selParcelas" className="form-select">
                  <option value="1" selected>
                    À vista
                  </option>
                  <option value="2">2 x sem juros</option>
                  <option value="3">3 x sem juros</option>
                  <option value="4">4 x sem juros</option>
                  <option value="5">5 x sem juros</option>
                  <option value="6">6 x sem juros</option>
                </select>
                <label for="selParcelas" className="text-black-50">
                  Parcelamento
                </label>
              </div>
            </form>
          </label>
        </div>

        <div className="mb-4 mx-2 flex-even">
          <input
            type="radio"
            className="btn-check"
            name="pagamento"
            autocomplete="off"
            id="pag2"
          />
          <label className="btn btn-outline-danger p-4 h-100 w-100" for="pag2">
            <h3>
              <b className="text-dark">Dinheiro</b>
            </h3>
            <hr />
            <form action="">
              <h4>
                Valor da Compra: <b>R$ 63,86</b>
              </h4>
              <br />
              <p>Se precisar de troco, informe no campo abaixo.</p>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="txtTroco"
                  className="form-control"
                  placeholder=" "
                />
                <label for="txtTroco" className="text-black-50">
                  Precisa de troco para quanto?
                </label>
              </div>
            </form>
          </label>
        </div>
      </div>

      <div className="text-end border border-top-0 rounded-bottom p-4 pb-0">
        <a
          href="/close-address"
          className="btn btn-outline-success btn-lg mb-4"
        >
          Voltar aos Endereços
        </a>
        <a href="/close-order" className="btn btn-danger btn-lg ms-2 mb-4">
          Finalizar
        </a>
      </div>
    </div>
  </main>
);

export default ClosePayment;
