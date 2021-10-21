export default {
  name: "companyInfo",
  type: "document",
  title: "Informações da Empresa",
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      title: 'Telefones para contato',
      name: 'phones',
      type: 'array',
      of: [
        {
          title: 'Telefone',
          type: 'object',
          fields: [
            {
              title: 'Nome do Contato',
              name: 'name',
              type: 'string'
            },
            {
              title: 'Número',
              name: 'number',
              type: 'string'
            },
          ]
        }
      ]
    },
    {
      title: "Email para contato",
      name: "email",
      type: "string",
    },
    {
      title: "Endereço",
      name: "address",
      type: "string",
    },
    {
      title: "Link do Whatsapp",
      name: "whatsapp",
      type: "string",
    },
  ],
};
