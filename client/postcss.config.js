export default {
	plugins: {
		tailwindcss: (await import('./tailwind.config.js')).default,
		autoprefixer: {}
	}
};
