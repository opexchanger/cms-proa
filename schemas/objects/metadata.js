export default {
  title: 'Metadados da página',
  name: 'metadata',
  type: 'object',
  description: 'Essas informações não aparecem na página em si, mas são utilizadas pelos mecanismos de busca.',
  fields: [
    {
      title: 'Título da Página',
      name: 'title',
      type: 'string',
      description: 'O título que aparece na aba da página, e nos mecanismos de busca.',
      validation: (Rule) => Rule.required().error('O Título é obrigatório'),
    },
    {
      title: 'Descrição da Página',
      name: 'description',
      type: 'text',
      rows: 2,
      description: 'A descrição da página para os mecanismos de busca.',
      validation: Rule => [
        Rule.required().error('A Descrição é obrigatória'),
        Rule.min(50).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres'),
        Rule.max(160).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres')
      ]
    },
  ]
}