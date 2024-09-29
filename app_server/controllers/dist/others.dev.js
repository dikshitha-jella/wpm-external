"use strict";

/* GET 'about' page */
var about = function about(req, res) {
  res.render('generic-text', {
    title: 'About'
  });
};

module.exports = {
  about: about
};
//# sourceMappingURL=others.dev.js.map
