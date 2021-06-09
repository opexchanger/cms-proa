export default {
  name: 'slugValidated',
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
};
