export default {
  name: 'country',
  title: 'País',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'name',
      type: 'string',
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
