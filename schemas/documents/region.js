export default {
  name: 'region',
  title: 'Região',
  type: 'document',
  description: 'O nível mais amplo de localização. Ex: continente',
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
