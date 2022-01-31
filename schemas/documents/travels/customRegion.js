import sanityClient from 'part:@sanity/base/client';
const client = sanityClient.withConfig({ apiVersion: '2022-01-01' })
import countryMultiSelect from '../../../components/countryMultiSelect';
import stateMultiSelect from '../../../components/stateMultiSelect';
import cityMultiSelect from '../../../components/cityMultiSelect';

export default {
  name: 'customRegion',
  title: 'Região',
  type: 'document',
  fields: [
    {
      title: 'Nome',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Campo obrigatório'),
    },
    {
      title: 'Descrição',
      name: 'description',
      type: 'text',
      rows: 2,
      validation: Rule => [
        Rule.required().error('A Descrição é obrigatória'),
        Rule.min(50).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres'),
        Rule.max(160).warning('O ideal é que a descrição tenha entre 50 e 160 caracteres')
      ]
    },
    {
      title: 'Incluir Categoria:',
      name: 'category',
      type: 'reference',
      to: [
        { type: 'category' },
      ],
      validation: (Rule) => Rule.required().error('É necessário escolher uma categoria'),
    },
    {
      title: 'Agrupar por',
      name: 'filterBy',
      type: 'string',
      initialValue: 'country',
      validation: (Rule) => Rule.required().error('Campo obrigatório'),
      options: {
        list: [
          { title: 'Países', value: 'country' },
          { title: 'Estados', value: 'state' },
          { title: 'Cidades', value: 'city' }
        ]
      }
    },
    {
      title: 'Condição de agrupamento',
      name: 'filterCondition',
      type: 'string',
      initialValue: 'all',
      validation: (Rule) => Rule.required().error('Campo obrigatório'),
      options: {
        list: [
          { title: 'Todos os Selecionados:', value: 'all' },
          { title: 'Todos EXCETO o Selecionado:', value: 'allExcept' }
        ],
      }
    },
    {
      title: 'Seleção',
      name: 'countrySelection',
      type: 'array',
      hidden: ({ document }) => {
        return document?.filterBy !== 'country'
      },
      validation: (Rule) =>
        Rule.custom((countrySelection, context) => {
          if (!(context.document?.filterBy === 'country')) {
            return true;
          }
          if (countrySelection && countrySelection.length) {
            return true;
          }
          return 'É necessário selecionar pelo menos um país';
        }),
      of: [
        {
          type: 'reference',
          to: [
            { type: 'country' },
          ]
        }
      ],
      inputComponent: countryMultiSelect
    },
    {
      title: 'Selecione o país para exibir as opções',
      name: 'countryReference',
      type: 'reference',
      to: { type: 'country' },
      hidden: ({ document }) => {
        return !document?.filterBy || document?.filterBy === 'country'
      },
    },
    {
      title: 'Seleção',
      name: 'stateSelection',
      type: 'array',
      hidden: ({ document }) => {
        return document?.filterBy !== 'state'
      },
      validation: (Rule) =>
        Rule.custom((stateSelection, context) => {
          if (!(context.document?.filterBy === 'state')) {
            return true;
          }
          if (stateSelection && stateSelection.length) {
            return true;
          }
          return 'É necessário selecionar pelo menos um estado';
        }),
      of: [
        {
          type: 'reference',
          to: [
            { type: 'state' },
          ]
        }
      ],
      inputComponent: stateMultiSelect
    },
    {
      title: 'Seleção',
      name: 'citySelection',
      type: 'array',
      hidden: ({ document }) => {
        return document?.filterBy !== 'city'
      },
      validation: (Rule) =>
        Rule.custom((citySelection, context) => {
          if (!(context.document?.filterBy === 'city')) {
            return true;
          }
          if (citySelection && citySelection.length) {
            return true;
          }
          return 'É necessário selecionar pelo menos uma cidade';
        }),
      of: [
        {
          type: 'reference',
          to: [
            { type: 'city' },
          ]
        }
      ],
      inputComponent: cityMultiSelect
    },
    {
      title: 'Exibir selecionados mesmo que não possuam viagens',
      name: 'showEmpty',
      type: 'boolean',
      initialValue: false
    },
    {
      title: 'Personalizar mensagem para quando a seleção não possui viagens',
      name: 'emptyMessage',
      type: 'text',
      rows: 2,
      // TODO ter um padrão do sistema
      description: 'O padrão do sistema é: ""',
      hidden: ({ document }) => {
        return !document?.showEmpty
      },
    },
    // TODO vai ser movido pra um documento de configurações em separado
    {
      title: 'Destaque na tela inicial?',
      name: 'isFeatured',
      type: 'boolean',
    },
    {
      title: 'Imagem de capa',
      name: 'coverImage',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'URL',
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
        // TODO tentar chamar isso só na geração
        isUnique: async (slug, options) => {
          const { document } = options;
          const id = document._id.replace(/^drafts\./, '');
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug
          }
          const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
          console.log('>>>>>> api calling');
          // TODO ele n deixa retornar mensagem pro isUnique
          return client.fetch(query, params);
        }
      },
      validation: (Rule) => Rule.required().error('O slug é obrigatório'),
    },
  ],
};
