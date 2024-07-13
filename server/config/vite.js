import { dirname, join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const clientDir = join(dirname(fileURLToPath(import.meta.url)), '../../client')

export default async (express, app) => {
	if (process.argv.includes('--dev')) {
		const { createServer } = await import('vite')

		const vite = await createServer({
			configFile: join(clientDir, './vite.config.ts'),
			server: {
				middlewareMode: true
			}
		})

		app.get('*', (req, res) => vite.middlewares(req, res))
	} else {
		app.use(
			express.static(join(clientDir, './dist/____'), {
				cacheControl: false,
				setHeaders(res, path, __) {
					const bn = basename(path)
					if (bn && bn.match(/.*-.{8}.[a-zA-Z0-9]+$/)?.[0] === bn) res.setHeader('cache-control', 'public, max-age=31536000, immutable')
					else res.setHeader('cache-control', 'public, max-age=60, must-revalidate')
				}
			})
		)

		app.get('*', (_, res) => res.setHeader('cache-control', 'public, max-age=60, must-revalidate').sendFile(join(clientDir, './dist/____/index.html')))
	}
}
