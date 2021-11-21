'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async index() {
    this.ctx.body = '列表页';
  }

  async new() {
    this.ctx.body = '新增表单页';
  }

  async create() {
    this.ctx.body = '新增逻辑';
  }

  async show() {
    this.ctx.body = '详情页';
  }

  async edit() {
    this.ctx.body = '编辑表单页';
  }

  async update() {
    this.ctx.body = '更新逻辑';
  }

  async destroy() {
    this.ctx.body = '删除逻辑';
  }
}

module.exports = PostController;
