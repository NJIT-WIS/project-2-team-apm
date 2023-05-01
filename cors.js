const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://njit-wis.github.io/project-2-team-apm/']; // add your website's domain here

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = cors(corsOptions);
