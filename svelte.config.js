import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		alias: {
			'$lib/*': './src/lib/*',
			'$components/*': './src/components/*',
			'$constants/*': './src/constants/*',
			'$containers/*': './src/containers/*',
			'$params/*': './src/params/*',
			'$routes/*': './src/routes/*',
			'$assets/*': './src/lib/assets/*',
			'$stores/*': './src/stores/*'
		}
	}
};

export default config;
