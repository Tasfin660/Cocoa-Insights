import react from '@vitejs/plugin-react-swc';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: join(dirname(fileURLToPath(import.meta.url)), './src')
			},
			{ find: '~', replacement: dirname(fileURLToPath(import.meta.url)) }
		]
	}
});
