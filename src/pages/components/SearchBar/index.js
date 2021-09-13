import React from "react";
import Order from "../Order";

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
        <Order />
      </div>
    </div>
  );
};

export default SearchBar;
