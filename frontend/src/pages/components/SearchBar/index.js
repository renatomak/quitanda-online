import React from 'react';
import Order from '../Order';

const SearchBar = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-5">
        <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Digite aqui o que procura"
            />
            <button className="btn btn-danger">Buscar</button>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-7">
        <Order />
      </div>
    </div>
  );
};

export default SearchBar;
