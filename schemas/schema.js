// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// // documents
import region from './documents/region';
import subRegion from './documents/subRegion';
import travel from './documents/travel';
import category from './documents/category';

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
    region,
    subRegion,
    travel,
    category,
    textContent,
    slugValidated,
  ]),
});

//
