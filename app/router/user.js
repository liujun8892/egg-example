'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 用户controller
  router.get('/user/info', controller.user.info);
  router.get('/user/findById/:id', controller.user.findById);
  router.get('/user/findById2', controller.user.findById2);
  router.post('/user/createUser', controller.user.createUser);
  router.post('/user/createUserList', controller.user.createUserList);
  router.get('/user/findUserByUserId/:id', controller.user.findUserByUserId);
  router.get('/user/findUserByCondition', controller.user.findUserByCondition);
  router.get('/user/findAll', controller.user.findAll);
  router.get('/user/findAndCountAll', controller.user.findAndCountAll);
  router.get('/user/findAllCondition', controller.user.findAllCondition);
  router.get('/user/findAllLimtColumn', controller.user.findAllLimtColumn);
  router.get('/user/findAllByPage', controller.user.findAllByPage);
  router.post('/user/updateUserInfo/:id', controller.user.updateUserInfo);
  router.post('/user/destroy/:id', controller.user.destroy);


};
