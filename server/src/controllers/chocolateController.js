import ChocolateModel from '../models/chocolateModel.js';

const getChocolates = (_, res) => {
  ChocolateModel.find()
    .then((chocolates) => res.status(200).json(chocolates))
    .catch((err) => {
      res
        .status(500)
        .json({ error: 'Internal Server Error', details: err.message });
    });
};

const postChocolate = (req, res) => {
  const chocolate = req.body;
  const newChocolate = new ChocolateModel(chocolate);
  newChocolate
    .save()
    .then((savedChocolate) => res.status(201).json(savedChocolate))
    .catch((err) => {
      res
        .status(500)
        .json({ error: 'Internal Server Error', details: err.message });
    });
};

const deleteChocolate = (req, res) => {
  const { id } = req.params;

  ChocolateModel.deleteOne({ _id: id })
    .then((result) => {
      result.deletedCount === 1
        ? res.status(204).send()
        : res.status(404).send('Chocolate not found');
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: 'Internal Server Error', details: err.message });
    });
};

export { deleteChocolate, postChocolate, getChocolates };
