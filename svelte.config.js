import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import 'dotenv/config'; // npm install dotenv

const basepath = process.env.PUBLIC_BASE_PATH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Required for SPAs
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: ['*'] // Prerender all routes
		},
		paths: {
			base: basepath
		}
	}
};

export default config;
