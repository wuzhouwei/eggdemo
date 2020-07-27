'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.request.query.id, '这是id');
    ctx.body = 'hi, egg2';
  }
}

module.exports = HomeController;
