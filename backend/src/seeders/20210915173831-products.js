module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('products',
    [
      {
        name: 'Banana',
        price: 3.50,
        description: 'Nanica',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/banana.jpg'
      },
      {
        name: 'abacate',
        price: 3.50,
        description: 'normal',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/abacate.jpg'
      },
      {
        name: 'abacate grande',
        price: 3.50,
        description: 'grande',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/abacate2.jpg'
      },
      {
        name: 'abacaxi',
        price: 3.50,
        description: 'perola',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/abacaxi.jpg'
      },
      {
        name: 'abobrinha',
        price: 3.50,
        description: 'Nanica',
        quantity: 20,
        type: `VERDURAS`,
        url_image: 'http://localhost:3001/images/abobrinha.jpg'
      },
      {
        name: 'aboubora',
        price: 3.50,
        description: 'cabutia',
        quantity: 20,
        type: `VERDURAS`,
        url_image: 'http://localhost:3001/images/aboubora.jpg'
      },
      {
        name: 'alface',
        price: 3.50,
        description: 'manteiga',
        quantity: 20,
        type: `VERDURAS`,
        url_image: 'http://localhost:3001/images/alface.jpg'
      },
    ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
