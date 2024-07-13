/** @type {import('tailwindcss').Config} */
export default {
	content: ['../client/index.html', '../client/src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			crimsonPro: ['Crimson Pro', 'serif'],
			greatVibes: ['Great Vibes', 'cursive'],
			raleway: ['Raleway', 'sans-serif']
		},
		container: {
			center: true,
			padding: '3rem'
		},
		extend: {
			spacing: {
				1.5: '6px',
				2.5: '10px'
			},
			colors: {
				'brand': 'var(--color-brand)',
				'brand-dark': 'var(--color-brand-dark)',
				'brand-extradark': 'var(--color-brand-extradark)',
				'choco': 'var(--color-choco)',
				'primary-dark': 'var(--color-primary-dark)',
				'secondary-dark': 'var(--color-secondary-dark)',
				'primary-light': 'var(--color-primary-light)',
				'gold-light': 'var(--color-gold-light)',
				'gold-dark': 'var(--color-gold-dark)'
			},
			backgroundImage: {
				hero: "url('/hero.webp')"
			},
			boxShadow: {
				'material': 'var(--box-shadow--material)',
				'pqina-2': 'var(--box-shadow--pqina-2)'
			}
		}
	},
	plugins: []
};
