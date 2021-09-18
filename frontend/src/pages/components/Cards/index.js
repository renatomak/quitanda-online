import React, { useContext } from 'react';
import { Context } from '../../../store';

const Cards = () => {
  const { products } = useContext(Context);
  console.log(products);
  return (
    <div className="row g-3">
      {products.map(({ id, name, price, description, quantity }) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={id}>
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i
                className="bi-suit-heart"
                style={{ fontSize: '24px', lineHeight: '24px' }}
              ></i>
            </a>
            <a href="/produto">
              <img src={`/images/${name}.jpg`} className="card-img-top" />
            </a>
            <div className="card-header">
              {`R$ ${parseFloat(price).toFixed(2)}`}
            </div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text truncar-3l">{description}</p>
            </div>
            <div className="card-footer">
              <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                Adicionar ao Carrinho
              </a>
              <small className="text-success">
                {`${parseFloat(quantity).toFixed(2)} kg em estoque`}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
