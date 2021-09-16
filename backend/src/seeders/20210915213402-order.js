module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('orders',
    [
      { user_id: 1, product_id: 1, quantity: 5 },
      { user_id: 1, product_id: 3, quantity: 5 },
      { user_id: 2, product_id: 1, quantity: 5 },
      { user_id: 2, product_id: 2, quantity: 5 },
      { user_id: 3, product_id: 4, quantity: 5 },
      { user_id: 3, product_id: 5, quantity: 5 },
      { user_id: 3, product_id: 3, quantity: 5 },
    ],
    {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};