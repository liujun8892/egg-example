'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg!!!';
  }

  async list() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: [
        {
          id: '1',
          name: '张三',
        },
        {
          id: '2',
          name: '李四',
        },
        {
          id: '3',
          name: '王五',
        },
      ],
      msg: '操作成功',
    };
  }
}

module.exports = HomeController;
