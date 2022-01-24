export default {
  name: 'country',
  title: 'País',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('O nome é obrigatório'),
    },
    {
      title: 'Descrição',
      name: 'description',
      type: 'text',
      rows: 2,
    },
    {
      title: 'Destaque na tela inicial?',
      name: 'isFeatured',
      type: 'boolean',
    },
    {
      title: 'Imagem de capa',
      name: 'coverImage',
      type: 'image',
    },
  ],
};
