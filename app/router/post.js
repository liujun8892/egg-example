'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 资源路由
  router.resources('/post', '/api/post', controller.post);
};
