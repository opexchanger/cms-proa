export default {
  name: 'category',
  title: 'Categoria',
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
      validation: Rule => [
        Rule.required().error('A Descrição é obrigatório'),
        Rule.min(50).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres'),
        Rule.max(160).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres')
      ]
    },
  ]
}