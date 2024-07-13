import mongoose from 'mongoose';

const connectDB = () => {
  mongoose
    .connect(`${process.env.MongoUrl}/Chocolates-Data`)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
};

export default connectDB;
