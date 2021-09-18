const headers = { 'Content-type': 'application/json' };

function getProducts() {
  const endpoint = 'http://localhost:3001/products';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err.message));
}

export { getProducts };
