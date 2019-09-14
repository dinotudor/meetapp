import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    const meetUps = await Meetup.findAll();
    return res.json(meetUps);
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

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res
        .status(400)
        .json({ error: "Can't create a meetup in the past" });
    }

    const user_id = req.userId;

    const meetup = await Meetup.create({
      ...req.body,
      user_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  /*  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      file_id: Yup.number(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);
    console.log(meetup);

    if (meetup.user_id !== user_id) {
      return res.satus(400).json({ error: 'Not authorized' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: "Can't update past meetups" });
    }

    if (meetup.past) {
      return res.status(400).json({ error: "Can't update past meetups" });
    }

    await meetup.update(req.body);

    return res.json(meetup);
  } */
}

export default new MeetupController();
