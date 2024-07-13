import PremiumModel from '../models/premiumModel.js';

const getPremiums = (_, res) => {
  PremiumModel.find()
    .sort({ brand: 1 })
    .then((premiums) => res.status(200).json(premiums))
    .catch((err) => {
      res
        .status(500)
        .json({ error: 'Internal Server Error', details: err.message });
    });
};

export { getPremiums };
