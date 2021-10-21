export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('O nome do autor é obrigatório'),
      ],
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    },
  ],
};
