'use strict';

module.exports = () => {
  return async function errrorHanlder(ctx, next) {
    try {
      await next();
    } catch (error) {
      // 记录日志用
      ctx.app.emit('error', error, ctx);
      // 同一异常返回
      ctx.status = error.status;
      if (error.status === 422) {
        ctx.body = {
          msg: 'fail',
          data: error.message,
        };
      }
      ctx.body = {
        msg: 'fail',
        data: error.errors,
      };
    }
  };
};
