const scripts = require('./scripts');

module.exports = (router) => {
    scripts(router);
    return router;
};
