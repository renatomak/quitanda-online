module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Renato Marques',
        homePhone: '62999999999',
        cellPhone: '62989898989',
        email: 'renato@gmail.com',
        cpf: '43852886236',
        birthDate: new Date('1981-05-24'),
        password: '1234567',    
      },
      {
        name: 'Monica',
        homePhone: '62888888888',
        cellPhone: '62989898989',
        email: 'monica@gmail.com',
        cpf: '01428770429',
        birthDate: new Date('1981-05-24'),
        password: '1234567', 
      },
      {
        name: 'Ines',
        homePhone: '62977777777',
        cellPhone: '62989898989',
        email: 'ines@gmail.com',
        cpf: '61514286688',
        birthDate: new Date('1981-05-24'),
        password: '1234567', 
      },
      {
        name: 'Marcia',
        homePhone: '62966666666',
        cellPhone: '62989898989',
        email: 'marcia@gmail.com',
        cpf: '42214583211',
        birthDate: new Date('1981-05-24'),
        password: '1234567', 
      },
    ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
