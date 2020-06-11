const User = require('../models/User');

module.exports = {
  async store(request, response) {
    const { username } = request.body;

    let user = await User.findOne({ username });

    if (!user) {
      user = await User.create({ username });
    }

    return response.json(user);
  },
};
