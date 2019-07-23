const controller = require('../controllers/scripts');

module.exports = (router) => {
    router.route('/collect')
        .get(controller.collect);
    router.route('/')
        .get(controller.init);
};

