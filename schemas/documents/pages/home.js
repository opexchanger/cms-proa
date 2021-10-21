export default {
  name: 'home-page',
  title: 'Textos da página Home',
  type: 'document',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: "Slogan",
      name: "slogan",
      type: "string",
      description: "Frase no cabeçalho logo abaixo da Logo"
    },
    {
      title: "Texto dos botões Call to Action",
      name: "ctaButtonText",
      type: "string",
      description: "Texto usado nos botões que abrem o formulário de contato"
    },
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
      title: "Título da seção Contato",
      name: "contactTitle",
      type: "string",
    },
    {
      title: "Texto da seção Contato",
      name: "contactText",
      type: "textContent",
    },
  ]
}