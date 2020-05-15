const routes = require('express').Router();
const MailController = require('./app/controllers/MailController');

routes.get('/', (req, res) => {
  res.json({ msg: 'Mail Service OK' });
});

routes.post('/mail', MailController.store);

module.exports = routes;
