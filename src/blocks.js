const {
	registerBlockType,
} = wp.blocks;

import './utils/block-category';

import * as card from './blocks/card';

const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, category, settings } = block;

	registerBlockType( name, {
		category: category,
		...settings,
	} );
};

export const registerBatchBlocks = () => {
	[
		card,
	].forEach( registerBlock );
};
registerBatchBlocks();
