export default {
  name: 'testimonials',
  title: 'Depoimentos',
  type: 'document',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: "Título da seção Depoimentos",
      name: "testimonialsTitle",
      type: "string",
    },
    {
      title: "Texto da seção Depoimentos",
      name: "testimonialsText",
      type: "textContent",
    },
    {
      title: 'Depoimentos',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          title: 'Depoimento',
          type: 'object',
          fields: [
            {
              title: 'Nome da pessoa',
              name: 'name',
              type: 'string'
            },
            {
              title: 'Texto do depoimento',
              name: 'text',
              type: 'text',
              rows: 4
            },
            {
              title: 'Foto',
              name: 'photo',
              type: 'image'
            },
          ]
        }
      ]
    },
  ]
}