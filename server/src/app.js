import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { connectDB, dbConnected } from '../config/db.js'
import chocolateRouter from './routes/chocolateRoute.js'
import premiumRouter from './routes/premiumRoute.js'
import vite from '../config/vite.js'

const app = express()

app.use(cors())
app.disable('x-powered-by')
app.use(express.json())
app.use(bodyParser.json())

// if (!dbConnected) await connectDB()
app.use(async (req, res, next) => {
	if (!req.path.toLowerCase().startsWith('/api')) return next()
	if (!dbConnected) await connectDB()
	if (!dbConnected) return res.status(500).send({ error: true, success: false, message: "Couldn't connect to the database" })
	else return next()
})

app.use('/api/v1/chocolates', chocolateRouter)
app.use('/api/v1/premiums', premiumRouter)

// handle frontend
await vite(express, app)

export default app
