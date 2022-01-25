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
            {
              title: 'Slug',
              name: 'slug',
              type: 'string',
              initialValue: '/',
              hidden: true,
              readOnly: true
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
            {
              title: 'Slug',
              name: 'slug',
              type: 'string',
              initialValue: '/blog',
              hidden: true,
              readOnly: true
            },
          ]
        },
        {
          title: 'Título do SubMenu das Viagens',
          name: 'travelsTitle',
          type: 'string',
          initialValue: 'Viagens',
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