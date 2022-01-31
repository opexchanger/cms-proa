export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título da postagem',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('O título da postagem é obrigatório'),
        Rule.min(10).warning('O título ideal deve ter no mínimo 10 caracteres'),
        Rule.max(60).warning('O título ideal deve ter no máximo 60 caracteres'),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (val) =>
          val
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[@#$%&*,.:;!?'"|(){}<>]/g, '')
            .replace(/\s+/g, '-'),
      },
    },
    {
      name: 'description',
      title: 'Descrição da postagem',
      type: 'text',
      rows: 2,
      validation: (Rule) => [
        Rule.required().error('A descrição da postagem é obrigatória'),
        Rule.min(50).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres'),
        Rule.max(160).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres'),
      ],
    },
    {
      name: 'date',
      title: 'Data da publicação',
      type: 'date',
    },
    {
      name: 'coverImage',
      title: 'Imagem de capa',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'textContent',
      validation: (Rule) => [
        Rule.required().error('O conteúdo da postagem é obrigatório'),
      ],
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'author' }],
    },
  ],
};
