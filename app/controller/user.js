'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async info() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: {
        id: '1',
        name: '张三',
        age: 18,
        gender: '女',
      },
      msg: '操作成功',
    };
  }

  async findById() {
    const { ctx, params } = this;
    const userId = params;
    const userlist = [
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
    ];
    const result = userlist.find(v => v.id === userId);
    ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  async findById2() {
    const { ctx } = this;
    const userId = ctx.query.id;
    const userlist = [
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
    ];
    const result = userlist.find(v => v.id === userId);
    ctx.status = 201;
    ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };

  }

  // 创建单个用户
  async createUser() {
    const { ctx } = this;
    ctx.validate({
      username: { type: 'string', required: true, desc: '用户名' },
      password: { type: 'string', required: true, desc: '密码' },
      sex: { type: 'string', required: false, defValue: '男', desc: '性别' },
    });
    const { username, password } = ctx.request.body;

    const result = await ctx.model.User.create({ username, password });
    ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  // 创建多个用户
  async createUserList() {
    const { ctx } = this;
    const { data } = ctx.request.body;
    const result = await ctx.model.User.bulkCreate(data);
    console.log(data, '1111');
    ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  // 查单个
  async findUserByUserId() {
    // this.ctx.throw(500, '自定义出错信息');
    const id = parseInt(this.ctx.params.id);
    console.log(id);
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '操作成功',
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      data: user,
      msg: '操作成功',
    };
  }

  // findOne条件查
  async findUserByCondition() {
    const user = await this.ctx.model.User.findOne({
      where: {
        id: 2,
        sex: '女',
      },
    });
    if (!user) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '操作成功',
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      data: user,
      msg: '操作成功',
    };
  }

  // 查询多个
  async findAll() {
    const result = await this.ctx.model.User.findAll();
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '操作成功',
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  // 查询多个并计数
  async findAndCountAll() {
    const result = await this.ctx.model.User.findAndCountAll();
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '操作成功',
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  // 条件查多个
  async findAllCondition() {
    const Op = this.app.Sequelize.Op;
    const result = await this.ctx.model.User.findAll({
      where: {
        // id大于3
        id: {
          [Op.gt]: 3,
        },
        // 只查男
        sex: '男',
        // 模糊搜用户名
        username: {
          [Op.like]: '%3%',
        },
      },
    });
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '操作成功',
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  // 限制字段
  async findAllLimtColumn() {
    const { query } = this.ctx;
    // const result = await this.ctx.model.User.findAll({
    //   attributes: [ 'id', 'username', 'password' ],
    // });
    const limit = 5;
    const offset = (query.page - 1) * limit;
    const result = await this.ctx.model.User.findAll({
      attributes: {
        exclude: [ 'password' ],
      },
      order: [
        [ 'updated_at', 'DESC' ],
        [ 'id', 'DESC' ],
      ],
      offset,
      limit,
    });
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '操作成功',
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  // 分页查询
  async findAllByPage() {
    const { query } = this.ctx;
    const limit = 5;
    const offset = (query.page - 1) * limit;
    const result = await this.ctx.model.User.findAll({
      attributes: {
        exclude: [ 'password' ],
      },
      order: [
        [ 'updated_at', 'DESC' ],
        [ 'id', 'DESC' ],
      ],
      offset,
      limit,
    });
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '操作成功',
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      data: result,
      msg: '操作成功',
    };
  }

  // 更新用户
  async updateUserInfo() {
    const id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0;
    const result = await this.ctx.model.User.findByPk(id);
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: '未找到该用户',
      };
      return;
    }
    result.username = this.ctx.request.body.username;
    // const updateResult = await result.save();
    // fields 是只允许修改的字段
    const updateParams = this.ctx.request.body;
    const updateResult = await result.update(updateParams, {
      fields: [ 'username' ],
    });
    this.ctx.body = {
      code: 200,
      data: updateResult,
      msg: '操作成功',
    };

  }

  // 删除
  async destroy() {
    // const id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0;
    // const result = await this.ctx.model.User.findByPk(id);
    // if (!result) {
    //   this.ctx.body = {
    //     code: 200,
    //     data: null,
    //     msg: '未找到该用户',
    //   };
    //   return;
    // }

    // const destroyResult = await result.destroy();
    const Op = this.app.model.Sequelize.Op;
    const destroyResult = await this.app.model.User.destroy({
      where: {
        id: {
          [Op.lte]: 7,
        },
      },
    });
    this.ctx.body = {
      code: 200,
      data: destroyResult,
      msg: '操作成功',
    };
  }


}

module.exports = UserController;
