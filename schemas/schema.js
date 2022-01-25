// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// // documents
import country from './documents/travels/country';
import state from './documents/travels/state';
import city from './documents/travels/city';
import customRegion from './documents/travels/customRegion';

import travel from './documents/travels/travel';
import category from './documents/travels/category';
import group from './documents/travels/group';

import geral from './documents/pages/geral';
import home from './documents/pages/home';
import modal from './documents/pages/modal';
import menu from './documents/pages/menu';

import post from './documents/blog/post';
import author from './documents/blog/author';

import companyInfo from './documents/info/companyInfo';

// objects
import textContent from './objects/textContent';
import slugValidated from './objects/slugValidated';
import discount from './objects/discount';
import newsletter from './objects/newsletter';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Proa',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    geral,
    home,
    modal,
    menu,
    country,
    state,
    city,
    customRegion,
    travel,
    category,
    group,
    author,
    post,
    companyInfo,
    textContent,
    slugValidated,
    discount,
    newsletter
  ]),
});
