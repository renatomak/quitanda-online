import React from "react";
import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger border-bottom shadow-sm mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            <b>Quitanda Online</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav flex-grow-1">
              <li class="nav-item">
                <a class="nav-link text-white" href="/">
                  Principal
                </a>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link text-white">
                  Contato
                </Link>
              </li>
            </ul>
            <div class="align-self-end">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/registration" class="nav-link text-white">
                    {" "}
                    Quero Me Cadastrar{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <a href="/login.html" class="nav-link text-white">
                    Entrar
                  </a>
                </li>
                <li class="nav-item">
                  <span
                    class="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0"
                    title="5 produto(s) no carrinho"
                  >
                    <small>5</small>
                  </span>
                  <a href="/carrinho.html" class="nav-link text-white">
                    <i style={{ fontSize: "24px", lineHeight: "24px" }}>
                      <Cart />
                    </i>
                  </a>
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
