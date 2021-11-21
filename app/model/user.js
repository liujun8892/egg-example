// app / model / user.js

'use strict';
const md5 = require('md5');

module.exports = app => {
  const { STRING, INTEGER, DATE, ENUM } = app.Sequelize;
  // 配置（重要：一定要配置详细，一定要！！！）
  const User = app.model.define('user', {
    id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
    username: { type: STRING(30), allowNull: false, defaultValue: '', comment: '用户名称', unique: true },
    password: { type: STRING(200), allowNull: false, defaultValue: '',
      set(value) {
        const enCrpty = md5(value + 'secret');
        this.setDataValue('password', enCrpty);
      },
    },
    avatar_url: { type: STRING(200), allowNull: true, defaultValue: '' },
    sex: { type: ENUM, values: [ '男', '女', '保密' ], allowNull: true, defaultValue: '男', comment: '用户性别' },
    created_at: {
      type: DATE,
      get() {
        const val = this.getDataValue('created_at');
        return 'zh' + val;
      },
    },
    updated_at: DATE,
  }, {
    timestamps: true, // 是否自动写入时间戳
    tableName: 'user', // 自定义数据表名称
  });

  return User;
};
