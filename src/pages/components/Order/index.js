import React from "react";

const Order = () => (
  <div class="row pb-3">
    <div class="col-12">
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

export default Order;
