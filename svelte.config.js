import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
      files: {
      assets: 'static',
      hooks: {
        client: 'src/hooks.client',
        server: 'src/hooks.server'
      },
      lib: 'src/lib',
      params: 'src/params',
      routes: 'src/routes',
      appTemplate: 'src/app.html',
      errorTemplate: 'src/error.html'
    },
        paths: {
      assets: '',
      base: ''
    },
};

export default config;
