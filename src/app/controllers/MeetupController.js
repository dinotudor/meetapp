import User from '../models/User';

class MeetupController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new MeetupController();
