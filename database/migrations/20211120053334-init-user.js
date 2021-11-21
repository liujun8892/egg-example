'use strict';

module.exports = {
  // 创建表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, ENUM } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
      username: { type: STRING(30), allowNull: false, defaultValue: '', comment: '用户名称', unique: true },
      password: { type: STRING(200), allowNull: false, defaultValue: '' },
      avatar_url: { type: STRING(200), allowNull: true, defaultValue: '' },
      sex: { type: ENUM, values: [ '男', '女', '保密' ], allowNull: true, defaultValue: '男', comment: '用户性别' },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  // 删除表
  down: async queryInterface => {
    await queryInterface.dropTable('user');
  },
};
