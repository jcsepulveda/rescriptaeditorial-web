import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const libros = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/libros" }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		publishDate: z.string().optional(),
		isFeatured: z.boolean().default(false),
		status: z.enum(['publicado', 'proximamente']).default('proximamente'),
	}),
});

export const collections = {
	'libros': libros,
};
