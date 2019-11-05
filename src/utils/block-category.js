/**
 * WordPress dependencies
 */
const { getCategories, setCategories } = wp.blocks;
const { __, sprintf } = wp.i18n;

/**
 * Internal dependencies
 */
 setCategories( [
 	{
 		slug: 'batch',
 		title: 'Batch',
 	},
 	...getCategories().filter( ( { slug } ) => slug !== 'coblocks-galleries' ),
 ] );
