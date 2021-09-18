import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getProducts } from './requests';

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const getListProducts = async () => {
    const result = await getProducts();
    console.log(result);
    setProducts(result);
  };

  useEffect(() => {
    getListProducts();
  }, []);

  const context = { products, getListProducts };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export { Context, Provider };

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
