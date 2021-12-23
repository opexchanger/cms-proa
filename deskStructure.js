import S from '@sanity/desk-tool/structure-builder';
import { RiFileTextFill, RiLandscapeFill } from "react-icons/ri";
import { FaPencilAlt, FaNewspaper, FaUserCircle, FaPlane, FaTags, FaMap, FaMapPin, FaBuilding } from "react-icons/fa";

import PreviewIFrame from './components/previewIframe';

const hiddenDocTypes = (listItem) =>
  ![
    'geral',
    'home-page',
    'team',
    'testimonials',
    'modal',
    'region',
    'subRegion',
    'travel',
    'category',
    'author',
    'post',
    'companyInfo',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Conteúdos do Site')
        .icon(RiFileTextFill)
        .child(
          S.list()
            .title('Páginas')
            .items([
              S.listItem()
                .title('Geral')
                .child(S.document().schemaType('geral').documentId('geral')),
              S.listItem()
                .title('Página Home')
                .child(
                  S.document()
                    .schemaType('home-page')
                    .documentId('ee60bf9f-e09c-4779-b84b-0b2f5cd0494d')
                    .views([S.view.form(), PreviewIFrame()])
                ),
              S.listItem()
                .title('Formulário de venda')
                .child(S.document().schemaType('modal').documentId('modal')),
            ])
        ),
      S.listItem()
        .title('Viagens')
        .icon(FaPlane)
        .child(
          S.list()
            .title('Cadastros das viagens')
            .items([
              S.listItem()
                .title('Regiões(?)')
                .schemaType('region')
                .icon(FaMap)
                .child(
                  S.documentList('region')
                    .title('Regiões(?)')
                    .menuItems(S.documentTypeList('region').getMenuItems())
                    .filter('_type == "region"')
                ),
              S.listItem()
                .title('Destinos(?)')
                .schemaType('subRegion')
                .icon(FaMapPin)
                .child(
                  S.documentList('subRegion')
                    .title('Destinos(?)')
                    .menuItems(S.documentTypeList('subRegion').getMenuItems())
                    .filter('_type == "subRegion"')
                ),
              S.listItem()
                .title('Categorias de Viagem')
                .schemaType('category')
                .icon(FaTags)
                .child(
                  S.documentList('category')
                    .title('Categorias de Viagem')
                    .menuItems(S.documentTypeList('category').getMenuItems())
                    .filter('_type == "category"')
                ),
              S.listItem()
                .title('Viagens')
                .schemaType('travel')
                .icon(RiLandscapeFill)
                .child(
                  S.documentTypeList('travel')
                    .title('Viagens')
                    .child(documentId =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('travel')
                        .views([S.view.form(), PreviewIFrame()])
                    )
                ),
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
                .schemaType('post')
                .icon(FaNewspaper)
                .child(
                  S.documentList('post')
                    .title('Postagens')
                    .menuItems(S.documentTypeList('post').getMenuItems())
                    .filter('_type == "post"')
                ),
              S.listItem()
                .title('Autores')
                .schemaType('author')
                .icon(FaUserCircle)
                .child(
                  S.documentList('author')
                    .title('Autores')
                    .menuItems(S.documentTypeList('author').getMenuItems())
                    .filter('_type == "author"')
                ),
            ])
        ),
      S.listItem()
        .title('Informações da Empresa')
        .icon(FaBuilding)
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('519c483c-cd8e-412d-9b99-5872751efa61')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
