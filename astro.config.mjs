import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	// Configure `remark-math` and `rehype-mathjax` plugins:
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
	integrations: [
		starlight({
			title: 'miguehm',
			social: {
				github: 'https://github.com/miguehm/',
			},
			sidebar: [
				{
					label: 'Introducción',
					autogenerate: { directory: 'Introducción' },
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
					autogenerate: { directory: 'Evaluación' },
				},
				{
					label: 'Conclusiones',
					autogenerate: { directory: 'Conclusiones' },
				},
			],
		}),
	],
});
