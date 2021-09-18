import React from 'react';

const Order = () => (
  <div className="row pb-3">
    <div className="col-12">
      <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
        <form className="d-inline-block">
          <select className="form-select form-select-sm">
            <option>Ordenar pelo nome</option>
            <option>Ordenar pelo menor preço</option>
            <option>Ordenar pelo maior preço</option>
          </select>
        </form>
        <nav className="d-inline-block me-3">
          <ul className="pagination pagination-sm my-0">
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                6
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Order;
