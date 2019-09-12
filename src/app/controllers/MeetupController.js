import User from '../models/User';

class MeetupController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async store(req, res) {
    const { title, description, location, date, file_id } = req.body;
    return res.json({ title, description, location, date, file_id });
  }
}

export default new MeetupController();
