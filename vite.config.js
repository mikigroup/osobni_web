import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$img: resolve('static/')			
		}
	},
	server: {
    fs: {
      // Toto povoluje static složku, které je o úroveň výše
      allow: ['..'],
    },
  },
};



export default config;
