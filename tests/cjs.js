const tag = require('../index.js').tag
const populate = require('../index.js').populate
const link = require('../helpers.js').link
const embed = require('../helpers.js').embed
const siblings = require('../helpers.js').siblings

populate(document.body, [
  tag('h1', {class: 'test'}, 'DOMforever Test'),
  link('https://github.com/tomhodgins/domforever', 'DOMforever Homepage', 'Link to Github'),
  embed('http://tomhodgins.com', '16', '9'),
  tag('ul', {}, siblings('li', ['one', [{class: 'test'}, 'two'], 'three']))
])