/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1637017271937_3668';

  // add your middleware config here
  config.middleware = [ 'errorHanlder' ];

  // flag to enable your hanlder
  // config.errorHanlder = {
  //   enable: true,
  //   // match: '/user/findUserByUserId',
  //   ignore: '/user/findUserByUserId',
  // };

  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭crsf,开启跨域
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ ],
  };
  // 允许跨域方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT,  POST, DELETE, PATCH',
  };
  // 数据库的配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    port: 8889,
    database: 'eggapi',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: true,
    },
  };


  return {
    ...config,
    ...userConfig,
  };
};
