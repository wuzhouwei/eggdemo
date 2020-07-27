'use strict';

const Controller = require('egg').Controller;

class login extends Controller {
  async index() {
    const { ctx, app } = this
    if (ctx.request.query.name == 5) {
      const token = app.jwt.sign({
        name: '5'
      }, app.config.jwt.secret)

      ctx.body = token
    } else {
      ctx.body = '经过了'
    }
  }
}

module.exports = login;