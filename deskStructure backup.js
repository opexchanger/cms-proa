import S from '@sanity/desk-tool/structure-builder';
import { MdAirplanemodeActive, MdTextSnippet } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const hiddenDocTypes = (listItem) =>
  ![
    'home-page',
    'region',
    'subRegion',
    'travel',
    'category',
    'author',
    'post',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Textos')
        .icon(MdTextSnippet)
        .child(
          S.list()
            .title('Páginas')
            .items([
              S.listItem()
                .title('Home')
                .child(S.document().schemaType('home').documentId('home')),
              // S.listItem()
              //   .title('Contato')
              //   .child(S.document().schemaType('about').documentId('about')),
            ])
        ),
      S.listItem()
        .title('Viagens')
        .icon(MdAirplanemodeActive)
        .child(
          S.list()
            .title('Cadastros das viagens')
            .items([
              S.listItem()
                .title('Regiões')
                .schemaType('region')
                .child(S.documentList().id('region').filter('_type == "region"')),
              S.listItem()
                .title('SubRegiões(?)')
                .child(S.document().schemaType('subRegion').documentId('subRegion')),
              S.listItem()
                .title('Categorias de Viagem')
                .child(S.document().schemaType('category').documentId('category')),
              S.listItem()
                .title('Destinos')
                .child(S.document().schemaType('travel').documentId('travel')),
            ])
        ),
      S.listItem()
        .title('Blog')
        .icon(FaPencilAlt)
        .child(
          S.list()
            .title('Cadastros do Blog')
            .items([
              S.listItem()
                .title('Postagens')
                .child(S.document().schemaType('post').documentId('post')),
              S.listItem()
                .title('Autores')
                .child(S.document().schemaType('author').documentId('author')),
            ])
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
