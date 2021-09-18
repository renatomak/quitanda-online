import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger border-bottom shadow-sm mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <b>Quitanda Online</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Principal
                </a>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  Contato
                </Link>
              </li>
            </ul>
            <div className="align-self-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/registration" className="nav-link text-white">
                    {' '}
                    Quero Me Cadastrar{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link text-white">
                    Entrar
                  </a>
                </li>
                <li className="nav-item">
                  <span
                    className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0"
                    title="5 produto(s) no carrinho"
                  >
                    <small>5</small>
                  </span>
                  <Link to="/shopp-cart" className="nav-link text-white">
                    <Cart />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
