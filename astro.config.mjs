import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
  site: 'https://miguehm.github.io',
  base: 'global-transform',
	// Configure `remark-math` and `rehype-mathjax` plugins:
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
	integrations: [
		starlight({
			title: 'Transformaciones Globales',
  		customCss: ['./src/mathjax.css'],
			social: {
				github: 'https://github.com/miguehm/',
			},
			sidebar: [
				{
					label: 'Introducción',
					autogenerate: { directory: 'introduccion' },
				},
				{
					label: 'Diseño',
					items: [
						'diseno/python',
						'diseno/javascript',
					]
				},
				{
					label: 'Evaluación',
					autogenerate: { directory: 'evaluacion' },
				},
				{
					label: 'Conclusiones',
					autogenerate: { directory: 'conclusiones' },
				},
			],
		}),
	],
});
