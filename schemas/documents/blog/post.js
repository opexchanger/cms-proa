export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields: [
    {
      name: 'locale',
      title: 'Localidade',
      type: 'string',
      options: {
        list: [
          {
            title: 'Português',
            value: 'pt-BR',
          },
          {
            title: 'Espanhol',
            value: 'es-ES',
          },
          {
            title: 'Inglês',
            value: 'en-US',
          },
        ],
      },
      validation: (Rule) => Rule.required().error('A localidade é obrigatória'),
    },
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
      title: 'Excerto - Prévia da postagem',
      type: 'text',
      rows: 2,
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
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'author' }],
    },
  ],
};
