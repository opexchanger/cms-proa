export default {
  name: 'newsletter',
  title: 'Cadastro de Newsletter',
  type: 'object',
  fields: [
    {
      title: 'Código do Grupo',
      name: 'groupId',
      type: 'string',
      description: 'Identificador do Grupo no qual o usuário vai ser inserido, dentro do MailerLite',
      validation: (Rule) => Rule.required().error('O Código é obrigatório'),
    },
    {
      title: 'Campos de preenchimento',
      name: 'fields',
      type: 'object',
      fields: [
        {
          title: 'Nome',
          name: 'name',
          type: 'boolean',
          options: {
            layout: 'checkbox'
          }
        },
        {
          title: 'Email',
          name: 'email',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
          options: {
            layout: 'checkbox'
          }
        },
      ]
    },
    {
      title: 'Mensagens de Retorno',
      name: 'messages',
      type: 'object',
      fields: [
        {
          title: 'Mensagem de sucesso',
          name: 'success',
          type: 'string',
        },
        {
          title: 'Mensagem de erro',
          name: 'fail',
          type: 'string',
          description: 'Se por algum infortúnio alguma coisa falhar'
        },
        {
          title: 'Texto do Botão',
          name: 'button',
          type: 'string',
        }
      ]
    },
  ]
};
