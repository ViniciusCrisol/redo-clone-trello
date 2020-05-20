import Item from '../models/Item';
import * as Yup from 'yup';

class ItemController {
  async create(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const response = await Item.create(req.body);

    return res.json(response);
  }

  async index(req, res) {
    const response = await Item.find();

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;

    const response = await Item.findByIdAndUpdate(id, {
      title: req.body.title,
      description: req.body.description,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const response = await Item.findByIdAndDelete(id);

    return res.json({ ok: 'true' });
  }
}

export default new ItemController();
