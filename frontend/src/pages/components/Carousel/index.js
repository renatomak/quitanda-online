import React from 'react';

function Carousel() {
  return (
    <div class="container">
      <div
        id="carouselMain"
        class="carousel slide carousel-dark"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselMain"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMain"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMain"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img
              src="/asserts/img/slides/slide01.jpg"
              class="d-none d-md-block w-100"
              alt=""
            />
            <img
              src="/asserts/img/slides/slide01small.jpg"
              class="d-block d-md-none  w-100"
              alt=""
            />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="/asserts/img/slides/slide01.jpg"
              class="d-none d-md-block w-100"
              alt=""
            />
            <img
              src="/asserts/img/slides/slide01small.jpg"
              class="d-block d-md-none  w-100"
              alt=""
            />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="/asserts/img/slides/slide01.jpg"
              class="d-none d-md-block w-100"
              alt=""
            />
            <img
              src="/asserts/img/slides/slide01small.jpg"
              class="d-block d-md-none  w-100"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMain"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselMain"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
      <hr class="mt-3" />
    </div>
  );
}

export default Carousel;
