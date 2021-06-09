export default {
  name: 'travel',
  title: 'Viagem',
  type: 'document',
  fields: [
    {
      title: 'Nome da viagem',
      name: 'title',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'slug',
      type: 'slugValidated',
      description:
        'Identificador da página da viagem na barra de endereços. Gerada automaticamente com o botão.',
    },
    {
      name: 'coverImage',
      title: 'Imagem de capa',
      type: 'image',
    },
    {
      title: 'Sobre a viagem',
      name: 'content',
      type: 'textContent',
      description: 'O conteúdo principal da página da viagem',
    },
    {
      title: 'Subregião a que pertence',
      name: 'subRegion',
      type: 'reference',
      to: [{ type: 'subRegion' }],
    },
    {
      title: 'Região a que pertence',
      name: 'region',
      type: 'reference',
      to: [{ type: 'region' }],
    },
  ],
};
