'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);

  require('./router/user')(app);

  require('./router/post')(app);

  // // 用户controller
  // router.get('/user/info', controller.user.info);
  // router.get('/user/findById/:id', controller.user.findById);
  // router.get('/user/findById2', controller.user.findById2);
  // router.post('/user/createUser', controller.user.createUser);

  // // 资源路由
  // router.resources('/post', '/api/post', controller.post);
};
