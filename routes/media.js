const path = require('path');

module.exports = function (req, res, next) {
    res.sendFile(path.resolve('./media.html'));
};
