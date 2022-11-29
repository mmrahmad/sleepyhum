const branding = require('./__mocks__/branding.json');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: branding.colors.primaryMain,
				'primary-light': branding.colors.primaryLight,
				'primary-dark': branding.colors.primaryDark,
				'secondary-light': branding.colors.secondaryLight,
				'secondary-dark': branding.colors.secondaryDark
			},
			fontFamily: {
				primary: branding.fonts.primary,
				secondary: branding.fonts.secondary
			}
		}
	},
	plugins: []
};
