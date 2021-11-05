export default {
  name: 'geral',
  title: 'Textos que aparecem em várias páginas',
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
      title: "Título da seção Contato",
      name: "contactTitle",
      type: "string",
    },
    {
      title: 'Imagem da seção Contato',
      name: 'contactImage',
      type: 'image',
    },
    {
      title: "Texto da seção Contato",
      name: "contactText",
      type: "textContent",
    },
  ]
}