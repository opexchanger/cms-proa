export default {
  name: 'group',
  title: 'Grupo',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Viagens no Grupo',
      name: 'travels',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'travel'
            }
          ]
        }
      ]
    },
    {
      title: 'Aplicar desconto nas viagens do grupo',
      name: 'hasDiscount',
      type: 'boolean',
    },
    {
      title: 'Configuração do desconto',
      name: 'discount',
      type: 'discount',
      hidden: ({ document }) => {
        return !document?.hasDiscount
      },
    },
    {
      title: 'Criar página para o grupo',
      name: 'hasPage',
      type: 'boolean',
    },
    {
      title: 'URL',
      name: 'slug',
      type: 'slugValidated',
      hidden: ({ document }) => {
        return !document?.hasPage
      },
      description:
        'Identificador da página do grupo na barra de endereços. Gere automaticamente com o botão "generate".',
      validation: (Rule) =>
        Rule.custom((slug, context) => {
          if (!slug && context.document.hasPage) {
            return 'O slug é obrigatório se a página estiver habilitada';
          }
          return true;
        }),
    },
    {
      title: 'Descrição',
      name: 'description',
      type: 'textContent',
      hidden: ({ document }) => {
        return !document?.hasPage
      },
    },
  ]
}