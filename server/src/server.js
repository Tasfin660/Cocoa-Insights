import 'dotenv/config'
import app from './app.js'

if (process.env.Serverless !== 'Yes') {
	app.listen(process.env.PORT, () => {
		console.log(`Server is running on port ${process.env.PORT}`)
	})
}

export default app
