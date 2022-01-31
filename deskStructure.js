import S from '@sanity/desk-tool/structure-builder';
import { RiFileTextFill, RiLandscapeFill } from "react-icons/ri";
import { FaPencilAlt, FaNewspaper, FaUserCircle, FaPlane, FaTags, FaMap, FaMapPin, FaBuilding } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr"

import PreviewIFrame from './components/previewIframe';

const hiddenDocTypes = (listItem) =>
  ![
    'geral',
    'home-page',
    'team',
    'testimonials',
    'modal',
    'menu',
    'country',
    'state',
    'city',
    'customRegion',
    'travel',
    'group',
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
                .title('Cabeçalho e Rodapé')
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
              S.listItem()
                .title('Menu do Site')
                .child(S.document().schemaType('menu').documentId('menu')),
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
                .title('Localidades')
                .icon(FaMap)
                .child(
                  S.list()
                    .title('Localidades')
                    .items([
                      S.listItem()
                        .title('Países')
                        .schemaType('country')
                        .icon(FaMapPin)
                        .child(
                          S.documentTypeList('country')
                            .title('Países')
                            .child(documentId =>
                              S.document()
                                .documentId(documentId)
                                .schemaType('country')
                                .views(S.view.form())
                            )
                        ),
                      S.listItem()
                        .title('Estados')
                        .schemaType('state')
                        .icon(FaMapPin)
                        .child(
                          S.documentTypeList('state')
                            .title('Estados')
                            .child(documentId =>
                              S.document()
                                .documentId(documentId)
                                .schemaType('state')
                                .views(S.view.form())
                            )
                        ),
                      S.listItem()
                        .title('Cidades')
                        .schemaType('city')
                        .icon(FaMapPin)
                        .child(
                          S.documentTypeList('city')
                            .title('Cidades')
                            .child(documentId =>
                              S.document()
                                .documentId(documentId)
                                .schemaType('city')
                                .views(S.view.form())
                            )
                        ),
                    ])
                ),
              S.listItem()
                .title('Regiões Personalizadas')
                .schemaType('customRegion')
                .icon(GrMapLocation)
                .child(
                  S.documentTypeList('customRegion')
                    .title('Regioes Personalizadas')
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
              S.listItem()
                .title('Grupos')
                .schemaType('group')
                .icon(BsStack)
                .child(
                  S.documentTypeList('group')
                    .title('Grupos')
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
