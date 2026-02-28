import { describe } from 'manten';
import webpack4 from 'webpack';
import webpack5 from 'webpack5';
import { loader } from './specs/loader.js';
import { plugin } from './specs/plugin.js';

const webpacks = [
	webpack4,
	webpack5,
];

describe('esbuild-loader', async () => {
	for (const webpack of webpacks) {
		describe(`Webpack ${webpack.version![0]}`, () => {
			loader(webpack);
			plugin(webpack);
		});
	}

	await import('./specs/tsconfig.js');
	await import('./specs/webpack5.js');
});
