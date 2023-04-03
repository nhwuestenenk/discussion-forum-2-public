'use strict';
var date = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comment_Downvotes', 
    [
      {
       CommentId: 3,
       UserId: 15,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 6,
       UserId: 16,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 7,
       UserId: 17,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 16,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 9,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 13,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 10,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 28,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 11,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 12,
       UserId: 11,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 12,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 12,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 12,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 12,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 12,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 12,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 9,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 13,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 18,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 14,
       UserId: 79,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 26,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 15,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 7,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 16,
       UserId: 79,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 18,
       UserId: 1,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 22,
       UserId: 2,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 23,
       UserId: 3,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 27,
       UserId: 50,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 30,
       UserId: 51,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 31,
       UserId: 52,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 43,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 33,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 34,
       UserId: 41,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 34,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 34,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 34,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 34,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 34,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 34,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 46,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 35,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 39,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 36,
       UserId: 79,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 58,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 37,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 38,
       UserId: 48,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 38,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 38,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 38,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 38,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 38,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 38,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 56,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 39,
       UserId: 79,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 37,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 40,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 42,
       UserId: 36,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 46,
       UserId: 37,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 47,
       UserId: 38,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 51,
       UserId: 20,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 55,
       UserId: 21,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 56,
       UserId: 22,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 30,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 57,
       UserId: 79,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 7,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 58,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 59,
       UserId: 1,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 59,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 59,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 59,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 59,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 59,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 59,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 22,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 60,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 12,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 61,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 19,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 62,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 25,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 79,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 63,
       UserId: 80,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 64,
       UserId: 4,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 64,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 64,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 64,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 64,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 64,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 64,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 65,
       UserId: 41,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 66,
       UserId: 42,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 72,
       UserId: 43,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 75,
       UserId: 55,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 79,
       UserId: 56,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 80,
       UserId: 57,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 65,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 81,
       UserId: 79,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 42,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 82,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 83,
       UserId: 36,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 83,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 83,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 83,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 83,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 83,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 83,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 57,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 84,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 54,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 85,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 39,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 86,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 47,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 76,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 77,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 87,
       UserId: 78,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 88,
       UserId: 60,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 88,
       UserId: 71,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 88,
       UserId: 72,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 88,
       UserId: 73,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 88,
       UserId: 74,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 88,
       UserId: 75,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 89,
       UserId: 41,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 90,
       UserId: 42,
       updatedAt: date,
       createdAt: date
      },
      {
       CommentId: 94,
       UserId: 43,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
