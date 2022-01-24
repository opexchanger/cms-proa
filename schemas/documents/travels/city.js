export default {
  name: 'city',
  title: 'Cidade',
  type: 'document',
  fields: [
    {
      title: 'País a que pertence',
      name: 'country',
      type: 'reference',
      to: [{ type: 'country' }],
      validation: (Rule) => Rule.required().error('O país é obrigatório'),
    },
    {
      title: 'Estado a que pertence',
      name: 'state',
      type: 'reference',
      to: { type: 'state' },
      options: {
        filter: ({ document }) => {
          if (!document.country) {
            return;
          }
          return {
            filter: "country._ref == $country",
            params: {
              country: document.country._ref,
            }
          }
        }
      }
    },
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