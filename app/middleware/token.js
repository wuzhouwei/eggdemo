module.exports = _ => {
    return async function token(ctx, next) {
        if (ctx.request.query.id == 1) {
            await next();
        } else {
            console.log('经过');
            ctx.body = '不让通过'
        }
    }
}