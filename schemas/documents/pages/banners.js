export default {
  name: 'banner',
  title: 'Textos da página Home',
  type: 'document',
  // __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: 'Banner Promocional',
      name: 'promoBanner',
      type: 'object',
      fields: [
        { name: 'link', type: 'url', title: 'Link', description: 'Para onde o clique no banner leva' },
        { name: 'image_desk', type: 'image', title: 'Imagem do banner para desktop', description: 'Tamanho: 1920x300' },
        { name: 'image_mob', type: 'image', title: 'Imagem do banner para desktop', description: 'Tamanho: 1920x300' }
      ]
    },
  ]
}