import * as Yup from 'yup';
import User from '../models/User';
import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      file_id: Yup.number().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    // const user_id = req.userId;

    const meetup = await Meetup.create({
      title: req.body.title,
      description: req.body.description,
      file_id: req.body.file_id,
      user_id: req.userId,
      location: req.body.location,
      date: req.body.date,
    });

    return res.json(meetup);
  }
}

export default new MeetupController();
