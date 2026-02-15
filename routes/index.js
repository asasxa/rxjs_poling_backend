const combineRouters = require('koa-combine-routers').default || require('koa-combine-routers');
const ping = require('./ping');
const mesUnread = require('./messages/unread');

const router = combineRouters(
  ping,
  mesUnread,
);

module.exports = router;