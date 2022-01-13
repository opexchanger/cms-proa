export default {
  name: 'discount',
  title: 'Desconto',
  type: 'object',
  fields: [
    {
      title: 'Forma de desconto',
      name: 'format',
      type: 'string',
      options: {
        list: [
          { title: 'Porcentagem', value: 'percent' },
          { title: 'Valor Final', value: 'absolute' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      title: 'Porcentagem de desconto',
      name: 'percentageValue',
      type: 'number',
      description: 'Apenas o valor numérico',
      placeholder: 'ex: 10 se for 10%',
      hidden: ({ document }) => {
        return document?.discount?.format !== 'percent'
      },
      validation: (Rule) =>
        Rule.custom((percentageValue, context) => {
          if (!context.document.hasDiscount) {
            return true;
          }
          if (!percentageValue && context.document.discount.format === 'percent') {
            return 'O valor é obrigatório se o desconto estiver habilitado';
          }
          return true;
        }),
    },
    {
      title: 'Valor do produto com o desconto aplicado',
      name: 'absoluteValue',
      type: 'number',
      description: 'Apenas o valor numérico',
      placeholder: 'ex: 499.90',
      hidden: ({ document }) => {
        return document?.discount?.format !== 'absolute'
      },
      validation: (Rule) =>
        Rule.custom((absoluteValue, context) => {
          if (!context.document.hasDiscount) {
            return true;
          }
          if (!absoluteValue && context.document.discount.format === 'absolute') {
            return 'O valor é obrigatório se o desconto estiver habilitado';
          }
          return true;
        }),
    },
    {
      title: 'Agendar desconto',
      name: 'hasSchedule',
      type: 'boolean',
    },
    {
      name: 'schedule',
      title: 'Período de validade do desconto',
      type: 'object',
      hidden: ({ document }) => {
        return !document?.discount?.hasSchedule
      },
      fields: [
        {
          title: 'Iniciar desconto a partir de: ',
          name: 'startDate',
          type: 'datetime',
          description: "Em branco para começar a valer imediatamente",
          options: {
            dateFormat: 'DD-MM-YYYY',
            timeStep: 5,
            calendarTodayLabel: 'Hoje',
          },
        },
        {
          title: 'Encerrar desconto em:',
          name: 'endDate',
          type: 'datetime',
          options: {
            dateFormat: 'DD-MM-YYYY',
            timeStep: 5,
            calendarTodayLabel: 'Hoje',
          },
          validation: (Rule) =>
            Rule.custom((endDate, context) => {
              if (!endDate && context.document.discount.hasSchedule) {
                if (!context.document.hasDiscount) {
                  return true;
                }
                return 'A data de encerramento é obrigatória se o agendamento estiver habilitado';
              }
              return true;
            }),
        },
        {
          title: 'Exibir contagem regressiva',
          name: 'hasCountdown',
          type: 'boolean',
        },
      ]
    },
  ]
};
