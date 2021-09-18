import React from 'react';
import { CaretDown, CaretUp, Trash } from 'react-bootstrap-icons';

const ShoppCart = () => (
  <main className="flex-fill">
    <div className="container">
      <h1>Carrinho de Compras</h1>
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
              </h5>
            </div>
            <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
              <div className="input-group">
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <CaretDown />
                  </i>
                </button>
                <input
                  type="text"
                  className="form-control text-center border-dark"
                  value="4"
                />
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <CaretUp />
                  </i>
                </button>
                <button
                  className="btn btn-outline-danger border-dark btn-sm"
                  type="button"
                >
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <Trash />
                  </i>
                </button>
              </div>
              <div className="text-end mt-2">
                <small className="text-secondary">Valor kg: R$ 3,99</small>
                <br />
                <span className="text-dark">Valor Item: R$ 15,96</span>
              </div>
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
                Abacate manteiga da melhor qualidade possível e muito fresco.
              </h5>
            </div>
            <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
              <div className="input-group">
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i
                    className="bi-caret-down"
                    style={{ fontSize: '16px', lineHeight: '16px' }}
                  >
                    <CaretDown />
                  </i>
                </button>
                <input
                  type="text"
                  className="form-control text-center border-dark"
                  value="4"
                />
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <CaretUp />
                  </i>
                </button>
                <button
                  className="btn btn-outline-danger border-dark btn-sm"
                  type="button"
                >
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <Trash />
                  </i>
                </button>
              </div>
              <div className="text-end mt-2">
                <small className="text-secondary">Valor kg: R$ 3,99</small>
                <br />
                <span className="text-dark">Valor Item: R$ 15,96</span>
              </div>
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
                Abacate manteiga da melhor qualidade possível e muito fresco.
              </h5>
            </div>
            <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
              <div className="input-group">
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i
                    className="bi-caret-down"
                    style={{ fontSize: '16px', lineHeight: '16px' }}
                  >
                    <CaretDown />
                  </i>
                </button>
                <input
                  type="text"
                  className="form-control text-center border-dark"
                  value="4"
                />
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <CaretUp />
                  </i>
                </button>
                <button
                  className="btn btn-outline-danger border-dark btn-sm"
                  type="button"
                >
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <Trash />
                  </i>
                </button>
              </div>
              <div className="text-end mt-2">
                <small className="text-secondary">Valor kg: R$ 3,99</small>
                <br />
                <span className="text-dark">Valor Item: R$ 15,96</span>
              </div>
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
                Abacate manteiga da melhor qualidade possível e muito fresco.
              </h5>
            </div>
            <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
              <div className="input-group">
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i
                    className="bi-caret-down"
                    style={{ fontSize: '16px', lineHeight: '16px' }}
                  >
                    <CaretDown />
                  </i>
                </button>
                <input
                  type="text"
                  className="form-control text-center border-dark"
                  value="4"
                />
                <button className="btn btn-outline-dark btn-sm" type="button">
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <CaretUp />
                  </i>
                </button>
                <button
                  className="btn btn-outline-danger border-dark btn-sm"
                  type="button"
                >
                  <i style={{ fontSize: '16px', lineHeight: '16px' }}>
                    <Trash />
                  </i>
                </button>
              </div>
              <div className="text-end mt-2">
                <small className="text-secondary">Valor kg: R$ 3,99</small>
                <br />
                <span className="text-dark">Valor Item: R$ 15,96</span>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3">
          <div className="text-end">
            <h4 className="text-dark mb-3">Valor Total: R$ 63,84</h4>
            <a href="/" className="btn btn-outline-success btn-lg">
              Continuar Comprando
            </a>
            <a
              href="/close-shopp-cart"
              className="btn btn-danger btn-lg ms-2 mt-xs-3"
            >
              Fechar Compra
            </a>
          </div>
        </li>
      </ul>
    </div>
  </main>
);

export default ShoppCart;
