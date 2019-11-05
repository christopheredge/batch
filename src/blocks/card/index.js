/*
 * Styles
 */

/*
 * Plugin dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

/*
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;

/*
 * Block Constants
 */
const { name, category } = metadata;

const attributes = {
  ...metadata.attributes,
};

const settings = {
  title: _x('Card', 'block name'),
  description: __('A simple informational cta card.'),
  icon: 'screenoptions',
  keywords: [
    _x( 'card', 'block keyword' ),
    _x( 'cta', 'block keyword' ),
    _x( 'info', 'block keyword' )
  ],
  attributes,
  edit,
  save
};

export { name, category, metadata, settings, attributes };
