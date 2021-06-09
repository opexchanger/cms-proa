export default {
  name: 'subRegion',
  title: 'Sub-região',
  description: 'O nível mais próximo de localização. Ex: país',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Região a que pertence',
      name: 'region',
      type: 'reference',
      to: [{ type: 'region' }],
    },
    {
      title: 'Descrição',
      name: 'description',
      type: 'text',
      rows: 2,
      description:
        'Opcional. Uma frase que aparece para os usuários quando selecionarem a localização.',
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
      description: 'Não é necessário se não for aparecer na tela inicial.',
    },
  ],
};
