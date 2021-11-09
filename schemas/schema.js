// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// // documents
import region from './documents/region';
import subRegion from './documents/subRegion';
import travel from './documents/travel';
import category from './documents/category';

import geral from './documents/pages/geral';
import team from './documents/pages/team';
import testimonials from './documents/pages/testimonials';
import home from './documents/pages/home';
import modal from './documents/pages/modal';

import post from './documents/blog/post';
import author from './documents/blog/author';

import companyInfo from './documents/companyInfo';

// objects
import textContent from './objects/textContent';
import slugValidated from './objects/slugValidated';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Proa',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    geral,
    home,
    team,
    testimonials,
    modal,
    region,
    subRegion,
    travel,
    category,
    author,
    post,
    companyInfo,
    textContent,
    slugValidated,
  ]),
});

//
