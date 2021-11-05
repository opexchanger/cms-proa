export default {
  name: 'modal',
  title: 'Textos do modal de venda',
  type: 'document',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: "Título do modal",
      name: "title",
      type: "string",
    },
    {
      title: "Subítulo do modal",
      name: "subtitle",
      type: "text",
      rows: 2,
      descripion: "Texto extra, ou descrição, logo abaixo do título"
    },
    {
      title: "Opções de assunto para o contato",
      name: "subjects",
      type: "array",
      description: "A lista de assuntos que o usuário pode escolher como motivação para o contato",
      of: [
        {
          title: 'Assunto',
          type: 'object',
          fields: [
            {
              title: 'Texto a ser exibido na opção',
              name: 'text',
              type: 'string'
            },
          ]
        }
      ]
    },
    {
      title: "Texto do botão para contato por Email",
      name: "btnEmailText",
      type: "string",
    },
    {
      title: "Texto do botão para contato por Whatsapp",
      name: "btnWhatsappText",
      type: "string",
    },
    {
      title: "Resposta de sucesso ao contato por Whatsapp",
      name: "successTitleWhatsapp",
      type: "string",
      descripion: "O título que aparece em tamanho grande para confirmar o sucesso."
    },
    {
      title: "Mensagem extra pelo sucesso do contato por Whatsapp",
      name: "successTextWhatsapp",
      type: "text",
      rows: 3,
      descripion: "Um texto mais descritivo abaixo do título."
    },
    {
      title: "Resposta em caso de falha no contato por Whatsapp",
      name: "failTitleWhatsapp",
      type: "string",
      descripion: "O título que aparece em tamanho grande para informar a falha."
    },
    {
      title: "Mensagem extra em caso de falha no contato por Whatsapp",
      name: "failTextWhatsapp",
      type: "text",
      rows: 3,
      descripion: "Um texto mais descritivo abaixo do título."
    },
    {
      title: "Resposta de sucesso ao contato por Email",
      name: "successTitleEmail",
      type: "string",
      descripion: "O título que aparece em tamanho grande para confirmar o sucesso."
    },
    {
      title: "Mensagem extra pelo sucesso do contato por Email",
      name: "successTextEmail",
      type: "text",
      rows: 3,
      descripion: "Um texto mais descritivo abaixo do título."
    },
    {
      title: "Resposta em caso de falha no contato por Email",
      name: "failTitleEmail",
      type: "string",
      descripion: "O título que aparece em tamanho grande para informar a falha."
    },
    {
      title: "Mensagem extra em caso de falha no contato por Email",
      name: "failTextEmail",
      type: "text",
      rows: 3,
      descripion: "Um texto mais descritivo abaixo do título."
    },
  ]
}