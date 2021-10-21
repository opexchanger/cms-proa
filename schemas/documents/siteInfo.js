export default {
  name: 'siteInfo',
  title: 'Informações do Site',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Descrição',
      name: 'description',
      type: 'text',
      rows: 4
    },
  ]
}