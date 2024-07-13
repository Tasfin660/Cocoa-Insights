import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import connectDB from '../config/db.js'
import chocolateRouter from './routes/chocolateRoute.js'
import premiumRouter from './routes/premiumRoute.js'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const clientDir = join(dirname(fileURLToPath(import.meta.url)), '../../client')
const app = express()
connectDB()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1/chocolates', chocolateRouter)
app.use('/api/v1/premiums', premiumRouter)

if (!process.argv.includes('--dev')) {
	app.use(
		express.static(join(clientDir, './dist/____'), {
			cacheControl: false,
			setHeaders({ setHeader }, path, __) {
				const bn = basename(path)
				if (bn && bn.match(/.*-.{8}.[a-zA-Z0-9]+$/)?.[0] === bn) setHeader('cache-control', 'public, max-age=31536000, immutable')
				else setHeader('cache-control', 'public, max-age=60, must-revalidate')
			}
		})
	)
} else {
	const { createServer } = await import('vite')

	const vite = await createServer({
		configFile: join(clientDir, './vite.config.ts'),
		server: {
			middlewareMode: true
		}
	})

	app.get('*', (req, res) => vite.middlewares(req, res))
}

export default app
