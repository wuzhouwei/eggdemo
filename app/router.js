'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  console.log(controller,'controller');
  const token = app.middleware.token();
  router.get('/login', controller.login);
  router.get('/', controller.home.index);
 
};
