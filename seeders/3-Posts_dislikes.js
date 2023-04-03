'use strict';
var date = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Post_Downvotes', 
      [
        {
         PostId: 1,
         UserId: 30,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 2,
         UserId: 23,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 2,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 2,
         UserId: 72,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 2,
         UserId: 73,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 2,
         UserId: 74,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 3,
         UserId: 15,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 4,
         UserId: 65,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 5,
         UserId: 58,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 5,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 5,
         UserId: 72,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 5,
         UserId: 73,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 5,
         UserId: 74,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 6,
         UserId: 50,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 7,
         UserId: 29,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 7,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 8,
         UserId: 22,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 8,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 8,
         UserId: 72,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 8,
         UserId: 73,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 8,
         UserId: 74,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 8,
         UserId: 75,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 9,
         UserId: 14,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 9,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 10,
         UserId: 64,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 10,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 11,
         UserId: 57,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 11,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 11,
         UserId: 72,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 11,
         UserId: 73,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 11,
         UserId: 74,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 11,
         UserId: 75,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 12,
         UserId: 49,
         updatedAt: date,
         createdAt: date
        },
        {
         PostId: 12,
         UserId: 71,
         updatedAt: date,
         createdAt: date
        }
       ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', date, {});
     */
  },
};
