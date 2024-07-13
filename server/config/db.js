import mongoose from 'mongoose'
let dbConnected = false

const connectDB = () =>
	mongoose
		.connect(`${process.env.MongoUrl}/Chocolates-Data`)
		.then(() => {
			console.log('Connected to MongoDB')
			dbConnected = true
		})
		.catch(err => {
			dbConnected = false
			console.error('Could not connect to MongoDB', err)
		})

export { dbConnected, connectDB }
