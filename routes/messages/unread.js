const Router = require('@koa/router');
const router = new Router();
const RandomData = require('../../api/RandomData');
const data = new RandomData();

router.get('/messages/unread', async (ctx) => {
  ctx.response.body = data.generate()
});

module.exports = router;
