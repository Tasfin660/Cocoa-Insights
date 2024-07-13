import react from '@vitejs/plugin-react-swc';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const clientDir = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	root: clientDir,
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: join(clientDir, './src')
			},
			{ find: '~', replacement: clientDir }
		]
	},
	build: {
		outDir: join(clientDir, './dist/____'),
		emptyOutDir: true
	}
});
