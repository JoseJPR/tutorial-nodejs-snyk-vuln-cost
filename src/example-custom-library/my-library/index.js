/** Require main dependences */
const jwt = require('jsonwebtoken');

module.exports = {
  methodExample: () => {
    return 'Hi from Method Example';
  },
  getCustomToken: (data) => {
    return jwt.sign(data, 'secret', { expiresIn: 60 * 60 });
  }
}