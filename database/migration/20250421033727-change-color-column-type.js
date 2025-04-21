'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clothes', 'color', {
      type: Sequelize.STRING,  // Cambiar de INTEGER a STRING
      allowNull: true          // Asegúrate de que sea opcional o requerido según sea necesario
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clothes', 'color', {
      type: Sequelize.INTEGER, // Volver a INTEGER en caso de revertir la migración
      allowNull: true          // Opcional, dependiendo de tus necesidades
    });
  }
};
