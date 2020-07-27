'use strict';

const Controller = require('egg').Controller;

class login extends Controller {
     async login(){
         const {ctx,app} = this
        if (ctx.request.query.name == 5) {
            const token  =  app.jwt.sign({
              name:'5'
            },app.config.jwt.secret)

            ctx.body = token
        }
  }
}

module.exports = login;