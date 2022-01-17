// https://www.sanity.io/docs/custom-input-widgets
// bora ver aí a parada de criar um multiselect com checkboxes

export default {
  name: 'commercialRegion',
  title: 'Região',
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
      title: 'Agrupar por',
      name: 'groupBy',
      type: 'string',
      options: {
        list: [
          { title: 'País', value: 'country' },
          { title: 'Estados', value: 'state' },
          { title: 'Cidades', value: 'cities' }
        ]
      }
    },
    {
      title: 'Condição de agrupamento',
      name: 'groupCondition',
      type: 'string',
      options: {
        list: [
          { title: 'Todos os Selecionados:', value: 'all' },
          { title: 'Todos EXCETO o Selecionado:', value: 'allExcept' }
        ],
      }
    },
    {
      title: 'Seleção',
      name: 'selection',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'state' },
          ]
        }
      ]
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
