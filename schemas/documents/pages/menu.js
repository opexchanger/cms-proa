export default {
  name: 'menu',
  title: 'Menu do Site',
  type: 'document',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: 'Itens do Menu',
      name: 'menu',
      type: 'object',
      fields: [
        {
          title: 'Home',
          name: 'home',
          type: 'object',
          fields: [
            {
              title: 'Ativo',
              name: 'isActive',
              type: 'boolean',
              initialValue: 'true',
            },
            {
              title: 'Título',
              name: 'title',
              type: 'string',
            },

          ]
        },
        {
          title: 'Blog',
          name: 'blog',
          type: 'object',
          fields: [
            {
              title: 'Ativo',
              name: 'isActive',
              type: 'boolean',
              initialValue: true,
            },
            {
              title: 'Título',
              name: 'title',
              type: 'string',
            },
          ]
        },
        {
          title: 'Destinos de Viagens',
          name: 'travels',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [
                { type: 'category' },
                { type: 'customRegion' }
              ]
            }
          ]
        }
      ]
    }
  ]
}