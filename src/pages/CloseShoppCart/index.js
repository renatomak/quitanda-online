import React from "react";

const CloseShoppCart = () => (
  <main class="flex-fill">
    <div class="container">
      <h1>Confira os Itens</h1>
      <h3>
        Confira os itens e clique em <b>Continuar</b> para prosseguir para a{" "}
        <b>seleção do endereço de entrega</b>.
      </h3>
      <ul class="list-group mb-3">
        <li class="list-group-item py-3">
          <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img src="/img/produtos/000008.jpg" class="img-thumbnail" />
              </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" class="text-decoration-none text-danger">
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
        <li class="list-group-item py-3">
          <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img src="/img/produtos/000003.jpg" class="img-thumbnail" />
              </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" class="text-decoration-none text-danger">
                    Abacate Manteiga
                  </a>
                </b>
              </h4>
              <h5>
                Abacate manteiga da melhor qualidade possível e muito fresco.{" "}
                <br />
                <b>
                  4 unidade(s) <br />
                  R$ 15,96
                </b>
              </h5>
            </div>
          </div>
        </li>
        <li class="list-group-item py-3">
          <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img src="/img/produtos/000006.jpg" class="img-thumbnail" />
              </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" class="text-decoration-none text-danger">
                    Abacate Manteiga
                  </a>
                </b>
              </h4>
              <h5>
                Abacate manteiga da melhor qualidade possível e muito fresco.{" "}
                <br />
                <b>
                  4 unidade(s) <br />
                  R$ 15,96
                </b>
              </h5>
            </div>
          </div>
        </li>
        <li class="list-group-item py-3">
          <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
              <a href="#">
                <img src="/img/produtos/000012.jpg" class="img-thumbnail" />
              </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
              <h4>
                <b>
                  <a href="#" class="text-decoration-none text-danger">
                    Abacate Manteiga
                  </a>
                </b>
              </h4>
              <h5>
                Abacate manteiga da melhor qualidade possível e muito fresco.{" "}
                <br />
                <b>
                  4 unidade(s) <br />
                  R$ 15,96
                </b>
              </h5>
            </div>
          </div>
        </li>
        <li class="list-group-item pt-3 pb-0">
          <div class="text-end">
            <h4 class="text-dark mb-3">Valor Total: R$ 63,84</h4>
            <a href="/shopp-cart" class="btn btn-outline-success btn-lg mb-3">
              Voltar ao Carrinho
            </a>
            <a href="/close-address" class="btn btn-danger btn-lg ms-2 mb-3">
              Continuar
            </a>
          </div>
        </li>
      </ul>
    </div>
  </main>
);

export default CloseShoppCart;
