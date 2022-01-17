export default {
  name: 'travel',
  title: 'Viagem',
  type: 'document',
  fields: [
    {
      title: 'Nome da viagem*',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('O nome é obrigatório'),
    },
    {
      title: 'URL*',
      name: 'slug',
      type: 'slugValidated',
      description:
        'Identificador da página da viagem na barra de endereços. Gere automaticamente com o botão "generate".',
      validation: (Rule) => Rule.required().error('O slug é obrigatório'),
    },
    {
      name: 'category',
      title: 'Categoria a que pertence*',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required().error('O tipo de viagem é obrigatória'),
    },
    {
      title: 'Localização*',
      name: 'city',
      type: 'reference',
      to: [{ type: 'city' }],
      validation: (Rule) => Rule.required().error('A localização é obrigatória'),
    },
    {
      title: 'Imagem de capa',
      name: 'coverImage',
      type: 'image',
    },
    {
      title: 'Preço a partir de:*',
      name: 'price',
      type: 'number',
      description: 'Apenas o valor numérico',
      placeholder: 'ex: 499.90',
      validation: (Rule) => Rule.required().error('O preço é obrigatório'),
    },
    {
      title: 'Aplicar desconto',
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
      title: 'Em até quantas vezes?',
      name: 'installments',
      type: 'number',
      description: 'Apenas o número',
      placeholder: 'ex: 12',
    },
    {
      title: 'Taxa',
      name: 'tax',
      type: 'number',
      description: 'Apenas o valor. Vazio se não tiver.',
    },
    {
      title: 'Início da viagem',
      name: 'departureDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Hoje',
      },
    },
    {
      title: 'Final da viagem',
      name: 'returnDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Hoje',
      },
    },
    {
      title: 'Embarque em:',
      name: 'boardingPlace',
      type: 'string',
      placeholder: 'Nome da cidade',
    },
    {
      title: 'Aéreo',
      name: 'hasAereo',
      type: 'boolean',
    },
    {
      title: 'Transfer',
      name: 'hasTransfer',
      type: 'boolean',
    },
    {
      title: 'Bloqueio',
      name: 'hasBlock',
      type: 'boolean',
    },
    {
      title: 'Grupo com guia',
      name: 'hasGuide',
      type: 'boolean',
    },
    {
      title: 'Child Free',
      name: 'hasChildFree',
      type: 'boolean',
    },
    {
      title: 'Detalhes do Child Free',
      name: 'childFree',
      type: 'object',
      hidden: ({ document }) => {
        return !document?.discount?.hasChildFree
      },
      fields: [
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantas crianças?*',
          validation: (Rule) =>
            Rule.custom((quantity, context) => {
              if (!quantity && context.document.hasChildFree) {
                return 'O número de crianças é obrigatório se o Child free estiver habilitado';
              }
              return true;
            }),
        },
        {
          name: 'age',
          type: 'number',
          title: 'Até qual idade?*',
          validation: (Rule) =>
            Rule.custom((age, context) => {
              if (!age && context.document.hasChildFree) {
                return 'A idade é obrigatória se o Child free estiver habilitado';
              }
              return true;
            }),
        },
      ],
    },
    {
      title: 'Cortesia',
      name: 'hasCortesy',
      type: 'boolean',
    },
    {
      title: 'Texto da cortesia*',
      name: 'cortesy',
      type: 'string',
      placeholder: 'ex: Praia do Jacaré',
      hidden: ({ document }) => {
        return !document?.discount?.hasCortesy
      },
      validation: (Rule) =>
        Rule.custom((cortesy, context) => {
          if (!cortesy && context.document.hasCortesy) {
            return 'O texto é obrigatório se a cortesia estiver habilitada';
          }

          return true;
        }),
    },
    {
      title: 'Sobre a viagem',
      name: 'content',
      type: 'textContent',
      description: 'O conteúdo principal da página da viagem',
    },
    {
      name: 'gallery',
      title: 'Galeria de clientes',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
      }]
    }
  ],
};
