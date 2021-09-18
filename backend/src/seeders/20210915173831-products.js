module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('products',
    [
      {
        name: 'abacate grande',
        price: 3.50,
        description: 'Abacate grande da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/abacate2.jpg'
      },
      {
        name: 'abacate',
        price: 3.50,
        description: 'Abacate da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/abacate.jpg'
      },
      {
        name: 'abacaxi',
        price: 3.50,
        description: 'Abacaxi perola da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/abacaxi.jpg'
      },
      {
        name: 'abobrinha',
        price: 3.50,
        description: 'Abobrinha da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `VERDURAS`,
        url_image: 'http://localhost:3001/images/abobrinha.jpg'
      },
      {
        name: 'aboubora',
        price: 3.50,
        description: 'Aboubora cabutia da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `VERDURAS`,
        url_image: 'http://localhost:3001/images/aboubora.jpg'
      },
      {
        name: 'alface',
        price: 3.50,
        description: ' Alface da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `VERDURAS`,
        url_image: 'http://localhost:3001/images/alface.jpg'
      },
      {
        name: 'alho',
        price: 3.50,
        description: ' Alho da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `VERDURAS`,
        url_image: 'http://localhost:3001/images/alho.jpg'
      },
      {
        name: 'banana',
        price: 3.50,
        description: 'Banana prata da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/banana.jpg'
      },
      {
        name: 'goiaba',
        price: 3.50,
        description: 'Goiaba da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/goiaba.jpg'
      },
      {
        name: 'laranja',
        price: 3.50,
        description: 'Laranja da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/laranja.jpg'
      },
      {
        name: 'maçã',
        price: 3.50,
        description: 'Maçã da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/maçã.jpg'
      },
      {
        name: 'mamão',
        price: 3.50,
        description: 'Mamão da melhor qualidade possível, direto do produtor rural para a sua mesa.',
        quantity: 20,
        type: `FRUTAS`,
        url_image: 'http://localhost:3001/images/mamão.jpg'
      },
      
      
    ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
