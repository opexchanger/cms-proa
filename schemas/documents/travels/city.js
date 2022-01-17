export default {
  name: 'city',
  title: 'Cidade',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Estado a que pertence',
      name: 'state',
      type: 'reference',
      to: [{ type: 'state' }],
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
    // TODO colocar como campo condicional então
    {
      title: 'Imagem de capa',
      name: 'coverImage',
      type: 'image',
      description: 'Não é necessário se não for aparecer na tela inicial.',
    },
  ],
};
