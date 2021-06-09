export default {
  name: 'textContent',
  title: 'Conteúdo',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Título #1', value: 'h2' },
        { title: 'Título #2', value: 'h3' },
        { title: 'Título #3', value: 'h4' },
        { title: 'Título #4', value: 'h5' },
        { title: 'Título #5', value: 'h6' },
        { title: 'Citação', value: 'blockquote' },
      ],
    },
    {
      title: 'Imagem',
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
  ],
};
