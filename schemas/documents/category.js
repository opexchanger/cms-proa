export default {
  name: 'category',
  title: 'Categorias',
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
        'Identificador da página da categoria na barra de endereços. Gere automaticamente com o botão "generate".',
      validation: (Rule) => Rule.required().error('O slug é obrigatório'),
    },
    {
      title: 'Descrição',
      name: 'description',
      type: 'text',
      rows: 2,
    },
  ]
}