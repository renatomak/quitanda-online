import React from "react";

const SearchBar = () => {
  return (
    <div class="row">
      <div class="col-12 col-md-5">
        <form class="justify-content-center justify-content-md-start mb-3 mb-md-0">
          <div class="input-group input-group-sm">
            <input
              type="text"
              class="form-control"
              placeholder="Digite aqui o que procura"
            />
            <button class="btn btn-danger">Buscar</button>
          </div>
        </form>
      </div>
      <div class="col-12 col-md-7">
        <div class="d-flex flex-row-reverse justify-content-center justify-content-md-start">
          <form class="d-inline-block">
            <select class="form-select form-select-sm">
              <option>Ordenar pelo nome</option>
              <option>Ordenar pelo menor preço</option>
              <option>Ordenar pelo maior preço</option>
            </select>
          </form>
          <nav class="d-inline-block me-3">
            <ul class="pagination pagination-sm my-0">
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item disabled">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  4
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  5
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  6
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
