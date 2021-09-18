import React from 'react';

const CloseShoppCart = () => (
  <main className="flex-fill">
    <div className="container">
      <h1>Confira os Itens</h1>
      <h3>
        Confira os itens e clique em <b>Continuar</b> para prosseguir para a{' '}
        <b>seleção do endereço de entrega</b>.
      </h3>
      <ul className="list-group mb-3">
        <li className="list-group-item py-3">
          <div className="row g-3">
            <div className="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img
                  src="/asserts/img/produtos/000008.jpg"
                  className="img-thumbnail"
                />
              </a>
            </div>
            <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" className="text-decoration-none text-danger">
                    Abacate Manteiga
                  </a>
                </b>
              </h4>
              <h5>
                Abacate manteiga da melhor qualidade possível e muito fresco.
                <br />
                <b>
                  4 unidade(s) <br />
                  R$ 15,96
                </b>
              </h5>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3">
          <div className="row g-3">
            <div className="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img
                  src="/asserts/img/produtos/000003.jpg"
                  className="img-thumbnail"
                />
              </a>
            </div>
            <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" className="text-decoration-none text-danger">
                    Abacate Manteiga
                  </a>
                </b>
              </h4>
              <h5>
                Abacate manteiga da melhor qualidade possível e muito fresco.{' '}
                <br />
                <b>
                  4 unidade(s) <br />
                  R$ 15,96
                </b>
              </h5>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3">
          <div className="row g-3">
            <div className="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img
                  src="/asserts/img/produtos/000006.jpg"
                  className="img-thumbnail"
                />
              </a>
            </div>
            <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" className="text-decoration-none text-danger">
                    Abacate Manteiga
                  </a>
                </b>
              </h4>
              <h5>
                Abacate manteiga da melhor qualidade possível e muito fresco.{' '}
                <br />
                <b>
                  4 unidade(s) <br />
                  R$ 15,96
                </b>
              </h5>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3">
          <div className="row g-3">
            <div className="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img
                  src="/asserts/img/produtos/000012.jpg"
                  className="img-thumbnail"
                />
              </a>
            </div>
            <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" className="text-decoration-none text-danger">
                    Abacate Manteiga
                  </a>
                </b>
              </h4>
              <h5>
                Abacate manteiga da melhor qualidade possível e muito fresco.{' '}
                <br />
                <b>
                  4 unidade(s) <br />
                  R$ 15,96
                </b>
              </h5>
            </div>
          </div>
        </li>
        <li className="list-group-item pt-3 pb-0">
          <div className="text-end">
            <h4 className="text-dark mb-3">Valor Total: R$ 63,84</h4>
            <a
              href="/shopp-cart"
              className="btn btn-outline-success btn-lg mb-3"
            >
              Voltar ao Carrinho
            </a>
            <a
              href="/close-address"
              className="btn btn-danger btn-lg ms-2 mb-3"
            >
              Continuar
            </a>
          </div>
        </li>
      </ul>
    </div>
  </main>
);

export default CloseShoppCart;
