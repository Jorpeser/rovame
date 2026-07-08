// schemaTypes/historiaExito.js
// Esquema de Sanity para las historias de éxito de Rovame.
// Cópialo dentro de tu carpeta schemaTypes/ y añádelo a schema.types en sanity.config.js

export default {
  name: 'historiaExito',
  title: 'Historia de éxito',
  type: 'document',
  fields: [
    {
      name: 'nombreAnimal',
      title: 'Nombre del animal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'familiaAdoptante',
      title: 'Familia / persona adoptante',
      type: 'string',
      description: 'Ej: "Adoptado por la familia Martínez" — solo lo que queráis hacer público',
    },
    {
      name: 'testimonio',
      title: 'Testimonio',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'foto',
      title: 'Foto (antes/después opcional)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'fecha',
      title: 'Fecha de adopción',
      type: 'date',
    },
    {
      name: 'destacado',
      title: '¿Destacar en portada?',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: { title: 'nombreAnimal', subtitle: 'familiaAdoptante', media: 'foto' },
  },
}
