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
      title: 'URL',
      name: 'slug',
      type: 'slugValidated',
      description:
        'Identificador da página do grupo na barra de endereços. Gere automaticamente com o botão "generate".',
      validation: (Rule) => Rule.required().error('O slug é obrigatório'),
    },
    {
      title: 'Viagens no Grupo',
      name: 'travels',
      type: 'array',
      of: [{ type: 'travel' }]
    },
    {
      title: 'Descrição',
      name: 'description',
      type: 'text',
      rows: 2,
    },
  ]
}