import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resumenes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resumenes' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    semana: z.string(),
  }),
});

export const collections = { resumenes };
