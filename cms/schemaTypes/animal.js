// schemaTypes/animal.js
// Esquema de Sanity para los animales en adopción de Rovame.
// Cópialo dentro de tu carpeta schemaTypes/ y añádelo a schema.types en sanity.config.js

export default {
  name: 'animal',
  title: 'Animal en adopción',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'numeroFicha',
      title: 'Número de ficha',
      type: 'string',
      description: 'Ej: 014 (se mostrará como "FICHA Nº 014")',
    },
    {
      name: 'especie',
      title: 'Especie',
      type: 'string',
      options: {
        list: [
          { title: 'Perro', value: 'perro' },
          { title: 'Gato', value: 'gato' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'raza',
      title: 'Raza / tipo',
      type: 'string',
      description: 'Ej: Mestiza, Podenco, Europea común...',
    },
    {
      name: 'edad',
      title: 'Edad aproximada',
      type: 'string',
      description: 'Ej: ~3 años',
    },
    {
      name: 'caracteristicas',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Etiquetas cortas, ej: Cariñosa, Buena con niños',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    },
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'disponible',
      title: '¿Disponible para adopción?',
      type: 'boolean',
      initialValue: true,
      description: 'Desactívalo cuando el animal ya tenga hogar, sin necesidad de borrar la ficha',
    },
    {
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Opcional. Los números más bajos aparecen primero',
    },
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'raza', media: 'foto' },
  },
}
