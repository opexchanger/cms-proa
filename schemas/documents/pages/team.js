export default {
  name: 'team',
  title: 'Equipe',
  type: 'document',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: "Título da seção Equipe",
      name: "teamTitle",
      type: "string",
    },
    {
      title: "Texto da seção Equipe",
      name: "teamText",
      type: "textContent",
    },
    {
      title: 'Funcionários',
      name: 'employees',
      type: 'array',
      of: [
        {
          title: 'Funcionário',
          type: 'object',
          fields: [
            {
              title: 'Nome',
              name: 'name',
              type: 'string'
            },
            {
              title: 'Função',
              name: 'position',
              type: 'string'
            },
            {
              title: 'Link do Whatsapp',
              name: 'whatsappLink',
              type: 'url'
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