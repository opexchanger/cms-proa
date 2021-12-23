export default {
  name: 'home-page',
  title: 'Textos da página Home',
  type: 'document',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: 'Benefícios listados no cabeçalho',
      name: 'tiles',
      type: 'object',
      fields: [
        { name: 'tile_1', type: 'string', title: 'Benefício #1' },
        { name: 'tile_2', type: 'string', title: 'Benefício #2' },
        { name: 'tile_3', type: 'string', title: 'Benefício #3' }
      ]
    },
    {
      title: "Título da seção Apresentação",
      name: "presentationTitle",
      type: "string",
    },
    {
      title: "Subtítulo da seção Apresentação",
      name: "presentationSubtitle",
      type: "string",
    },
    {
      title: 'Mosaico de fotos',
      name: 'mosaic',
      type: 'array',
      of: [
        {
          title: 'Foto',
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string',
              options: { isHighlighted: true },
            },
          ],
        },
      ]
    },
    {
      title: "Título do bloco Experiências",
      name: "experiencesTitle",
      type: "string",
    },
    {
      title: "Texto do bloco Experiências",
      name: "experiencesText",
      type: "textContent",
    },
    {
      title: "Texto do botão do bloco Experiências",
      name: "experiencesButtonText",
      type: "string",
    },
    {
      title: 'Banner Promocional',
      name: 'promoBanner',
      type: 'image',
    },
    {
      title: "Título da seção Sobre",
      name: "aboutTitle",
      type: "string",
    },
    {
      title: "Texto da seção Sobre",
      name: "aboutText",
      type: "textContent",
    },
    {
      title: "Vídeo da seção Sobre",
      name: "aboutVideoUrl",
      type: "url"
    },
    {
      title: "Título da seção Destinos",
      name: "destinationsTitle",
      type: "string",
    },
    {
      title: "Texto da seção Destinos",
      name: "destinationsText",
      type: "textContent",
    },
    {
      title: "Texto do botão da seção Destinos",
      name: "destinationsButtonText",
      type: "string",
    },
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